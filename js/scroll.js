$(function() {
    // Init Controller

var controller = new ScrollMagic.Controller();

	var tween = TweenMax.to('#animation', 0.5, {
    	backgroundColor: 'rgb(255, 39, 46)',
		scale: 7,
		rotation: 360
}	);

	var scene = new ScrollScene({
    	triggerElement: '#scene',
		offset: 150 /* offset the trigger 150px below #scene's top */
	})
	.setTween(tween)
	.addTo(scrollMagicController);
					
});
