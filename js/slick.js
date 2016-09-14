$(document).ready(function(){
	
	$('#slider1').slick({
		
		accessibility: true,
		autoplay: true,
		dots: true,
		arrows: true
		
	});

	$('#slider2').slick({
		centerMode: true,
		variableWidth: true,
		centerPadding: '200px',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		dots: true
		
	});
	
	$('#slider3').slick({
		
		centerMode: true,
		variableWidth: true,
		centerPadiing: '300px',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		dots: true,

		
	});

});

