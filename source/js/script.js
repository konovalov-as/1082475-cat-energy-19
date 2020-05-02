var mapStatic = document.querySelector(".contacts__box-map--static");
var mapInteractive = document.querySelector(".contacts__box-map--interactive");
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-menu-toggle");
var orderProduct = document.querySelectorAll(".list-goods__to-order");
var orderAddProduct = document.querySelectorAll(".additional-card-product__to-order");
var modalOrderOpen = document.querySelector(".modal");
if (modalOrderOpen) {
  var modalOrderClose = modalOrderOpen.querySelector(".modal__close");
}

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

if (orderProduct) {
  for (var i = 0; i < orderProduct.length; i++) {
    orderProduct[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      if (modalOrderOpen) {
        modalOrderOpen.classList.add("modal--show");
      }
    })
  }
}

if (orderAddProduct) {
  for (var i = 0; i < orderAddProduct.length; i++) {
    orderAddProduct[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      if (modalOrderOpen) {
        modalOrderOpen.classList.add("modal--show");
      }
    })
  }
}

if (modalOrderClose) {
  modalOrderClose.addEventListener("click", function () {
    modalOrderOpen.classList.remove("modal--show");
  })
}
