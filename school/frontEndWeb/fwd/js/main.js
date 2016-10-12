//document.addEventListener("touchstart", function(){}, true);

var lab1_2 = document.getElementById("lab1_2");
var lab3_5 = document.getElementById("lab3_5");
var lab4 = document.getElementById("lab4");
var lab6 = document.getElementById("lab6");

var textColor;
var bgColor;
var os;
var line1;
var line2;

var lab7Done = false;

var popup = document.getElementById("popup");
var closeButton = document.getElementById("close");



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
	popup.style.display = "block";
	submit.addEventListener("click", animalPopup, false);	
}

closeButton.onclick = function() {
	popup.style.display = "";
	var content = document.getElementById("popup-content");
	content.style.display = "none";

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

