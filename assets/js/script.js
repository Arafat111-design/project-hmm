// jQuery Functionality
    $(document).ready(function() {
      // Function to perform Google search
      function performSearch() {
        var query = $('#search-input').val().trim();
        if (query !== '') {
          var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
          window.open(googleSearchUrl, '_blank');
        }
      }

      // Click event on search icon
      $('#search-icon').on('click', function() {
        performSearch();
      });

      // Keypress event on input field
      $('#search-input').on('keypress', function(e) {
        if (e.which === 13) { // Enter key
          performSearch();
        }
      });
    

    //product-section-start

    $(".product-carousel").owlCarousel({
      items: 4,
      margin: 20,
      loop: true,
      nav: true,
      navText: ["<i class='fa-solid fa-left-long'></i>","<i class='fa-solid fa-right-long'></i>"],
      dots: false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
    });


//product-section-end


//tastsmonial-section-start



    $(".tastamonial-section__card-wraper ").owlCarousel({
      items: 4,
      margin: 20,
      loop: true,
      nav: true,
      navText: ["<i class='fa-solid fa-left-long'></i>","<i class='fa-solid fa-right-long'></i>"],
      dots: false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
    });


//testamonial-section-end\

  $('.nav__triger').click(function(){ 
      $(".slide-navbar").addClass('slide-toggle');
  });

  $('.nav-colse').click(function(){ 
       $('.slide-navbar').removeClass('slide-toggle');
  });




  
  });

 