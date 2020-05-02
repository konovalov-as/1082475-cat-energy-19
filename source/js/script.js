var mapStatic = document.querySelector(".contacts__box-map--static");
var mapInteractive = document.querySelector(".contacts__box-map--interactive");
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-menu-toggle");

if (mapStatic) {
  mapStatic.classList.add("visually-hidden");
}

if (mapInteractive) {
  mapInteractive.classList.remove("visually-hidden");
}

if (navMain) {
  navMain.classList.remove("main-nav--nojs");
}

if (navToggle) {
  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });
}
