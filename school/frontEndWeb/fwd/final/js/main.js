$(document).ready(function(){
	getWeather();
});

function getWeather(){
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=denver,us&APPID=6c4fcbdb6032c4eaad1879a609cbeb0f&units=imperial", denver);
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=boulder,us&APPID=6c4fcbdb6032c4eaad1879a609cbeb0f&units=imperial", boulder);
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=aspen,us&APPID=6c4fcbdb6032c4eaad1879a609cbeb0f&units=imperial", aspen);

}

function denver(result) {
	var main = result.main;
	var weather = main.temp;
	$('#denver').text(weather);
}

function boulder(result) {
	var main = result.main;
	var weather = main.temp;
	$('#boulder').text(weather);

}


function aspen(result) {
	var main = result.main;
	var weather = main.temp;
	$('#aspen').text(weather);

}

