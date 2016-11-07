/* map */
var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});
var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
}

/* brewery db */
/*

var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.set('port', 3000);

app.use(function (req, res, next) {
  // Website sending requests
  res.setHeader('Access-Control-Allow-Origin', 'http://52.40.59.238');
  // Request method that you are allowing (we are using GET)
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  // Request header types that are allowed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // The following is set to false since we won't be addressing cookies and sessions
  res.setHeader('Access-Control-Allow-Credentials', false);
  // Proceed to the next layer of middleware
  next();
});	
*/

var URL = "http://api.brewerydb.com/v2/beers/?key=546e79849610632a56e3ea49a776f1ba&name=bud+light"

var req = new XMLHttpRequest();
req.open("get", URL, true);
req.addEventListener('load', function() {
  if(req.status >= 200 && req.status < 400) {
    var response = JSON.parse(req.responseText);
    var numberOfResults = response.totalResults;
    console.log(numberOfResults);
  } else {
    console.log("Error in network request: " + req.statusText);
  }
});
req.send(null);
