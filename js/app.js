$(document).ready(function () {
	/* Page loading --------------------------------------------------------------------*/
	$(window).on('load', function () {
		$('.preloader').addClass('complete');
	});

	/* Sticky navbar --------------------------------------------------------------*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		// console.log(scroll);
		if (scroll >= 50) {
			$('.sticky').addClass('stickyadd');
		} else {
			$('.sticky').removeClass('stickyadd');
		}
	});

	// adding fadeInUp animation to child of div with class .way-col
	var $child = $('.way-fade-up').children();
	$child.each(function () {
		var self = $(this);
		$(this).waypoint(
			function () {
				self.addClass('animated fadeInUp');
			},
			{ offset: '90%' }
		);
	});

	var $child = $('.way-fade-left').children();
	$child.each(function () {
		var self = $(this);
		$(this).waypoint(
			function () {
				self.addClass('animated fadeInLeft');
			},
			{ offset: '90%' }
		);
	});

	var $child = $('.way-fade-right').children();
	$child.each(function () {
		var self = $(this);
		$(this).waypoint(
			function () {
				self.addClass('animated fadeInRight');
			},
			{ offset: '90%' }
		);
	});

	/* Carousel -----------------------------------------------------------*/
	$('.project-carousel').owlCarousel({
		loop: true,
		// margin:10,   // since one item ou can remove it
		nav: false,
		// dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 4000,
		items: 1, // one item at a time
		animateOut: 'slideOutLeft',
		animateIn: 'slideInRight',
	});

	$('.home-owl-carousel').owlCarousel({
		loop: true,
		nav: false,
		autoplay: true,
		autoplayTimeout: 4000,
		items: 1, // one item at a time
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	});

	/* Filterizr -------------------------------------------------------------*/
	var filterizd = $('.filter-container').filterizr({
		animationDuration: 0.5,
		layout: 'sameWidth',
	});

	// $('.img-loaded').imagesLoaded()
	//   .done( function( instance ) {
	//     var filterizd = $('.filter-container').filterizr({
	//        animationDuration: .5,
	//
	//     });
	//   });

	// $('a').smoothScroll({
	// 	speed: 2000,
	// });
});
