$(".main-slider").slick({
  dots: true,
  autoplay: true,
  infinity: true,
  autoplaySpeed: 5000,
  speed: 1700
});

$(".men-slider, .women-slider").slick({
  dots: true,
  autoplay: true,
  infinity: true,
  autoplaySpeed: 7000,
  speed: 1600,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
