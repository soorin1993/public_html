var pahrump = document.getElementById("pahrump")
var kimberly = document.getElementById("kimberly")
var cooperstown = document.getElementById("cooperstown")
var darwin = document.getElementById("darwin")
var yellowknife = document.getElementById("yellowknife")
var gale = document.getElementById("gale")
var apikey = "vkcnKWOCFI2hf9pEmTYO008v1GjoMFgifWYwqYuR"

var roverimg = document.getElementById("rover-img")

pahrump.onclick = function() {
	
	url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&page=1&api_key="
	
	jsonURL = url.concat(apikey);
	
	httpGet(jsonURL);
	var json = JSON.parse(Get(jsonURL));
	console.log(json);
	
}

function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}



