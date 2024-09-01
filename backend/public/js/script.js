(function($) {

  "use strict";

  let initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
  }

  let initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },

      }
    });

  }

  let sortProducts = function() {
   
      $('#search-bar').on('input', function() {
          var query = $(this).val().trim();
  
          if (query.length > 2) {
              $.ajax({
                  url: '/api/searchProducts', // Replace with your server-side URL or API endpoint
                  type: 'GET', // Use 'POST' if needed
                  data: { search: query }, // Send the search query as a parameter
                  success: function(response) {
                      console.log(response);
                      showReponse(response);
                  },
                  error: function(xhr, status, error) {
                      console.error('Error fetching data:', error);
                  }
              });
          } else {
              $('#results').empty(); // Clear results if query is too short
          }
      });
  
  }

  function showReponse(response){
    let products = response;

    $('#swiper-wrapper').empty();

    products.forEach(product => {
                  let template = document.getElementById('template-product-card');

                  // Modify the cloned template

                  template.querySelector('.product-image').setAttribute('src', '/images/'+ product._id+'.jpg');
                  template.querySelector('.product-name').innerHTML = product.name;
                  template.querySelector('.product-price').innerHTML = product.price;
                  
                  let newDiv = document.createElement('div');
                  console.log(template);
                  newDiv = template.innerHTML;

                  // Append the modified clone to the product list
                  $('#swiper-wrapper').append(newDiv);

    });
  }
  
  // document ready
  $(document).ready(function() {
    initPreloader();
    initSwiper();
    sortProducts();

  }); // End of a document

})(jQuery);