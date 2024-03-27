(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
   // NiceSelect
   $("select").niceSelect();
   
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

 
  // custom tab
  tabFunc(
    document.querySelectorAll(".plan-tab-link"),
    document.querySelectorAll(".plan-tab-content")
  );
  function tabFunc(tabLinks, tabs) {
    tabLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
      for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
        tabs[i].classList.remove("active");
      }
      link.classList.add("active");
      tabs[index].classList.add("active");
      });
    });
  }
 
})(jQuery);
