// SLICK JS для слайдера на сторінці Готель -- доданий С. Руденком
$('.slider.triple-room__slider').slick({
  mobileFirst: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 2,
  adaptiveHeight: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style="display: block;"><img src="./images/arrow-r.svg" class="prev"/></button>',
  // nextArrow: "<img src='https://svgshare.com/i/6Gf.svg' class='next' alt='2'>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        // centerMode: true,
        // centerPadding: '0px',
        // slidesToShow: 2,
      },
    },
    {
      breakpoint: 414,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
      },
    },
  ],
});
