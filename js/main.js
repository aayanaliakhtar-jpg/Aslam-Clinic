(function () {
  var nav = document.querySelector(".primary-nav");
  var toggle = document.querySelector(".menu-toggle");
  var backToTop = document.querySelector(".back-to-top");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      }
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (!event.target.closest(".site-header")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      }
    });
  }

  if (backToTop) {
    var updateTopButton = function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 300);
    };
    window.addEventListener("scroll", updateTopButton, { passive: true });
    updateTopButton();
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
