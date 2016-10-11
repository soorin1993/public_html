var pahrump = document.getElementById("pahrump");
var kimberley = document.getElementById("kimberley");
var cooperstown = document.getElementById("cooperstown");
var darwin = document.getElementById("darwin");
var yellowknife = document.getElementById("yellowknife");
var bradbury = document.getElementById("bradbury");

var roverimg = document.getElementById("rover-img");
var siteInfo = document.getElementById("info-text");
var placeText = document.getElementById("info-text-place");

var xhr = new XMLHttpRequest();
var photoURL = ""
var info = ""

pahrump.onclick = function() {
	
	jsonURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=653&camera=fhaz&page=1&api_key=vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR";
	info = "NASA's Curiosity Mars rover can be seen at the “Pahrump Hills” area of Gale Crater in this view from the front camera attahced to Curiosity.  Pahrump Hills is an outcrop at the base of Mount Sharp. The region contains sedimentary rocks that scientists believe formed in the presence of water.";
	placeText.style.display = "none";
	getRequest(jsonURL);
	
}

kimberley.onclick = function() {
	
	jsonURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=590&camera=fhaz&page=1&api_key=vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR";	
	info = "NASA’s car sized Curiosity rover pulled into a tantalizing destination on the Red Planet named “The Kimberley Waypoint” that researchers hoped that it yields a bounty for science at a spot where scientists plan to direct the car sized robot to bore into the subsurface in search of further clues about ancient Martian environments that may have been favorable for life. “The Kimberley” waypoint lies just over half ways towards Mount Sharp, which reaches 3.4 miles (5.5 km) into the Martian sky inside Gale Crater.";
	placeText.style.display = "none";
	getRequest(jsonURL);

	
}

cooperstown.onclick = function() {
	
	jsonURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=440&camera=fhaz&page=1&api_key=vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR";	
	info = "Curiosity arrived at “Cooperstown”, an outcrop bearing candidate targets for examination with instruments on the rover's arm. Cooperstown is named after Cooperstown Member, a fine-grained sedimentary rock in proximity to the Coeymans Limestone. Some other rock formations in the quad are named Marcellus, Manor Kill, Union Springs and Oneonta.";
	placeText.style.display = "none";
	getRequest(jsonURL);

	
}

darwin.onclick = function() {
	
	jsonURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=392&camera=fhaz&page=1&api_key=vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR";	
	info = "Darwin is a crater on Mars located at 57°S 19°E to the southeast of Argyre Planitia in Noachis Terra. It is approximately 176 km in diameter. The crater's name was formally approved by the IAU in 1973. To the northeast of Darwin are the craters Green and Roddenberry. To the northwest is the larger crater Galle, and to the southwest is the crater Maraldi.";
	placeText.style.display = "none";
	getRequest(jsonURL);

}

yellowknife.onclick = function() {

	jsonURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=121&camera=fhaz&page=1&api_key=vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR";	
	info = "Yellowknife Bay is a geologic formation in Gale Crater on the planet Mars. The site was chosen after much study of the region by previous missions. The Mars Reconnaissance Orbiter observed morphological features created by the presence of liquid water, suggesting the presence of an ancient lake which could have sustained microbial life.";
	placeText.style.display = "none";
	getRequest(jsonURL);

}

bradbury.onclick = function() {
	
	jsonURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&camera=fhaz&page=1&api_key=vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR";	
	info = "Bradbury Landing is a landing location on the planet Mars inside Gale crater. The location was named by NASA for Ray Bradbury on August 22, 2012, his 92nd birthday, in honor of the author who died a few months earlier, on June 5.";
	placeText.style.display = "none";
	getRequest(jsonURL);
	
}

function getRequest(url){
    xhr.open('GET', url, true);
    xhr.send();
    xhr.addEventListener("readystatechange", changeData, false);

}

function changeData(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
		photoURL = response.photos[0].img_src;
		roverimg.src = photoURL;
		siteInfo.innerHTML = info;

		
    }
    
}


