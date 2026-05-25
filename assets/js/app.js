/* Historia 2. Batxilergoa — interakzioak */
(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* ---------- Reading progress bar ---------- */
  var bar = document.querySelector(".progress-bar");
  /* ---------- Back to top ---------- */
  var toTop = document.querySelector(".to-top");

  function onScroll() {
    var st = window.scrollY || document.documentElement.scrollTop;
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (st / h) * 100 : 0) + "%";
    }
    if (toTop) { toTop.classList.toggle("show", st > 500); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Timeline: center clicked item ---------- */
  var timeline = document.querySelector(".timeline");
  if (timeline) {
    timeline.querySelectorAll(".tl-item").forEach(function (item) {
      item.addEventListener("click", function (ev) {
        timeline.querySelectorAll(".tl-item").forEach(function (i) { i.classList.remove("active"); });
        item.classList.add("active");
        item.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
    });
  }

  /* ---------- Glossary tooltips: tap to toggle (touch) ---------- */
  var terms = document.querySelectorAll(".term[data-def]");
  terms.forEach(function (t) {
    if (!t.hasAttribute("tabindex")) t.setAttribute("tabindex", "0");
    t.addEventListener("click", function (e) {
      e.stopPropagation();
      var wasOpen = t.classList.contains("term-open");
      document.querySelectorAll(".term.term-open").forEach(function (o) { o.classList.remove("term-open"); });
      if (!wasOpen) t.classList.add("term-open");
    });
    t.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); t.click(); }
      if (e.key === "Escape") { t.classList.remove("term-open"); }
    });
  });
  document.addEventListener("click", function () {
    document.querySelectorAll(".term.term-open").forEach(function (o) { o.classList.remove("term-open"); });
  });

  /* ---------- TOC active section highlight ---------- */
  var tocLinks = document.querySelectorAll(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) {
      var id = a.getAttribute("href");
      if (id && id.charAt(0) === "#") map[id.slice(1)] = a;
    });
    var visible = new Set();
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target.id); else visible.delete(e.target.id);
      });
      // pick topmost visible section
      var current = null, top = Infinity;
      visible.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) { var r = el.getBoundingClientRect().top; if (r < top) { top = r; current = id; } }
      });
      tocLinks.forEach(function (a) { a.classList.remove("active"); });
      if (current && map[current]) map[current].classList.add("active");
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) so.observe(el);
    });
  }

  /* ---------- Footer year ---------- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
