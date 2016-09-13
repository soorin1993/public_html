$(document).ready(function(){
	
	$('.slider').slick({
		
		accessibility: true,
		autoplay: true,
		dots: true,
		arrows: true
		
	});

	$('.slider1').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		
	});
	
	$('.slider2').slick({
		
		centerMode: true,
		variableWidth: true,
		centerPadiing: '300px',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3
		
	});

});

