(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

    
  // owlCarousel
  $(".all-campains").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<img src="assets/img/arrow-left.png" alt=""/>',
      '<img src="assets/img/arrow-right.png" alt=""/>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        margin: 0,
        items: 1
      },
      767: {
        margin: 20,
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

 
  $(".all-events").owlCarousel({
    loop: true,
    margin: 50,
    items: 2,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        margin: 0,
        items: 1
      },
      767: {
        items: 2
      }
    }
  });

 
  
 
})(jQuery);
