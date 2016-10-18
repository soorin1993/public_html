document.getElementById("enter").addEventListener("click", orderInfo);


function orderInfo() {
		
	var summary = document.getElementById("summary").value = ""
	
	var name = document.getElementById("name").value;
	if (name != "") {
		document.getElementById("summary").value += name + "\n";
	}
	
	var email = document.getElementById("email").value;
	if (email != "") {
		document.getElementById("summary").value += email + "\n";
	}
	
	var address = document.getElementById("address").value;
	if (address != "") {
		document.getElementById("summary").value += address + "\n";
	}
	
	
	if(document.getElementById("road").checked == true){
		document.getElementById("summary").value += "You like road cycling.\n";
	}
	
	if(document.getElementById("mountain").checked == true){
		document.getElementById("summary").value += "You like mountain cycling.\n";
	}
	
	if(document.getElementById("cyclocross").checked == true){
		document.getElementById("summary").value += "You like cyclocrossing.\n";
	}
	
	if(document.getElementById("rec").checked == true){
		document.getElementById("summary").value += "You like recreational cycling.\n";
	}
	
	if(document.getElementById("bmx").checked == true){
		document.getElementById("summary").value += "You like BMX cycling.\n";
	}
	
	if(document.getElementById("track").checked == true){
		document.getElementById("summary").value += "You like track cycling.\n";
	}
	
	if(document.getElementById("rent-yes").checked==true){
		document.getElementById("summary").value += "You need to rent a bike.\n";
	}
	else {
		if (document.getElementById("rent-no").checked==true){
			document.getElementById("summary").value += "You don't need to rent a bike.\n";
		}
	}
	
	if (document.getElementById("seasons").value != "None"){
		document.getElementById("summary").value += "You are visiting in " + document.getElementById("seasons").value;
	}
}
	
