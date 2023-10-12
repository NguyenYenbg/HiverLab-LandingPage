var swiper = new Swiper('.js_swiper', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  slidesPerView: 1.23,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.35,
      spaceBetween: 32,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

//
// btnMenu = document.querySelector('.js_toggle');
// btnToggle = document.querySelector('.btn_toggle');
// gnbList = document.querySelector('.is_openMenu');
// gnbItems = gnbList.querySelectorAll('.gnb_item');
// overlay = document.querySelector('.js-overlay');

// btnMenu.addEventListener('click', function () {
//   if (btnToggle.classList.contains('btn_menu_open')) {
//     gnbList.style.transform = 'translateX(-230px)';
//     overlay.style.display = 'block';
//     btnToggle.classList.add('btn_menu_close');
//     btnToggle.classList.remove('btn_menu_open');
//   } else {
//     overlay.style.display = 'none';
//     gnbList.style.transform = 'translateX(0)';
//     btnToggle.classList.add('btn_menu_open');
//     btnToggle.classList.remove('btn_menu_close');
//   }
// });
// overlay.addEventListener('click', function () {
//   overlay.style.display = 'none';
//   gnbList.style.transform = 'translateX(0)';
//   btnToggle.classList.add('btn_menu_open');
//   btnToggle.classList.remove('btn_menu_close');
// });

// for (var i = 0; i < gnbItems.length; i++) {
//   gnbItems[i].addEventListener('click', function () {
//     var itemActive = gnbList.querySelector('.is_active');
//     itemActive.classList.remove('is_active');
//     this.classList.add('is_active');
//   });
// }

function menuToggle() {
  if ($('.js_toggle').children().hasClass('btn_menu_open')) {
    $('.is_openMenu').css('transform', 'translateX(-230px)');
    $('.js-overlay').css('display', 'block');
    $('.js_toggle').children().addClass('btn_menu_close');
    $('.js_toggle').children().removeClass('btn_menu_open');
  } else {
    $('.is_openMenu').css('transform', 'translateX(0)');
    $('.js-overlay').css('display', 'none');
    $('.js_toggle').children().addClass('btn_menu_open');
    $('.js_toggle').children().removeClass('btn_menu_close');
  }
}
$(document).ready(function () {
  $('.js_toggle').click(function () {
    menuToggle();
  });
  $('.js-overlay').click(function () {
    menuToggle();
  });
  $('.is_openMenu').each(function (i) {
    $(this).click(function () {
      $('.is_active').removeClass('.is_active');
      $(this).addClass('.is_active');
    });
  });
});
