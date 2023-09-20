"use strict";

const activePanel = document.querySelectorAll(".panel");

activePanel.forEach((panel) => {
  panel.addEventListener("click", function () {

    removeActiveClasses();
    panel.classList.add("panel--active");
  })
});

function removeActiveClasses() {
  activePanel.forEach(panel => panel.classList.remove("panel--active"));
}