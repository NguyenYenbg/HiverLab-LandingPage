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
    dynamicBullets: true,
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

function menuToggle() {
  if ($('.js_toggle').children().hasClass('btn_menu_open')) {
    $('.gnb_list').css('transform', 'translateX(-230px)');
    $('.js-overlay').css('display', 'block');
    $('.js_toggle').children().addClass('btn_menu_close');
    $('.js_toggle').children().removeClass('btn_menu_open');
  } else {
    $('.gnb_list').css('transform', 'translateX(0)');
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
  $('.gnb_list').on('click', '.gnb_link', function () {
    $('.gnb_item').removeClass('is_active');
    $(this).parent().addClass('is_active');
    // return false;
  });

  $(window).on('scroll', function () {
    $('section').each(function (index, element) {
      let top = window.scrollY;
      let offset = element.offsetTop;
      let height = element.offsetHeight;
      if (top >= offset - 700) {
        element.classList.add('show_animate');
      } else {
        element.classList.remove('show_animate');
      }
      if ($('.js_toggle').children().hasClass('btn_menu_close')) {
        $('.gnb_list').css('transform', 'translateX(0)');
        $('.js-overlay').css('display', 'none');
        $('.js_toggle').children().addClass('btn_menu_open');
        $('.js_toggle').children().removeClass('btn_menu_close');
      }
      if (top >= offset - 82 && top < offset + height) {
        id = $(this).attr('id');
        $('.gnb_item').removeClass('is_active');
        $(`a[href='#${id}']`).parent().addClass('is_active');
      }
    });
  });
});
