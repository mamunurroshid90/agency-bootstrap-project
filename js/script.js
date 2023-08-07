$(".banner__slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
});

$(".main__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "0px",
  arrows: true,
  prevArrow: '<i class="fa-solid fa-angle-left left"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right right"></i>',
  responsive: [
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
