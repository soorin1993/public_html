$(document).ready(function(){
	
	var config = {
	    apiKey: "AIzaSyBxGA0jasOuFvDinw8PjYhZqwZckKocWwE",
	    authDomain: "fwd-final.firebaseapp.com",
	    databaseURL: "https://fwd-final.firebaseio.com",
	    storageBucket: "fwd-final.appspot.com",
	    messagingSenderId: "196142109897"
	};
  	
  	firebase.initializeApp(config);
	
	$('#enter').click(sumbitFirebase);
	
	createList()
});

function sumbitFirebase() {
	
	var database = firebase.database();
	var storageRef = database.ref();
		
	var name = $('#name').val();
	var email = $('#email').val();
	var phone = $('#phone').val();

	var avalanche = "No";
	if ($('#avalanche_yes').is(':checked')) {
		avalanche = "Yes";
	}
	
	var trigger = "No";
	if ($('#trigger_yes').is(':checked')) {
		trigger = "Yes";
	}
	
	var caught = "No";
	if ($('#caught_yes').is(':checked')) {
		caught = "Yes";
	}
	
	var location = $('#location').val();
	var description = $('#description').val();
	
	storageRef.push({name: name, email: email, phone: phone, avalanche: avalanche, trigger: trigger, caught: caught, description: description});

}

function createList() {
	
	var database = firebase.database();
	var storageRef = database.ref();
	
	storageRef.on("child_added", function(snapshot) {
		
		var list = document.getElementById('results-list');
		
		var name = snapshot.val().name;
		var email = snapshot.val().email;
		var phone = snapshot.val().phone;
		var avalanche = snapshot.val().avalanche;
		var trigger = snapshot.val().trigger;
		var caught = snapshot.val().caught;
		var description = snapshot.val().description;

		 
		var item = document.createElement('li');

		var nameText = document.createElement('p');
		var emailText = document.createElement('p');
		var phoneText = document.createElement('p');
		var avalancheText = document.createElement('p');
		var triggerText = document.createElement('p');
		var caughtText = document.createElement('p');
		var descriptionText = document.createElement('p')
		
		nameText.innerHTML = "Name: " + name;
		emailText.innerHTML = "Email: " + email;
		phoneText.innerHTML = "Phone: " + phone;
		avalancheText.innerHTML = "Did you see any avalanches?: " + avalanche;
		triggerText.innerHTML = "Did you trigger any avalanches?: " + trigger;
		caughtText.innerHTML = "Was anyone caught in an avalanche?: " + caught;
		descriptionText.innerHTML = "Desription: " + description;
		
		item.appendChild(nameText);
		item.appendChild(emailText);
		item.appendChild(phoneText);
		item.appendChild(avalancheText);
		item.appendChild(triggerText);
		item.appendChild(caughtText);
		item.appendChild(descriptionText);
		
		list.appendChild(item);


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	});
}