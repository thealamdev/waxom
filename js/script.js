$(function () {
  //  Sticky Header 
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
      $('.navbar').addClass('sticky_header');
    } else {
      $('.navbar').removeClass('sticky_header');
    }
  });

  
// service section js-----
  $('.banner_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });


//  slider js-----
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
  });

 
  

// logos slider js -------
  $('.logo_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,

    
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });

  // post slider:=======
  $('.post_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,

    
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]

  });
  // post slider end ======

  new VenoBox({
    selector: '.my-video-links',
  });

  // counterup 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  // counterup end


  // back to top start =====
  //==== Back-to-top button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200)
    } else {
      $('.back-to-top').fadeOut(200)
    }
  });
  //==== Animate the scroll to top
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1000);
  });
  // back to top end =======
  var containerEl = document.querySelector('.portfolio_filter');

  var mixer = mixitup(containerEl);
});