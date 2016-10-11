var pahrump = document.getElementById("pahrump")
var kimberly = document.getElementById("kimberly")
var cooperstown = document.getElementById("cooperstown")
var darwin = document.getElementById("darwin")
var yellowknife = document.getElementById("yellowknife")
var gale = document.getElementById("gale")
var apikey = "vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR"

var roverimg = document.getElementById("rover-img")
var xhr = new XMLHttpRequest();
var photoURL = ""


pahrump.onclick = function() {
		
	jsonURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=653&camera=fhaz&page=1&api_key=vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR";
	httpGet(jsonURL);
	console.log(photoURL);
	roverimg.url = photoURL;

}

function httpGet(url){
    xhr.open('GET', url, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);

}

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
		photoURL = response.photos[1].img_src;
		JSON.stringify(photoURL);
    }
    
}


