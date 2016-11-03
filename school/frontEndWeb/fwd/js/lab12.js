$(document).ready(function() {
	var ww = $(window).width() 
	var wh = $(window).height() 
	
	$("#lab12").hover(
		function(){
			$("#start-push").css("display", "block");
			$("#flower").css("display", "block");
			$("#push-box").css("right", "-300px");
			
			$("#start-push").click(
				function(){
					$("#push-box").animate({right: ww+500}, 5000);
			});
			
			$("#flower").click(
				function(){
					
					$("#flower-img").css("display", "block");
					$("#flower-img").css("top", 200);
					$("#flower-img").css("right", ww/2-50);
					alert("Press arrow keys to move flower");
	
					$(document).keydown(function(e) {
					    if (e.keyCode == 37) {
				            e.preventDefault();
					        $('#flower-img').stop().animate({
					            left: '-=50'
					        }); //left arrow key
						}
						else if (e.keyCode == 38) {
				            e.preventDefault();
					        $('#flower-img').stop().animate({
					            top: '-=50'
					        }); //up arrow key
					    }
					    else if (e.keyCode == 39) {
					        e.preventDefault();
					        $('#flower-img').stop().animate({
					            left: '+=50'
					        }); //right arrow key
					    }
					    else if (e.keyCode == 40) {
					        e.preventDefault();
					        $('#flower-img').stop().animate({
					            top: '+=50'
					        }); //bottom arrow key
					    
					    }
					})
				});
		},
		function(){
			$("#start-push").css("display", "none");
			$("#flower").css("display", "none");

	});
});

