$(document).ready(function() {
    // Swiper: Slider
        new Swiper('.swiper-container', {
            loop: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 20,
            breakpoints: {
                1920: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1028: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                991: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    });
    

    // accordion**************
    $(".single-acco h2").click(function(){
        // self clicking close
        if($(this).next(".accodion-body").hasClass("active")){
          $(this).next(".accodion-body").removeClass("active").slideUp();
          // $(this).children("span").removeClass("fa-minus").addClass("fa-plus");
          $(this).children("span").html('+');   
        }
        else{
          $(".accodion-body").removeClass("active").slideUp();
          // $(".single-acco h2 span").removeClass("fa-minus").addClass("fa-plus");
          $(".single-acco h2 span").html('+');
      
          $(this).next(".accodion-body").addClass("active").slideDown();
          // $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
          $(this).children("span").html('-');
        }
      })