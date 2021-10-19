//contents guide: ["milk", "Molluscs", "celery"]
//properties guide: []

function createMenuItem(name, contains, properties){
	this.name = name;
	this.contains = contains;
	this.properties = properties;
	this.findmatchingobject = function(){
		return document.getElementById(this.name);
		
	};

}
var waffles = new createMenuItem("Waffles", 4, 5);
