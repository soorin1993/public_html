//document.addEventListener("touchstart", function(){}, true);

var lab1_2 = document.getElementById("lab1_2");
var lab3_5 = document.getElementById("lab3_5");
var lab4 = document.getElementById("lab4");
var lab7 = document.getElementById("lab7");
var lab9 = document.getElementById("lab9");
var lab10 = document.getElementById("lab10");
var lab11 = document.getElementById("lab11");

var textColor;
var bgColor;
var os;
var line1;
var line2;

var lab7Done = false;

var closeButton = document.getElementById("close");
var formPopup = document.getElementById("form-popup");

var mapContainer = document.getElementById("map-container");
var mapPopup = document.getElementById("map-popup");
var mapCloseButton = document.getElementById("map-close");

var canvasContainer = document.getElementById("canvas-container");
var canvasPopup = document.getElementById("canvas-popup");
var canvasCloseButton = document.getElementById("canvas-close");

lab1_2.onclick = function() {

	textColor = prompt("What text color? Choose from major color names.");
	bgColor = prompt("What background color? Choose from major color names.");
	temp = alert("Click on the 'O's to change the color.")

	os = document.getElementsByClassName("red-o");
	line1 = document.getElementById("title-line1");
	line2 = document.getElementById("title-line2");
	
	initColor();
	
}

function initColor() {
	
	document.body.style.color = "";
	document.body.style.background = "";
	
	for (i = 0; i < os.length; i++) {
		os[i].style.color = "";
		os[i].onclick = changeColor;
	}
	line1.style.backgroundColor = "";
	line2.style.backgroundColor = "";
}

function changeColor() {
	
	document.body.style.color = textColor;
	document.body.style.backgroundColor = bgColor;
	
	for (i = 0; i < os.length; i++) {
		os[i].style.color = "white";
		os[i].onclick = initColor;	
	}
	
	line1.style.backgroundColor = textColor;
	line2.style.backgroundColor = textColor;
			
}

lab3_5.onclick = function() {
	
	var image = document.getElementsByClassName("placeImg");
	var h2s = document.getElementsByTagName("h2");
	var picture = prompt("Are you a cat person or a dog person?");
	
		
	for (i = 0; i < image.length; i++) {
		if (picture == "cat") {
			
			h2s[i].style.color = "black";
			image[i].src = "img/cat.jpg";
		}
		else if (picture == "Cat") {
			
			h2s[i].style.color = "black";
			image[i].src = "img/cat.jpg";
			
		}
		
		else {
			
			h2s[i].style.color = "black";
			image[i].src = "img/dog.jpg"
		}
		
		alert(lab7Done)
		if (lab7Done == true) {
		
		image[4].src = "img/konami.jpg"
		
		}
	}
}

lab4.onclick = function() {
	
	var question = prompt("Should we build a wall?");
	var answer = "No";
	var counter = 0;
	
	while ((question != answer) && (counter < 4)) {
		
		question = prompt("Wrong. Should we build a wall?");
		counter++;
		
	}
	
	var h3 = document.getElementById("wall");
	h3.style.display = "block";

	
}

lab7.onmouseover = function() {
	
	alert("Waiting for secret code... (hint: Konami)");
	cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
		alert('Konami!');
		lab7Done = true
		
		var someimage = document.getElementById('lab7');
		var myimg = someimage.getElementsByTagName('img')[0];
		myimg.src = "img/konami.jpg"
	});
	
}

lab9.onclick = function() {

	var submit = document.getElementById("submit");
	formPopup.style.display = "block";
	submit.addEventListener("click", animalPopup, false);	
}

closeButton.onclick = function() {
	var formContainer = document.getElementById("form-container");
	formContainer.style.display = "none";

}

function animalPopup() {
	
	var summary = document.getElementById("summary").value = ""
	
	animal = document.getElementById("animal").value;
	if (animal != "") {
		document.getElementById("summary").value += animal + " is your favorite animal\n";
	}
	
	if(document.getElementById("hat").checked == true){
		document.getElementById("summary").value += animal + " has a " + document.getElementById("hat").value + "\n";
	}
	if(document.getElementById("glasses").checked == true){
		document.getElementById("summary").value += animal + " has " + document.getElementById("glasses").value + "\n";
	}
	else if(document.getElementById("necklace").checked == true){
		document.getElementById("summary").value += animal + " has a " + document.getElementById("necklace").value + "\n";
	}
	
	if(document.getElementById("update-yes").checked==true){
		document.getElementById("summary").value += animal + " picture has not been updated\n";
	}
	else {
		if (document.getElementById("update-no").checked==true){
			document.getElementById("summary").value += animal + " picture has not been updated.\n";
		}
	}
	
	if (document.getElementById("lab-list").value != "None" && document.getElementById("lab-list").value != "All"){
		document.getElementById("summary").value += "Change pictures for the following labs: " + document.getElementById("lab-list").value;
	}
	else if (document.getElementById("lab-list").value == "All") {
		
		
	}
	
}

