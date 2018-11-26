(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 54
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });



  $(document).ready( function() {

    // Toggles between close and show icon (Navbar) 
    $(function(){
      $('#navbarResponsive')
      .on('shown.bs.collapse', function() {
          $(this)
            .parent()
            .find(".fa-bars")
            .removeClass("fa-bars")
            .addClass("fa-times");

      })
      .on('hidden.bs.collapse', function() {
          $(this)
            .parent()
            .find(".fa-times")
            .removeClass("fa-times")
            .addClass("fa-bars");
      });
        
    });

    // Toggles navbar selected a tag color
    // $(function () {
    //   $('a').click(function (){
    //     $('a').removeClass('active');
    //     $(this).addClass('active');
    //   })
    // })

    //Show and hide navbar background on basis of the scroll
    $(window).scroll(function(){
      document.getElementById('nav-mobile').style.webkitTransition = 'opacity 1s';
      document.getElementById('nav-mobile').style.mozTransition = 'opacity 1s';
      
      var windowpos = $(window).scrollTop();

      // var visible = $("#navbarResponsive").is( ":visible" );
      // var hidden = $("#navbarResponsive").is( ":hidden" );

      // document.getElementById('nav-mobile').style.webkitTransition = 'width 2s';
      // document.getElementById('nav-mobile').style.mozTransition = 'width 2s';
      // document.getElementById('nav-mobile').style.transition = 'width 2s';
      // document.getElementById('nav-mobile').style.backgroundPosition = '0% 100%';
      // document.getElementById('nav-mobile').style.transitionTimingFunction = 'linear';
    
      if (windowpos > 50 || $("#navbarResponsive").hasClass("show")) {
        document.getElementById('nav-mobile').style.backgroundColor = '#1c223f';
      } else {
        document.getElementById('nav-mobile').style.backgroundColor = '';
      }
    });

    $(function() {
      var windowpos = $(window).scrollTop();
      $('#navbarResponsive')
      .on('shown.bs.collapse', function() {
        document.getElementById('nav-mobile').style.backgroundPosition = '100% 0%';
        document.getElementById('nav-mobile').style.backgroundColor = '#1c223f';
      }).on('hidden.bs.collapse', function() {
        if (windowpos > 50) {
          document.getElementById('nav-mobile').style.backgroundColor =
            '#1c223f';
        } else {
          document.getElementById('nav-mobile').style.backgroundColor =
            '';
        }
      });
      
    })

    // Active Navbar 'a' tag on Page Scroll
    $(function () {
      var lastId,
      topMenu = $('#top-menu'),
      topMenuHeight = topMenu.outerHeight()+200,
      // All item list
      menuItems = topMenu.find('a'),
      // Anchors reponding to menu items
      scrollItems = menuItems.map(function (){
        var item = $($(this).attr('href'))
        if (item.length) { return item }
      })

      $(window).scroll(function(){

        // Container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;
        // Get id of current scroll item
        var current = scrollItems.map(function() {
          if ($(this).offset().top < fromTop) {
            return this;
          }
        })
        // Get the id of the current element
        current = current[current.length -1];
        var id = current && current.length ? current[0].id : '';

        if (lastId !== id) {
          lastId = id;
          // Set/Remove active class
          menuItems.removeClass('active').filter("[href='#"+id+"']").addClass("active");
        }
      });
    })

  });


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  });
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  });
})(jQuery); // End of use strict
