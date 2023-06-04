if(document.querySelector('.partners')) {

    var $window = $(window);
    var $slick_slider = $('.partners__slider');
    var $settings = {
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
      ],
    };
    $slick_slider.slick($settings);
    
    $window.on('resize', function() {
      if ($window.width() < 601) {
        if ($slick_slider.hasClass('slick-initialized'))
          $slick_slider.slick('unslick');
        return
      }
      if ( ! $slick_slider.hasClass('slick-initialized'))
        return $slick_slider.slick($settings);
    });  
    
};