// SLICK JS для слайдера на сторінці Готель -- доданий С. Руденком
$('.triple-room__slider').slick({
  mobileFirst: true,
  centerMode: true,
  centerPadding: '16px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '16px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 414,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '16px',
        slidesToShow: 2,
      },
    },
  ],
});
