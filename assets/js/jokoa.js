/* =========================================================
   Datak ordenatzeko jokoa — Historia BTX2
   Aukeratu N data, ordenatu zaharrenetik berrienera, zuzendu.
   Izena bakarrik agertzen da; urtea zuzendu arte ezkutatuta.
   ========================================================= */
(function () {
  "use strict";

  var dataEl = document.getElementById("jk-data");
  if (!dataEl) return;
  var CFG = JSON.parse(dataEl.textContent);
  var POOL = CFG.pool;            // [{id,t,y,e}]
  var EREMU = CFG.eremu;          // {es:{name,main,...}}

  var state = { n: 5, set: [], checked: false };

  var elList = document.getElementById("jk-list");
  var elBoard = document.getElementById("jk-board");
  var elActions = document.getElementById("jk-actions");
  var elResult = document.getElementById("jk-result");
  var elSolution = document.getElementById("jk-solution");
  var elSolList = document.getElementById("jk-sol-list");
  var btnCheck = document.getElementById("jk-check");
  var btnShuffle = document.getElementById("jk-shuffle");
  var btnAgain = document.getElementById("jk-again");
  var btnNew = document.getElementById("jk-new");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sample(arr, k) {
    return shuffle(arr).slice(0, k);
  }
  function isSorted(items) {
    for (var i = 1; i < items.length; i++) if (items[i].y < items[i - 1].y) return false;
    return true;
  }

  /* ---------- Joko berria ---------- */
  function newGame() {
    state.set = sample(POOL, state.n);
    startRound(true);
  }
  function startRound(newSet) {
    state.checked = false;
    // Bistaratze-ordena nahasi (ez hasieratik ordenatuta egon dadin)
    var order = shuffle(state.set);
    var guard = 0;
    while (state.set.length > 1 && isSorted(order) && guard++ < 8) order = shuffle(state.set);
    renderList(order);
    elBoard.hidden = false;
    elActions.hidden = false;
    elList.classList.remove("jk-checked");
    btnCheck.hidden = false; btnCheck.disabled = false;
    btnShuffle.hidden = false;
    btnAgain.hidden = true;
    elResult.hidden = true; elResult.className = "jk-result"; elResult.hidden = true;
    elSolution.hidden = true;
  }

  function renderList(order) {
    elList.innerHTML = "";
    order.forEach(function (r) {
      var meta = EREMU[r.e] || { main: "#888", name: "" };
      var li = document.createElement("li");
      li.className = "jk-item";
      li.draggable = true;
      li.__rec = r;
      li.innerHTML =
        '<span class="jk-handle" aria-hidden="true">⠿</span>' +
        '<span class="jk-num" aria-hidden="true"></span>' +
        '<span class="jk-eremu-dot" style="--ec:' + meta.main + '" title="' + esc(meta.name) + '"></span>' +
        '<span class="jk-name">' + esc(r.t) + "</span>" +
        '<span class="jk-mark" aria-hidden="true"></span>' +
        '<span class="jk-year" aria-hidden="true"></span>' +
        '<span class="jk-moves">' +
          '<button type="button" class="jk-up" aria-label="Gora eraman">▲</button>' +
          '<button type="button" class="jk-down" aria-label="Behera eraman">▼</button>' +
        "</span>";
      elList.appendChild(li);
    });
    updateMoveButtons();
  }

  function updateMoveButtons() {
    var items = elList.querySelectorAll(".jk-item");
    items.forEach(function (li, i) {
      var up = li.querySelector(".jk-up"), dn = li.querySelector(".jk-down");
      if (up) up.disabled = (i === 0);
      if (dn) dn.disabled = (i === items.length - 1);
    });
  }

  /* ---------- Berrordenatzea: ↑↓ botoiak ---------- */
  elList.addEventListener("click", function (e) {
    if (state.checked) return;
    var btn = e.target.closest(".jk-up, .jk-down");
    if (!btn) return;
    var li = btn.closest(".jk-item");
    if (btn.classList.contains("jk-up") && li.previousElementSibling) {
      elList.insertBefore(li, li.previousElementSibling);
    } else if (btn.classList.contains("jk-down") && li.nextElementSibling) {
      elList.insertBefore(li.nextElementSibling, li);
    }
    updateMoveButtons();
  });

  /* ---------- Berrordenatzea: drag & drop ---------- */
  var dragged = null;
  elList.addEventListener("dragstart", function (e) {
    if (state.checked) { e.preventDefault(); return; }
    var li = e.target.closest(".jk-item");
    if (!li) return;
    dragged = li;
    li.classList.add("is-dragging");
    try { e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", ""); } catch (x) {}
  });
  elList.addEventListener("dragend", function () {
    if (dragged) dragged.classList.remove("is-dragging");
    dragged = null;
    updateMoveButtons();
  });
  elList.addEventListener("dragover", function (e) {
    if (!dragged) return;
    e.preventDefault();
    var after = getDragAfter(elList, e.clientY);
    if (after == null) elList.appendChild(dragged);
    else if (after !== dragged) elList.insertBefore(dragged, after);
  });
  function getDragAfter(container, y) {
    var els = Array.prototype.slice.call(container.querySelectorAll(".jk-item:not(.is-dragging)"));
    var closest = null, closestOffset = -Infinity;
    els.forEach(function (el) {
      var box = el.getBoundingClientRect();
      var offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closestOffset) { closestOffset = offset; closest = el; }
    });
    return closest;
  }

  /* ---------- Zuzendu ---------- */
  function check() {
    var items = Array.prototype.slice.call(elList.querySelectorAll(".jk-item"));
    var years = items.map(function (li) { return li.__rec.y; });
    var sorted = years.slice().sort(function (a, b) { return a - b; });
    var score = 0;
    items.forEach(function (li, i) {
      var ok = (years[i] === sorted[i]);
      li.classList.add(ok ? "correct" : "wrong");
      li.querySelector(".jk-year").textContent = li.__rec.y;
      li.querySelector(".jk-mark").textContent = ok ? "✓" : "✗";
      li.draggable = false;
      if (ok) score++;
    });
    elList.classList.add("jk-checked");
    state.checked = true;

    var n = items.length;
    var pct = score / n;
    elResult.hidden = false;
    elResult.className = "jk-result " + (score === n ? "perfect" : pct >= 0.6 ? "good" : "low");
    var msg = score === n ? "Bikain! Ordena guztiz zuzena 🎉"
      : pct >= 0.6 ? "Ondo! Ia-ia hor zaude 💪"
      : "Saiatu berriro, errepasatu datak 📚";
    elResult.innerHTML = '<div class="jk-score">Zuzen: ' + score + " / " + n + "</div><div class=\"jk-msg\">" + msg + "</div>";

    // Ordena zuzena erakutsi
    elSolList.innerHTML = "";
    state.set.slice().sort(function (a, b) { return a.y - b.y; }).forEach(function (r) {
      var meta = EREMU[r.e] || { main: "#888" };
      var li = document.createElement("li");
      li.innerHTML = '<span class="jk-sol-year">' + r.y + "</span>" +
        '<span class="jk-sol-dot" style="background:' + meta.main + '"></span>' +
        '<span class="jk-sol-name">' + esc(r.t) + "</span>";
      elSolList.appendChild(li);
    });
    elSolution.hidden = false;

    btnCheck.hidden = true;
    btnAgain.hidden = false;
    elResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ---------- Kontrolak ---------- */
  document.querySelectorAll(".jk-count").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll(".jk-count").forEach(function (c) {
        c.classList.remove("is-on"); c.setAttribute("aria-pressed", "false");
      });
      chip.classList.add("is-on"); chip.setAttribute("aria-pressed", "true");
      state.n = +chip.dataset.n;
      if (state.set.length) newGame(); // jada jokoan bagaude, berria sortu kopuru berriarekin
    });
  });
  btnNew.addEventListener("click", newGame);
  btnCheck.addEventListener("click", check);
  btnShuffle.addEventListener("click", function () { startRound(false); });
  btnAgain.addEventListener("click", newGame);

})();
