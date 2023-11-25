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
