const slider = new Swiper(".swiper", {
  slidesPerGroup: 1,
  spaceBetween: 80,
  breakpoints: {
    // when window width is >= 768px
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    340: {
      slidesPerView: 1.2,
      spaceBetween: 40,
      centeredSlides: true,
    },
    365: {
      slidesPerView: 1.4,
      spaceBetween: 40,
      centeredSlides: true,
    },
    405: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    575: {
      slidesPerView: 2.4,
    },
    730: {
      slidesPerView: 3,
    },
    1110: {
      slidesPerView: 4,
    },
  },
});

// ./ SLIDER

const menuButton = document.querySelector(".menu__button");
const menuClose = document.querySelector(".menu-mobile__button-close");
const menuMobile = document.querySelector(".menu-mobile");

//

function menuMobileButtonOpen() {
  menuMobile.classList.add("menu-mobile__list-open");
}

function onDocumentClick(event) {
  if (!menuMobile.classList.contains("menu-mobile__list-open")) return;
  if (menuMobile.contains(event.target) || menuButton.contains(event.target)) {
    return;
  }
  menuMobileButtonClose();
}

function menuMobileButtonClose() {
  menuMobile.classList.remove("menu-mobile__list-open");
}

function onDocumentKeydown(e) {
  if (!menuMobile.classList.contains("menu-mobile__list-open")) return;
  if (e.code === "Escape") menuMobileButtonClose();
}

function onWindowResize() {
  if (!menuMobile.classList.contains("menu-mobile__list-open")) return;
  if (window.innerWidth >= 662) menuMobileButtonClose();
}

menuButton.addEventListener("click", menuMobileButtonOpen);
menuClose.addEventListener("click", menuMobileButtonClose);
document.addEventListener("keydown", (e) => onDocumentKeydown(e));
document.addEventListener("click", (event) => onDocumentClick(event));
window.addEventListener("resize", onWindowResize);
