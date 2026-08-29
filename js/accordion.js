(function () {
  var accordions = document.querySelectorAll("[data-accordion]");
  if (!accordions.length) return;

  accordions.forEach(function (accordion) {
    var triggers = accordion.querySelectorAll(".accordion-trigger");

    triggers.forEach(function (trigger, index) {
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      if (!panel) return;

      var isOpen = index === 0;
      trigger.setAttribute("aria-expanded", String(isOpen));
      panel.hidden = !isOpen;

      trigger.addEventListener("click", function () {
        var shouldOpen = trigger.getAttribute("aria-expanded") !== "true";

        triggers.forEach(function (other) {
          var otherPanel = document.getElementById(other.getAttribute("aria-controls"));
          other.setAttribute("aria-expanded", "false");
          if (otherPanel) otherPanel.hidden = true;
        });

        trigger.setAttribute("aria-expanded", String(shouldOpen));
        panel.hidden = !shouldOpen;
      });
    });
  });
})();
