// Shows the article in the reader's language: ?lang=ru|en, else the browser's language (Russian for ru/uk/be/kk).
(function () {
  var q = new URLSearchParams(location.search).get("lang");
  var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  var lang = q === "ru" || q === "en" ? q : ["ru", "uk", "be", "kk"].indexOf(nav) >= 0 ? "ru" : "en";
  document.documentElement.lang = lang;
  document.querySelectorAll("article[lang]").forEach(function (a) { a.hidden = a.lang !== lang; });
  document.querySelectorAll("nav.langs a").forEach(function (a) {
    if (a.getAttribute("hreflang") === lang) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
})();
