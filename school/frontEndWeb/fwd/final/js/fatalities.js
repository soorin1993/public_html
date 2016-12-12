$(document).ready(function(){
	$('#rescue-img').click(showData);
});

function getData(callback){
	$.getJSON("data/avalanche.json", function(data) {
        callback(data);
    });
}

function showData(result) {
	
	getData(function(data) {

	
		console.log(data);
		
		var list = document.getElementById('rescue-list');
		
		$.each(data, function(index, item){
			
			var listItem = document.createElement('li');
	
			var state = item["state"];
			var fatalities = item["fatalities"];
			var activity = item["activity"];
			var month = item["month"];
			
			var stateText = document.createElement('p');
			var fatalitiesText = document.createElement('p');
			var activityText = document.createElement('p');
			var monthText = document.createElement('p');
			
			stateText.innerHTML = "State: " + state;
			fatalitiesText.innerHTML = "Fatalities: " + fatalities;
			activityText.innerHTML = "Activity: " + activity;
			monthText.innerHTML = "Month: " + month;
			
			listItem.appendChild(stateText);
			listItem.appendChild(fatalitiesText);
			listItem.appendChild(activityText);
			listItem.appendChild(monthText);
			
			list.appendChild(listItem);
		});
	});
}
