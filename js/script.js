var swiper = new Swiper('.js_swiper', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.35,
      spaceBetween: 32,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
