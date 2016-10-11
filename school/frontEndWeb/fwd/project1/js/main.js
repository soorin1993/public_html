var pahrump = document.getElementById("pahrump")
var kimberly = document.getElementById("kimberly")
var cooperstown = document.getElementById("cooperstown")
var darwin = document.getElementById("darwin")
var yellowknife = document.getElementById("yellowknife")
var gale = document.getElementById("gale")
var apikey = "vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR"

var roverimg = document.getElementById("rover-img")
var xhr = new XMLHttpRequest();


pahrump.onclick = function() {
	
	url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&page=1&api_key="
	
	jsonURL = url.concat(apikey);	
	httpGet(jsonURL);

}

function httpGet(url){
    xhr.open('GET', url, true);
    xhr.send();
    
    xhr.addEventListener("readystatechange", processRequest, false);

}

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        //console.log(response.photos);
		photoURL = response.photos[1].img_src;
		
		console.log(JSON.stringify(photoURL));
    
    }
    
}