lab10.onclick = function() {
	
	mapContainer.style.display = "block";
	mapPopup.style.display = "block";
	mapCloseButton.addEventListener("click", mapClose, false);	
	initMap();
}

function initMap() {
	var map = new google.maps.Map(document.getElementById('map-popup'), {
	  center: {lat: -34.397, lng: 150.644},
	  zoom: 10
	});
	//var infoWindow = new google.maps.InfoWindow({map: map});
	
	// Try HTML5 geolocation.
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
	    var pos = {
	      lat: position.coords.latitude,
	      lng: position.coords.longitude
	    };
	
	    //infoWindow.setPosition(pos);
	    //infoWindow.setContent('Location found.');
	    map.setCenter(pos);
	  }, function() {
	    handleLocationError(true, infoWindow, map.getCenter());
	  });
	} else {
	  // Browser doesn't support Geolocation
	  handleLocationError(false, infoWindow, map.getCenter());
	}
}
	
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	alert("Map couldn't be loaded");
}

function mapClose() {
	mapPopup.style.display = "none";
	mapContainer.style.display = "none";

}

lab11.onclick = function() {
	
	canvasContainer.style.display = "block";
	canvasPopup.style.display = "block";
	canvasCloseButton.addEventListener("click", canvasClose, false);	
	mickeyMouse()
}

function canvasClose() {
	canvasPopup.style.display = "none";
	canvasContainer.style.display = "none";

}


function mickeyMouse() {
	
	var thecanvas;
	var context;
	thecanvas = document.getElementById("canvas-popup");
    context = thecanvas.getContext("2d");
    
    //face
    context.beginPath();
	context.arc(225,275,120,0,2*Math.PI);
	context.closePath();
	context.fillStyle="black";
    context.fill();

	//ear1
	context.beginPath();
	context.arc(125,125,75,0,2*Math.PI);
	context.closePath();
	context.fillStyle="black";
    context.fill();
	
	//ear2
	context.beginPath();
	context.arc(325,125,75,0,2*Math.PI);
    context.closePath();
    context.fillStyle="black";
    context.fill();
    
    //bottom half
    context.beginPath();
	context.arc(225,275,120,0,Math.PI);
	context.closePath();
	context.fillStyle="black";
    context.fill();
    
	//cheeks
    context.beginPath();
    context.ellipse(300, 325, 30, 70, 45*Math.PI/180, 0, 2 * Math.PI);
    context.ellipse(150, 325, 30, 70, 315*Math.PI/180, 0, 2 * Math.PI);
	context.closePath();
	context.strokeStyle="black";
	context.lineWidth=10;
	context.stroke();
    context.fillStyle="white";
    context.fill();
    
    //eyes white
    context.beginPath();
    context.ellipse(190, 275, 60, 100, Math.PI/180, 0, 2 * Math.PI);
    context.ellipse(260, 275, 60, 100, Math.PI/180, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle="white";
    context.fill();
    
    //eye1
    context.beginPath();
    context.ellipse(200, 250, 15, 35, Math.PI/180, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle="black";
    context.fill();
    
    //eye2
    context.beginPath();
    context.ellipse(250, 250, 15, 35, Math.PI/180, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle="black";
    context.fill();
    
    // mouth
    context.beginPath();
	context.arc(225,340,60,0,2*Math.PI);
    context.strokeStyle="black";
    context.closePath();
	context.lineWidth=10;
	context.stroke();
    context.fillStyle="white";
    context.fill();
    
    // mouth
    context.beginPath();
    context.ellipse(225, 338, 67, 59, Math.PI/180, 0, 2*Math.PI);
    context.closePath();
    context.fillStyle="white";
    context.fill();
    
    //nose
    context.beginPath();
    context.ellipse(225, 300, 33, 17, Math.PI/180, 0, 2*Math.PI);
    context.closePath();
    context.fillStyle="black";
    context.fill();
    
    //mouth line
    context.beginPath();
	context.arc(325, 300, 20, 1.7*Math.PI, 1.9*Math.PI);
    context.strokeStyle="black";
	context.lineWidth = 3;
	context.stroke();    
	
	context.beginPath();
	context.arc(125, 300, 20, 1.1*Math.PI, 1.3*Math.PI);
    context.strokeStyle="black";
	context.lineWidth = 3;
	context.stroke(); 
	
	context.beginPath();
	context.arc(225, 230, 130, .85*Math.PI, 2.15*Math.PI, true);
    context.strokeStyle="black";
	context.lineWidth = 3;
	context.stroke();
	
	context.beginPath();
	context.arc(225, 340, 50, .92*Math.PI, 2.08*Math.PI, true);
	context.closePath();
	context.fillStyle="black";
    context.fill();

	context.beginPath();
	context.arc(225, 228, 130, 0.7*Math.PI, 2.2*Math.PI, true);
	context.closePath();
	context.fillStyle="white";
    context.fill();
    
}
