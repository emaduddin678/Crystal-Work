/*-----------------------------------------------------------------------------------
    Template Name: Jeena - IT solutions & Services HTML Template
    Template URI: https://webtend.net/demo/html/jeena/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    ## Header Style
    ## Dropdown menu
    ## Submenu
    ## Menu Hidden Sidebar
    ## Search Box
    ## Quantity Number
    ## Main Slider
    ## Main Slider Two
    ## Service Item Ative
    ## Video Popup
    ## Video Btn with text
    ## Service Image
    ## Project Image
    ## Project Grid
    ## Project Active
    ## Project Slider
    ## Project Three Slider
    ## Service Slider
    ## Services Five Active
    ## Service Three
    ## Related Product
    ## Testimonial Slider
    ## Testimonial Two
    ## Testimonial Three
    ## Fact Counter
    ## Skills Counter
    ## Team Circle Progress
    ## Scroll to Top
    ## Nice Select
    ## WOW Animation
    ## Preloader
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // ## Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // ## Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // ## Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-chevron-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
         
        // ## Menu Hidden Sidebar Content Toggle
        if($('.menu-sidebar').length){
            //Show Form
            $('.menu-sidebar').on('click', function(e) {
                e.preventDefault();
                $('body').toggleClass('side-content-visible');
            });
            //Hide Form
            $('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
                e.preventDefault();
                $('body').removeClass('side-content-visible');
            });
            //Dropdown Menu
            $('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
                $(this).next('ul').slideToggle(500);
            });
        }
         
        
        // ## Search Box
		$('.nav-search > button').on('click', function () {
			$('.nav-search form').toggleClass('hide');
		});
        
        
        // Hide Box Search WHEN CLICK OUTSIDE
		if ($(window).width() > 767){
			$('body').on('click', function (event) {
				if ($('.nav-search > button').has(event.target).length == 0 && !$('.nav-search > button').is(event.target)
					&& $('.nav-search form').has(event.target).length == 0 && !$('.nav-search form').is(event.target)) {
					if ($('.nav-search form').hasClass('hide') == false) {
						$('.nav-search form').toggleClass('hide');
					};
				}
			});
		}
        
  
        // ## Quantity Number js
        $('.quantity-down').on('click', function(){
            var numProduct = Number($(this).next().val());
            if(numProduct > 1) $(this).next().val(numProduct - 1);
        });
        $('.quantity-up').on('click', function(){
            var numProduct = Number($(this).prev().val());
            $(this).prev().val(numProduct + 1);
        });
        
        
        // ## Service Item Ative
        $(".for-active .service-item").hover(function(){
            $(".for-active .service-item").removeClass("active");
            $(this).addClass("active");
        });
        
        
        // Service Item Three Ative
        $(".service-item-three").hover(function(){
            $(".service-item-three").removeClass("active");
            $(this).addClass("active");
        });
        
        
        // ## Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        } 
        
        // ## Video Btn with text
        if ($('.video-play-text').length) {
            $('.video-play-text').magnificPopup({
                type: 'video',
            });
        } 
        
        
        // ## Service Image Popup Gallery
        $('.service-item-three .image .plus').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        // ## Project Image Popup Gallery
        $('.project-item-two .plus').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });

        
        // ## Project Grid Popup Gallery
        $('.project-grid-item .image .plus').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });

        
        // ## Project Three Slider
        if ($('.project-three-active').length) {
            $('.project-three-active').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 5000,
                arrows: true,
                centerMode: false,
                speed: 1000,
                variableWidth: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }
         
        
        // ## Project Active
       if ($('.project-active').length) {
            $('.project-active').imagesLoaded(function () {
                $(".project-active").isotope({
                    itemSelector: '.item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1
                    }
                });
            });
        };
        
        
        
        // ## Project Slider
        if ($('.project-slider-active').length) {
            $('.project-slider-active').slick({
                infinite: true,
                arrows: true,
                dots: false,
                fade: true,
                autoplay: true,
                prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }
          
        
        
        // ## Main Slider
        if ($('.main-slider-active').length) {
            $('.main-slider-active').slick({
                infinite: true,
                arrows: true,
                dots: false,
                fade: true,
                autoplay: true,
                prevArrow: '<button class="prev-arrow"><i class="fal fa-angle-left"></i></button>',
                nextArrow: '<button class="next-arrow"><i class="fal fa-angle-right"></i></button>',
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }
          
        
        // ## Main Slider Two
        if ($('.slider-two-active').length) {
            $('.slider-two-active').slick({
                infinite: true,
                arrows: true,
                dots: false,
                fade: true,
                autoplay: true,
                prevArrow: '.prev-slider',
                nextArrow: '.next-slider',
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }
          
        
        // ## Service Three Slider
        if ($('.service-three-slider').length) {
            $('.service-three-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                speed: 400,
                arrows: false,
                dots: true,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
          
        
        // ## Services Five Active
        if ($('.services-five-active').length) {
            $('.services-five-active').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                focusOnSelect: false,
                slidesToShow: 4,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }
        
        
        // ## Related Product Slider
        if ($('.related-product-slider').length) {
            $('.related-product-slider').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                focusOnSelect: false,
                slidesToShow: 4,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }

        
        // ## Testimonial Slider
        if ($('.testi-image-slider').length) {
            $('.testi-image-slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                speed: 400,
                arrows: false,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
                asNavFor: '.testi-content-slider',
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 3,
                        }
                    }
                ]
            });
        }
        
        if ($('.testi-content-slider').length) {
            $('.testi-content-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                speed: 400,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 5000,
                asNavFor: '.testi-image-slider',
            });
        }
        
        
        // ## Testimonial Two
        if ($('.testimonial-slider').length) {
            $('.testimonial-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                speed: 400,
                arrows: true,
                dots: true,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
                prevArrow: '.testi-prev',
                nextArrow: '.testi-next',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        
        // ## Testimonial Three
        if ($('.testimonial-three-slider').length) {
            $('.testimonial-three-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                speed: 400,
                arrows: false,
                dots: true,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
            });
        }
        
        
         /* ## Fact Counter + Text Count - Our Success */
        if ($('.counter-text-wrap').length) {
            $('.counter-text-wrap').appear(function () {
                
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }
        

        /* ## Skills Counter */
		if ($.fn.circleProgress) {
			var progress1 = $('.one.progress-content')
			if($.fn.circleProgress) {
			  progress1.appear(function () {
				progress1.circleProgress({
					value: 0.8,
					size: 140,
                    thickness: 8,
					fill: "white",
                    lineCap: 'square',
					emptyFill: "#7e68f5",
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('.h2').html(Math.round(89 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
        
		if ($.fn.circleProgress) {
			var progress2 = $('.two.progress-content')
			if($.fn.circleProgress) {
			  progress2.appear(function () {
				progress2.circleProgress({
					value: 0.7,
					size: 140,
                    thickness: 8,
					fill: "white",
                    lineCap: 'square',
					emptyFill: "#3d404c",
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('.h2').html(Math.round(73 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
        
		if ($.fn.circleProgress) {
			var progress3 = $('.three.progress-content')
			if($.fn.circleProgress) {
			  progress3.appear(function () {
				progress3.circleProgress({
					value: 0.9,
					size: 140,
                    thickness: 8,
					fill: "#674df3",
                    lineCap: 'square',
					emptyFill: "#e8e4fd",
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('.h2').html(Math.round(92 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
        
        
        /* ## Team Circle Progress */
		if ($.fn.circleProgress) {
			var progress44 = $('.circle-progress-counter')
			if($.fn.circleProgress) {
			  progress44.appear(function () {
				progress44.circleProgress({
					value: 0.8,
					size: 110,
                    thickness: 7,
					fill: "#674df3",
                    lineCap: 'square',
					emptyFill: "#e8e4fd",
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('.h2').html(Math.round(89 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
        
        
        // ## Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
        
        
        // ## Nice Select
        $('select').niceSelect();
        
        
        // ## WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        
 
    });
    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        // ## Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
    });

})(window.jQuery);
