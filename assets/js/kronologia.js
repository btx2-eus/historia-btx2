/* =========================================================
   Kronologia interaktiboa — 100 data-klabe (1808–2020)
   Denbora-lerro proportzionala, 3 karril (eremuka), iragazkiak,
   bilaketa, zoom/pan eta xehetasun-panela. Vanilla JS, mendekotasunik gabe.
   ========================================================= */
(function () {
  "use strict";

  var dataEl = document.getElementById("kx-data");
  if (!dataEl) return;
  var CFG = JSON.parse(dataEl.textContent);
  var RECS = CFG.records;
  var ERAS = CFG.eras;
  var EREMU = CFG.eremu;          // { es:{name,main,soft,ink}, ... }
  var AXIS_MIN = CFG.axisMin;
  var AXIS_MAX = CFG.axisMax;
  var SPAN = AXIS_MAX - AXIS_MIN; // urteak
  var LANE_ORDER = ["es", "eh", "mu"];

  // --- Layout konstanteak ---
  var PAD_X = 80;            // ezker/eskuin tartea (px)
  var STRIP = 38;           // karril bakoitzaren goiko banda (label + baseline)
  var ROW0 = 16;            // baseline-tik lehen errenkadara
  var ROW_GAP = 42;         // errenkaden arteko tartea
  var PILL_H = 30;          // pilularen altuera
  var BOTTOM_PAD = 16;
  var GAP_PX = 9;           // pilulen arteko gutxieneko tartea
  var MIN_PXY = 7, MAX_PXY = 42;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Egoera ---
  var state = {
    pxy: 16,
    eremu: { es: true, eh: true, mu: true },
    pauOnly: false,
    query: "",
    selected: null,
  };

  // --- DOM ---
  var elScroll = document.getElementById("kx-scroll");
  var elCanvas = document.getElementById("kx-canvas");
  var elEras = document.getElementById("kx-eras");
  var elEraLabels = document.getElementById("kx-eralabels");
  var elRuler = document.getElementById("kx-ruler");
  var elLanes = document.getElementById("kx-lanes");
  var elEmpty = document.getElementById("kx-empty");
  var elCount = document.getElementById("kx-count");
  var elEraNav = document.getElementById("kx-eranav");
  var elProz = document.getElementById("kx-prozesuak");
  var elDrawer = document.getElementById("kx-drawer");
  var elDrawerBody = document.getElementById("kx-drawer-body");
  var elDrawerYear = document.getElementById("kx-d-year");
  var elScrim = document.getElementById("kx-scrim");
  var qInput = document.getElementById("kx-q");
  var qClear = document.getElementById("kx-q-clear");

  // --- Lagungarriak ---
  function xOf(year) { return PAD_X + (year - AXIS_MIN) * state.pxy; }
  function canvasW() { return PAD_X * 2 + SPAN * state.pxy; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function normq(s) {
    return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }
  var recById = {};
  RECS.forEach(function (r) { recById[r.id] = r; });

  // --- Iragazkia: errekord bat ikusgai dagoen? ---
  function matchesQuery(r) {
    if (!state.query) return true;
    return r.s.indexOf(state.query) !== -1;
  }
  function passes(r) {
    if (!state.eremu[r.e]) return false;
    if (state.pauOnly && r.p !== "H") return false;
    return matchesQuery(r);
  }

  /* ---------------- Atzeko planoa: garaiak + sareta ---------------- */
  function renderEras() {
    elEras.innerHTML = "";
    elEraLabels.innerHTML = "";
    var w = canvasW();

    ERAS.forEach(function (era) {
      var left = xOf(Math.max(era.s, AXIS_MIN));
      var right = xOf(Math.min(era.e, AXIS_MAX));
      var band = document.createElement("div");
      band.className = "kx-era-band";
      band.style.left = left + "px";
      band.style.width = (right - left) + "px";
      band.style.setProperty("--eb", "color-mix(in srgb, " + era.c + " 8%, transparent)");
      band.style.setProperty("--eb-c", era.c);
      elEras.appendChild(band);

      // Etiketa (bere bandaren barruan ezkerrera itsasten da)
      var box = document.createElement("div");
      box.className = "kx-eralabel-box";
      box.style.left = left + "px";
      box.style.width = (right - left) + "px";
      var lbl = document.createElement("span");
      lbl.className = "kx-era-label";
      lbl.style.setProperty("--el-ink", era.c);
      lbl.textContent = era.l;
      box.appendChild(lbl);
      elEraLabels.appendChild(box);
    });

    // Hamarkadako sareta-marrak
    var startDec = Math.ceil(AXIS_MIN / 10) * 10;
    for (var y = startDec; y <= AXIS_MAX; y += 10) {
      var g = document.createElement("div");
      g.className = "kx-grid-line";
      g.style.left = xOf(y) + "px";
      elEras.appendChild(g);
    }
  }

  function renderRuler() {
    elRuler.innerHTML = "";
    var startDec = Math.ceil(AXIS_MIN / 10) * 10;
    var labelEvery = state.pxy < 11 ? 20 : 10; // pilatzea ekiditeko
    for (var y = startDec; y <= AXIS_MAX; y += 10) {
      var t = document.createElement("div");
      t.className = "kx-tick";
      t.style.left = xOf(y) + "px";
      var showLabel = (y % labelEvery === 0);
      t.innerHTML = '<div class="kx-tick-line"></div>' +
        (showLabel ? '<div class="kx-tick-y">' + y + "</div>" : "");
      elRuler.appendChild(t);
    }
  }

  /* ---------------- Karrilak + pilulak ---------------- */
  function stack(records) {
    // urtez ordenatuta daude jada; errenkadetan banatu (talka saihestuz)
    var rows = []; // bakoitzak azken eskuin-ertza (px)
    records.forEach(function (r) {
      var x = xOf(r.y);
      var w = (r.p === "H") ? 56 : 50;
      var leftEdge = x - w / 2, rightEdge = x + w / 2;
      var placed = -1;
      for (var i = 0; i < rows.length; i++) {
        if (rows[i] + GAP_PX <= leftEdge) { placed = i; break; }
      }
      if (placed === -1) { placed = rows.length; rows.push(rightEdge); }
      else { rows[placed] = rightEdge; }
      r._row = placed;
    });
    return rows.length;
  }

  function renderLanes() {
    elLanes.innerHTML = "";
    var anyVisible = false;

    LANE_ORDER.forEach(function (key) {
      var meta = EREMU[key];
      var lane = document.createElement("div");
      lane.className = "kx-lane";
      lane.dataset.eremu = key;
      lane.style.setProperty("--c", meta.main);
      lane.style.setProperty("--c-soft", meta.soft);
      lane.style.setProperty("--c-ink", meta.ink);

      if (!state.eremu[key]) { lane.classList.add("is-hidden"); elLanes.appendChild(lane); return; }

      var recs = RECS.filter(function (r) { return r.e === key && passes(r); });
      var numRows = stack(recs);
      if (recs.length) anyVisible = true;

      var laneH = STRIP + ROW0 + Math.max(0, numRows - 1) * ROW_GAP + PILL_H + BOTTOM_PAD;
      if (numRows === 0) laneH = STRIP + 26;
      lane.style.height = laneH + "px";

      // Etiketa (sticky ezkerrean)
      var label = document.createElement("div");
      label.className = "kx-lane-label";
      label.innerHTML = esc(meta.name) + ' <span class="kx-lane-n">' + recs.length + "</span>";
      lane.appendChild(label);

      // Baseline
      var base = document.createElement("div");
      base.className = "kx-baseline";
      base.style.top = STRIP + "px";
      lane.appendChild(base);

      // Pilulak
      recs.forEach(function (r) {
        var top = STRIP + ROW0 + r._row * ROW_GAP;
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "kx-ev" + (r.p === "H" ? " is-handia" : "") + (state.selected === r.id ? " is-selected" : "");
        btn.style.left = xOf(r.y) + "px";
        btn.style.top = top + "px";
        btn.style.setProperty("--stick", (top - STRIP) + "px");
        btn.dataset.id = r.id;
        btn.textContent = r.y;
        btn.setAttribute("aria-label", r.y + ": " + r.t + " (" + meta.name + ")");
        lane.appendChild(btn);
      });

      elLanes.appendChild(lane);
    });

    elEmpty.hidden = anyVisible;
    elLanes.style.display = anyVisible ? "" : "none";
  }

  function updateCount() {
    var n = RECS.filter(passes).length;
    elCount.innerHTML = "<b>" + n + "</b> / " + RECS.length + " data";
  }

  function render() {
    elCanvas.style.width = canvasW() + "px";
    renderEras();
    renderRuler();
    renderLanes();
    updateCount();
  }

  /* ---------------- Hautaketa + panela ---------------- */
  function clearSelectionClasses() {
    elLanes.querySelectorAll(".kx-ev.is-selected, .kx-ev.is-related").forEach(function (b) {
      b.classList.remove("is-selected", "is-related");
    });
  }

  function buildDrawer(r) {
    var meta = EREMU[r.e];
    elDrawer.style.setProperty("--c", meta.main);
    elDrawer.style.setProperty("--c-soft", meta.soft);
    elDrawer.style.setProperty("--c-ink", meta.ink);
    elDrawerYear.innerHTML = esc(r.y) + (String(r.d) !== String(r.y) ? "<small>" + esc(r.d) + "</small>" : "");

    var pauTxt = r.p === "H" ? "Klabe handia" : "Klabe ertaina";
    var html = "";
    html += '<div class="kx-d-badges">';
    html += '<span class="kx-badge eremu">' + esc(meta.name) + "</span>";
    html += '<span class="kx-badge pau-' + r.p + '">★ ' + pauTxt + "</span>";
    if (r.dm) html += '<span class="kx-badge">' + esc(r.dm) + "</span>";
    html += "</div>";

    html += '<h3 class="kx-d-title" id="kx-d-title">' + esc(r.t) + "</h3>";

    if (r.al) {
      html += '<div class="kx-d-section"><h4>Aldi historikoa</h4><p>' + esc(r.al) +
        (r.ax ? ' · <span style="color:var(--c-ink)">' + esc(r.ax) + "</span>" : "") + "</p></div>";
    }
    if (r.ee) {
      html += '<div class="kx-d-section"><h4>Eragin-eremua</h4><p>' + esc(r.ee) + "</p></div>";
    }
    if (r.ka) {
      html += '<div class="kx-d-section"><h4>Azalpen didaktikoa</h4><p>' + esc(r.ka) + "</p></div>";
    }
    if (r.zk) {
      html += '<div class="kx-d-section"><h4>⭐ Zergatik da klabea?</h4><div class="kx-d-why"><p>' + esc(r.zk) + "</p></div></div>";
    }
    if (r.kg && r.kg.length) {
      html += '<div class="kx-d-section"><h4>Kontzeptu giltzak</h4><div class="kx-d-concepts">';
      r.kg.forEach(function (k) { html += "<span>" + esc(k) + "</span>"; });
      html += "</div></div>";
    }
    if (r.lo && r.lo.length) {
      html += '<div class="kx-d-section"><h4>Lotutako datak</h4><div class="kx-d-rel">';
      r.lo.forEach(function (yr) {
        var target = RECS.find(function (x) { return x.y === yr && x.id !== r.id; });
        if (target) {
          var tm = EREMU[target.e];
          html += '<button class="kx-rel-chip" data-goto="' + target.id + '" title="' + esc(target.t) + '">' +
            '<span class="kx-rel-e" style="background:' + tm.main + '"></span>' + yr + "</button>";
        } else {
          html += '<button class="kx-rel-chip" disabled title="Ez dago zerrendan">' + yr + "</button>";
        }
      });
      html += "</div></div>";
    }
    if (r.u) {
      html += '<div class="kx-d-section"><a class="kx-d-source" href="' + esc(r.u) + '" target="_blank" rel="noopener">Iturri orientagarria ↗</a></div>';
    }
    elDrawerBody.innerHTML = html;

    // Lotutako daten klikak
    elDrawerBody.querySelectorAll(".kx-rel-chip[data-goto]").forEach(function (b) {
      b.addEventListener("click", function () { select(+b.dataset.goto, true); });
    });
  }

  function openDrawer() {
    elDrawer.hidden = false;
    elScrim.hidden = false;
    void elDrawer.offsetWidth; // reflow behartu trantsizioa abiarazteko
    elDrawer.classList.add("is-open");
    elDrawer.setAttribute("aria-modal", "true");
  }
  function closeDrawer() {
    elDrawer.classList.remove("is-open");
    elScrim.hidden = true;
    elDrawer.setAttribute("aria-modal", "false");
    state.selected = null;
    clearSelectionClasses();
    history.replaceState(null, "", location.pathname + location.search);
    window.setTimeout(function () { if (!elDrawer.classList.contains("is-open")) elDrawer.hidden = true; }, 340);
  }

  function highlightSelection(r) {
    clearSelectionClasses();
    var sel = elLanes.querySelector('.kx-ev[data-id="' + r.id + '"]');
    if (sel) sel.classList.add("is-selected");
    // Lotutako datak nabarmendu denbora-lerroan
    (r.lo || []).forEach(function (yr) {
      elLanes.querySelectorAll(".kx-ev").forEach(function (b) {
        var rr = recById[b.dataset.id];
        if (rr && rr.y === yr && rr.id !== r.id) b.classList.add("is-related");
      });
    });
  }

  function centerOn(r, smooth) {
    var x = xOf(r.y);
    var target = x - elScroll.clientWidth / 2;
    elScroll.scrollTo({ left: Math.max(0, target), behavior: (smooth && !reduceMotion) ? "smooth" : "auto" });
  }

  function select(id, recenter) {
    var r = recById[id];
    if (!r) return;
    // Ikusgai ez badago, iragazkiak doitu erakusteko
    if (!passes(r)) {
      state.eremu[r.e] = true;
      var chip = document.querySelector('.kx-chip[data-eremu="' + r.e + '"]');
      if (chip) { chip.classList.add("is-on"); chip.setAttribute("aria-pressed", "true"); }
      if (state.pauOnly && r.p !== "H") { state.pauOnly = false; syncPauBtn(); }
      if (!matchesQuery(r)) { state.query = ""; qInput.value = ""; qClear.hidden = true; }
      render();
    }
    state.selected = id;
    highlightSelection(r);
    buildDrawer(r);
    openDrawer();
    if (recenter) centerOn(r, true);
    history.replaceState(null, "", "#id-" + id);
  }

  /* ---------------- Kontrolak ---------------- */
  function syncPauBtn() {
    var b = document.getElementById("kx-pau");
    b.setAttribute("aria-pressed", state.pauOnly ? "true" : "false");
  }

  function bindControls() {
    // Eremu chip-ak
    document.querySelectorAll(".kx-chip[data-eremu]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var k = chip.dataset.eremu;
        var on = !state.eremu[k];
        // Gutxienez bat aktibo mantendu
        if (!on && LANE_ORDER.filter(function (x) { return state.eremu[x]; }).length === 1) return;
        state.eremu[k] = on;
        chip.classList.toggle("is-on", on);
        chip.setAttribute("aria-pressed", on ? "true" : "false");
        render();
      });
    });

    // PAU toggle
    document.getElementById("kx-pau").addEventListener("click", function () {
      state.pauOnly = !state.pauOnly;
      syncPauBtn();
      render();
    });

    // Bilaketa
    var qt;
    qInput.addEventListener("input", function () {
      qClear.hidden = !qInput.value;
      clearTimeout(qt);
      qt = setTimeout(function () {
        state.query = normq(qInput.value.trim());
        render();
      }, 130);
    });
    qClear.addEventListener("click", function () {
      qInput.value = ""; qClear.hidden = true; state.query = ""; render(); qInput.focus();
    });

    // Zoom
    document.getElementById("kx-zoom-in").addEventListener("click", function () { zoom(1.35); });
    document.getElementById("kx-zoom-out").addEventListener("click", function () { zoom(1 / 1.35); });
    document.getElementById("kx-zoom-fit").addEventListener("click", fit);

    // Berrezarri
    document.getElementById("kx-reset").addEventListener("click", function () {
      state.eremu = { es: true, eh: true, mu: true };
      state.pauOnly = false; state.query = "";
      qInput.value = ""; qClear.hidden = true; syncPauBtn();
      document.querySelectorAll(".kx-chip[data-eremu]").forEach(function (c) {
        c.classList.add("is-on"); c.setAttribute("aria-pressed", "true");
      });
      state.pxy = 16; render(); elScroll.scrollLeft = 0;
    });

    // Pilulak (delegazioa)
    elLanes.addEventListener("click", function (e) {
      var btn = e.target.closest(".kx-ev");
      if (btn) select(+btn.dataset.id, false);
    });

    // Tooltipa
    bindTooltip();

    // Panela ixtea
    document.getElementById("kx-drawer-close").addEventListener("click", closeDrawer);
    elScrim.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && elDrawer.classList.contains("is-open")) closeDrawer();
    });

    // Teklatua: ← → gertaeren artean
    elScroll.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      stepSelection(e.key === "ArrowRight" ? 1 : -1);
    });

    bindPan();
  }

  function stepSelection(dir) {
    var list = RECS.filter(passes);
    if (!list.length) return;
    var idx = -1;
    if (state.selected != null) idx = list.findIndex(function (r) { return r.id === state.selected; });
    var next = idx === -1 ? (dir > 0 ? 0 : list.length - 1) : idx + dir;
    next = Math.max(0, Math.min(list.length - 1, next));
    select(list[next].id, true);
  }

  function zoom(factor, anchorX) {
    var prev = state.pxy;
    var npxy = Math.max(MIN_PXY, Math.min(MAX_PXY, prev * factor));
    if (npxy === prev) return;
    // Biewport-zentroko urtea finko mantendu
    var ax = (anchorX != null) ? anchorX : (elScroll.scrollLeft + elScroll.clientWidth / 2);
    var yearAt = AXIS_MIN + (ax - PAD_X) / prev;
    state.pxy = npxy;
    render();
    var newX = PAD_X + (yearAt - AXIS_MIN) * npxy;
    elScroll.scrollLeft = newX - elScroll.clientWidth / 2;
  }

  function fit() {
    var avail = elScroll.clientWidth - PAD_X * 2 - 4;
    state.pxy = Math.max(MIN_PXY, Math.min(MAX_PXY, avail / SPAN));
    render();
    elScroll.scrollLeft = 0;
  }

  /* ---------------- Tooltip ---------------- */
  var tip;
  function bindTooltip() {
    tip = document.createElement("div");
    tip.className = "kx-tip";
    document.body.appendChild(tip);
    elLanes.addEventListener("pointerover", function (e) {
      var btn = e.target.closest(".kx-ev");
      if (!btn) return;
      var r = recById[btn.dataset.id];
      if (!r) return;
      tip.innerHTML = '<span class="kx-tip-y">' + r.y + "</span>" + esc(r.t) +
        '<span class="kx-tip-e">' + esc(EREMU[r.e].name) + (r.p === "H" ? " · ★ klabe handia" : "") + "</span>";
      tip.classList.add("show");
      moveTip(e);
    });
    elLanes.addEventListener("pointermove", function (e) {
      if (tip.classList.contains("show")) moveTip(e);
    });
    elLanes.addEventListener("pointerout", function (e) {
      if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest(".kx-ev")) {
        tip.classList.remove("show");
      }
    });
  }
  function moveTip(e) {
    var pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
    var x = e.clientX + pad, y = e.clientY + pad;
    if (x + w > window.innerWidth - 8) x = e.clientX - w - pad;
    if (y + h > window.innerHeight - 8) y = e.clientY - h - pad;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  }

  /* ---------------- Drag-to-pan + wheel ---------------- */
  function bindPan() {
    var down = false, startX = 0, startScroll = 0, moved = false;
    elScroll.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".kx-ev")) return; // pilulen klika ez oztopatu
      if (e.button !== 0) return;
      down = true; moved = false; startX = e.clientX; startScroll = elScroll.scrollLeft;
      elScroll.classList.add("is-grabbing");
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      elScroll.scrollLeft = startScroll - dx;
    });
    window.addEventListener("pointerup", function () {
      down = false; elScroll.classList.remove("is-grabbing");
    });
    // Wheel bertikala → horizontala
    elScroll.addEventListener("wheel", function (e) {
      if (e.ctrlKey) { // zoom
        e.preventDefault();
        var rect = elScroll.getBoundingClientRect();
        zoom(e.deltaY < 0 ? 1.12 : 1 / 1.12, elScroll.scrollLeft + (e.clientX - rect.left));
        return;
      }
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        elScroll.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive: false });
  }

  /* ---------------- Garai bizkor-nabigazioa ---------------- */
  function renderEraNav() {
    ERAS.forEach(function (era) {
      var b = document.createElement("button");
      b.type = "button";
      b.style.setProperty("--ec", era.c);
      b.innerHTML = '<span class="kx-era-sw"></span>' + esc(era.l) +
        ' <span style="opacity:.6;font-weight:600">' + era.s + "</span>";
      b.addEventListener("click", function () {
        var x = xOf(Math.max(era.s, AXIS_MIN));
        elScroll.scrollTo({ left: Math.max(0, x - 60), behavior: reduceMotion ? "auto" : "smooth" });
        var band = elEras.children[ERAS.indexOf(era)];
        if (band) { band.style.transition = "background .2s"; band.classList.add("kx-flash"); setTimeout(function () { band.classList.remove("kx-flash"); }, 700); }
      });
      elEraNav.appendChild(b);
    });
  }

  /* ---------------- Prozesuak ---------------- */
  function renderProzesuak() {
    if (!CFG.prozesuak || !elProz) return;
    var palette = ERAS.map(function (e) { return e.c; });
    CFG.prozesuak.forEach(function (p, i) {
      var card = document.createElement("div");
      card.className = "kx-proz";
      card.style.setProperty("--pc", palette[i % palette.length]);
      card.innerHTML =
        '<div class="kx-proz-n">' + (i + 1) + ". prozesua</div>" +
        (p.tartea ? '<span class="kx-proz-tartea">' + esc(p.tartea) + "</span>" : "") +
        "<h3>" + esc(p.p) + "</h3>" +
        (p.hari ? "<p>" + esc(p.hari) + "</p>" : "");
      elProz.appendChild(card);
    });
  }

  /* ---------------- Hasieratu ---------------- */
  function init() {
    renderEraNav();
    renderProzesuak();
    bindControls();
    // Hasierako zooma: dentsitate erosoa (ez pantaila osora estutu)
    state.pxy = 16;
    render();
    elScroll.scrollLeft = 0;
    // Deep-link: #id-N (data zehatza) edo #y1936 (urtea; bat ez badator, hurbilena)
    var m = location.hash.match(/^#id-(\d+)$/);
    var my = location.hash.match(/^#y(\d{3,4})$/);
    if (m && recById[+m[1]]) {
      select(+m[1], true);
    } else if (my) {
      var yr = +my[1];
      var hit = RECS.find(function (r) { return r.y === yr; });
      if (!hit) {
        hit = RECS.slice().sort(function (a, b) { return Math.abs(a.y - yr) - Math.abs(b.y - yr); })[0];
      }
      if (hit) select(hit.id, true);
    }
    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(render, 160);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
