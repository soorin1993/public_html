var road = document.getElementById("road");
var mountain = document.getElementById("mountain");
var rec = document.getElementById("rec");
var cyclo = document.getElementById("cyclo");
var bmx = document.getElementById("bmx");
var track = document.getElementById("track");

var iconList = [road, mountain, rec, cyclo, bmx, track];

for (i = 0; i < iconList.length; i++) {
	
	iconList[i].addEventListener("click", iconClicked, false);
}

var image = document.getElementById("image");
var summary = document.getElementById("summary");

function iconClicked() {
	
	if (this.id == "road") {
		
		image.src = "img/Steamboat.jpg"
		summary.innerHTML = "The wide-open rolling terrain of the Yampa Valley has long been home to Steamboat's ranching legacy. Pedal our roads and you will be rewarded with miles of great vistas. Popular routes include everything from 20-mile out and backs, to 40-mile circuits, to mixed dirt touring, to epic hill climbs and century rides. Road rides vary in mileage so you’ll have options for a quick cruise, or an all- day crusher."
	
	}
	
	else if (this.id == "mountain") {
		image.src = "img/CrestedButte.jpg"
		summary.innerHTML = "Crested Butte and the Gunnison Valley offer an expansive mountain-biking experience like no other. The area’s more than 750 miles of mountain-biking trails lead to wildflower-peppered valleys, unparalleled mountain vistas and multi-hued desert expanses."
	}
	
	else if (this.id == "cyclo") {
		image.src = "img/Boulder_valmont.jpg";
		summary.innerHTML = "The Boulder Valmont Bike Park is a 42-acre, natural surface cycling terrain park offering diverse amenities for several riding styles and abilities. The park is free and open daily from dawn to dusk.";
		
	}
	
	else if (this.id == "rec") {
		image.src = "img/bouldercreekpath.jpg";
		summary.innerHTML = "Boulder has a large network of recreational trails for commuting, running, cycling and strolling. Most of the trails are paved, though some have a soft-surface. Many of the paths intersect and the trail system is very popular for the locals, students and visitors alike. These paths take you through parts of the Boulder community that you would never see by car, including paths along rushing creeks, through cottonwood forests and through open grassland with spectacular views of the Indian Peaks. The City of Boulder's trail system also connects to other recreational trails in Boulder County. These connecting trails take you toward Longmont, Louisville, Lafayette and Broomfield. There are also many gravel trails that take you up into the local foothills.";
	}
	
	else if (this.id == "bmx") {
		image.src = "img/Durango.jpg";
		summary.innerHTML = "Part of Durango's great cycling community is a large following of BMX bike riders and offers a very nice and well maintained track. The Durango BMX is located next to the Animas River trail just south of Santa";

	}
	
	else if (this.id == "track") {
		image.src = "img/velodrome.png";
		summary.innerHTML = "Built in 1983 in preparation for the 1984 Olympic Games, the Colorado Springs Olympic Training Center Velodrome is the official training venue for U.S. Olympic and Paralympic track cycling and USA Roller Sports. The Velodrome features a 333.3- meter banked cement cycling track, which wraps around a 200- meter track for roller sports. The 1,000-seat facility is open to the public for community racing, and hosts local, national and international events. In the fall of 2015, the USOC and USA Cycling jointly funded the addition of an air-supported dome that will be in place each fall through spring to allow cyclists to train indoors in the winter season. The Velodrome is located at 250 Union Blvd., approximately one mile south of the Olympic Training Center at Colorado Springs Memorial Park."; 
	}
	
}
