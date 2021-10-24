function changeStyleVegetarian(){
	var text = document.getElementById("para1").style.backgroundColor = "green"; //BACKGROUND COLOR
	var text = document.getElementById("para2").style.backgroundColor = "green"; //BACKGROUND COLOR
	var text = document.getElementById("para3").style.backgroundColor = "green"; //BACKGROUND COLOR
	var text = document.getElementById("para4").style.backgroundColor = "green"; //BACKGROUND COLOR
	var text = document.getElementById("para5").style.backgroundColor = "green"; //BACKGROUND COLOR

	//var text = document.getElementById("para1").style.color = "blue";		   	 //TEXT COLOR
	//var text = document.getElementById("para1").style.fontStyle = "italic";    //FONT STYLE
}


function changeStyleGluten(){
	var text = document.getElementById("par1").style.backgroundColor = "blue"; //BACKGROUND COLOR
	var text = document.getElementById("par2").style.backgroundColor = "blue"; //BACKGROUND COLOR
	var text = document.getElementById("par3").style.backgroundColor = "blue"; //BACKGROUND COLOR
	var text = document.getElementById("par4").style.backgroundColor = "blue"; //BACKGROUND COLOR
	var text = document.getElementById("par5").style.backgroundColor = "blue"; //BACKGROUND COLOR
}

function changeStyleVegan(){
	var text = document.getElementById("par1").style.backgroundColor = "blue"; //BACKGROUND COLOR
	var text = document.getElementById("par2").style.backgroundColor = "blue"; //BACKGROUND COLOR
	var text = document.getElementById("par3").style.backgroundColor = "blue"; //BACKGROUND COLOR
	var text = document.getElementById("par4").style.backgroundColor = "blue"; //BACKGROUND COLOR
	var text = document.getElementById("par5").style.backgroundColor = "blue"; //BACKGROUND COLOR
}




	const dietaryReqs = new Array("Halal", "Kosher", "Vegan", "Vegetarian", "GlutenFree");

	//Halal
	dietaryReqs[0] = document.getElementById("halalID").style.backgroundColor = "blue"; //BACKGROUND COLOR

	//Kosher
	dietaryReqs[1] = document.getElementById("kosherID").style.backgroundColor = "pink"; //BACKGROUND COLOR

	//Vegan
	dietaryReqs[2] = document.getElementById("veganID").style.backgroundColor = "yellow"; //BACKGROUND COLOR

	//Vegetarian
	dietaryReqs[3] = document.getElementById("vegetarianID").style.backgroundColor = "black"; //BACKGROUND COLOR

	//Gluten Free
	dietaryReqs[4] = document.getElementById("glutenFreeID").style.backgroundColor = "purple"; //BACKGROUND COLOR


	document.getElementById('button').onclick = function() {
   		alert("button was clicked");
	};

	//Milk

	//Molluscs

	//Celery

	//Lupin

	//Mustard

	//Peanut

	//Sesame

	//Soya

	//Tree Nuts

	//Sulphites

	//Gluten

	//Fish

	//Crustaceans

	//Eggs



