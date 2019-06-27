(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        /*wow js init*/
        new WOW().init();
        //magnific popup activation 
        $('.video-play-btn,.video-popup').magnificPopup({
            type: 'video'
        });
        //back to top 
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        var $datepicker = $('.datepicker');
        $datepicker.datepicker();
        
        /* counter section activation  */
        var counternumber = $('.count-number,.forum-count');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });
        //testimonial carousel
        var $tesitmonialCarousel = $('#testimonial-carousel');
        $tesitmonialCarousel.owlCarousel({
                loop: true,
                autoplay: true,
                autoPlayTimeout: 1000,
                margin:30,
                dots:true,
                nav:false,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });


            //Golden carousel
        var $tesitmonialCarousel = $('#golden-carousel');
        $tesitmonialCarousel.owlCarousel({
                loop: true,
                autoplay: true,
                autoPlayTimeout: 1000,
                margin:30,
                dots:true,
                nav:true,
                  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    },
                    1920: {
                        items: 4
                    }
                }
            });
    });
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       /*--sticky menu activation--*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){
        //preloader
        var preLoder = $("#preloader");
        preLoder.addClass('hide');
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });


  $(".social_icons_click a").on('click', function (event) {
       event.preventDefault();
       var a = $(this).data('name');
       $(".social_input input").css("display", "none");
      $(".social_input input").css("opacity", "0");
       $( " input[name="+a+"]").css( "display", "block" );
        $( " input[name="+a+"]").css( "opacity", "1" );
       
    });

    $(".social_input input").change(function() {

        $(".social_input input").each(function(i, obj) {

            if( $(obj).val() ) {

               $(".social_icons_click a[data-name='" +$(this).attr("name") +"' ]") .addClass('active');

            }else{

                  $(".social_icons_click a[data-name='" +$(this).attr("name") +"' ]") .removeClass('active');

            }

        });


    });

}(jQuery));	


  var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      autoplay: true,
      loop:true,
       speed: 200,
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
