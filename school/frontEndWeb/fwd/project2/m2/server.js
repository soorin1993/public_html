var express = require('express');
var request = require('request');
var app = express();
/*
var bodyParser = require('body-parser');
var path = require('path');
*/


// app.use(bodyParser.json());
app.set('port', 3000);
/*
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../../index.html'));
});
app.use(express.static(__dirname + '../../public'));
*/

function processData(req) {
   var context = {};
   context.method = req.method; //method type saved
   context.qParams = ["bud"]; //query parameters

   for(var p in req.query) {
     context.qParams.push({	'name': p, 
       'value': req.query[p]
      });
    }

   return context;
}
	
app.get('/api', function(req, res, next){ 
  var userInput = processData(req);
  	
  	//request("https://api.brewerydb.com/v2/breweries/?key=546e79849610632a56e3ea49a776f1ba&established=1988",
  	request("https://api.brewerydb.com/v2/breweries/?key=546e79849610632a56e3ea49a776f1ba&q=" + userInput.qParams[0].value,
  	function (error, response, body) { 
     	if (!error && response.statusCode === 200) { 
	      console.log(body); 
	      console.log("!!!");
	      res.send(body); 
    	} 
   }); 
});	

app.use(function (req, res, next) {
  // Website sending requests
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1');
  // Request method that you are allowing (we are using GET)
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  // Request header types that are allowed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // The following is set to false since we won't be addressing cookies and sessions
  res.setHeader('Access-Control-Allow-Credentials', false);
  // Proceed to the next layer of middleware
  next();
});

app.listen(app.get('port'), function(){
  console.log('Express started on port' + app.get('port') + '; press Ctrl-C to terminate.');
});