var imageList = ["cycling1.jpg", "cycling2.jpg", "cycling3.jpg", "cycling4.jpg", "cycling5.jpg", "cycling6.jpg", "cycling7.jpg"];
var imageItem = imageList[Math.floor(Math.random()*imageList.length)];
var image = document.getElementById("image");
image.src="img/"+imageItem

image.addEventListener("click", randomImage);

function randomImage() {
	
	var imageItem = imageList[Math.floor(Math.random()*imageList.length)];
	image.src="img/"+imageItem
	
}


