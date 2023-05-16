// SLICK JS для слайдера на сторінці Готель -- доданий С. Руденком

$('.triple-room__slider').slick({
  arrows: true,
  slidesToShow: 2,
  prevArrow: $('.triple-prev'),
  nextArrow: $('.triple-next'),
});

$('.lux-room__slider').slick({
  arrows: true,
  slidesToShow: 2,
  prevArrow: $('.lux-prev'),
  nextArrow: $('.lux-next'),
});

$('.double-room__slider').slick({
  arrows: true,
  slidesToShow: 2,
  prevArrow: $('.double-prev'),
  nextArrow: $('.double-next'),
});

$('.about-kitchen__slider').slick({
  arrows: true,
  slidesToShow: 2,
  prevArrow: $('.kitchen-prev'),
  nextArrow: $('.kitchen-next'),
});
// $('.slider-about').slick({
//   mobileFirst: true,
//   // centerMode: true,
//   // centerPadding: '5px',
//   slidesToShow: 2,
//   // adaptiveHeight: true,
//   // infinite: false,
//   variableWidth: true,
// });
