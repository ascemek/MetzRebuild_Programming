//The goal here is to get the objects in the table to stay outlined when they are clicked on and lose their outline when clicked on a second time
//I tried a bunch of approaches that would apply to every single item but all of them broke for one reason or another. Eventually I settled
//on this frustratingly long approach. (At least it works!) -Riley
function Option (name){
	this.name = name;
	this.shadow = 0;
	this.object = 0;
	this.setObject = function(){ //frustratingly, you cannot use getElementById in the function creator so I have to make a method and then call it a lot
		this.object = document.getElementById(this.name);
	}
}

var halal = new Option("halal"); 
halal.setObject();
halal.object.onclick = function(){ /*I feel like this code should perhaps have been a function but I wasn't quite sure how to set that up and by the time
I realised it was already written for every single item -Riley*/
	if(halal.shadow == 0){
		halal.object.style.boxShadow = "1px 1px 10px"
		halal.shadow = 1
	} else {
		halal.object.style.boxShadow = "0px 0px 0px"
		halal.shadow = 0
	}	
}
//this block of code is repeated for every dietary restritiction option (I couldn't find a better way) -Riley
var kosher = new Option("kosher");
kosher.setObject();
kosher.object.onclick = function(){
	if(kosher.shadow == 0){
		kosher.object.style.boxShadow = "1px 1px 10px"
		kosher.shadow = 1
	} else {
		kosher.object.style.boxShadow = "0px 0px 0px"
		kosher.shadow = 0
	}	
}

var vegan = new Option("vegan");
vegan.setObject();
vegan.object.onclick = function(){
	if(vegan.shadow == 0){
		vegan.object.style.boxShadow = "1px 1px 10px"
		vegan.shadow = 1
	} else {
		vegan.object.style.boxShadow = "0px 0px 0px"
		vegan.shadow = 0
	}	
}
var vegetarian = new Option("vegetarian");
vegetarian.setObject();
vegetarian.object.onclick = function(){
	if(vegetarian.shadow == 0){
		vegetarian.object.style.boxShadow = "1px 1px 10px"
		vegetarian.shadow = 1
	} else {
		vegetarian.object.style.boxShadow = "0px 0px 0px"
		vegetarian.shadow = 0
	}	
}
var glutenFree = new Option("glutenFree");
glutenFree.setObject();
glutenFree.object.onclick = function(){
	if(glutenFree.shadow == 0){
		glutenFree.object.style.boxShadow = "1px 1px 10px"
		glutenFree.shadow = 1
	} else {
		glutenFree.object.style.boxShadow = "0px 0px 0px"
		glutenFree.shadow = 0
	}	
}
var milk = new Option("milk");
milk.setObject();
milk.object.onclick = function(){
	if(milk.shadow == 0){
		milk.object.style.boxShadow = "1px 1px 10px"
		milk.shadow = 1
	} else {
		milk.object.style.boxShadow = "0px 0px 0px"
		milk.shadow = 0
	}	
}
var molluscs = new Option("molluscs");
molluscs.setObject();
molluscs.object.onclick = function(){
	if(molluscs.shadow == 0){
		molluscs.object.style.boxShadow = "1px 1px 10px"
		molluscs.shadow = 1
	} else {
		molluscs.object.style.boxShadow = "0px 0px 0px"
		molluscs.shadow = 0
	}	
}
var celery = new Option("celery");
celery.setObject();
celery.object.onclick = function(){
	if(celery.shadow == 0){
		celery.object.style.boxShadow = "1px 1px 10px"
		celery.shadow = 1
	} else {
		celery.object.style.boxShadow = "0px 0px 0px"
		celery.shadow = 0
	}	
}
var lupin = new Option("lupin");
lupin.setObject();
lupin.object.onclick = function(){
	if(lupin.shadow == 0){
		lupin.object.style.boxShadow = "1px 1px 10px"
		lupin.shadow = 1
	} else {
		lupin.object.style.boxShadow = "0px 0px 0px"
		lupin.shadow = 0
	}	
}
var mustard = new Option("mustard");
mustard.setObject();
mustard.object.onclick = function(){
	if(mustard.shadow == 0){
		mustard.object.style.boxShadow = "1px 1px 10px"
		mustard.shadow = 1
	} else {
		mustard.object.style.boxShadow = "0px 0px 0px"
		mustard.shadow = 0
	}	
}
var peanut = new Option("peanut");
peanut.setObject();
peanut.object.onclick = function(){
	if(peanut.shadow == 0){
		peanut.object.style.boxShadow = "1px 1px 10px"
		peanut.shadow = 1
	} else {
		peanut.object.style.boxShadow = "0px 0px 0px"
		peanut.shadow = 0
	}	
}
var sesame = new Option("sesame");
sesame.setObject();
sesame.object.onclick = function(){
	if(sesame.shadow == 0){
		sesame.object.style.boxShadow = "1px 1px 10px"
		sesame.shadow = 1
	} else {
		sesame.object.style.boxShadow = "0px 0px 0px"
		sesame.shadow = 0
	}	
}
var soya = new Option("soya");
soya.setObject();
soya.object.onclick = function(){
	if(soya.shadow == 0){
		soya.object.style.boxShadow = "1px 1px 10px"
		soya.shadow = 1
	} else {
		soya.object.style.boxShadow = "0px 0px 0px"
		soya.shadow = 0
	}	
}
var treeNuts = new Option("treeNuts");
treeNuts.setObject();
treeNuts.object.onclick = function(){
	if(treeNuts.shadow == 0){
		treeNuts.object.style.boxShadow = "1px 1px 10px"
		treeNuts.shadow = 1
	} else {
		treeNuts.object.style.boxShadow = "0px 0px 0px"
		treeNuts.shadow = 0
	}	
}
var sulphites = new Option("sulphites");
sulphites.setObject();
sulphites.object.onclick = function(){
	if(sulphites.shadow == 0){
		sulphites.object.style.boxShadow = "1px 1px 10px"
		sulphites.shadow = 1
	} else {
		sulphites.object.style.boxShadow = "0px 0px 0px"
		sulphites.shadow = 0
	}	
}
var gluten = new Option("gluten");
gluten.setObject();
gluten.object.onclick = function(){
	if(gluten.shadow == 0){
		gluten.object.style.boxShadow = "1px 1px 10px"
		gluten.shadow = 1
	} else {
		gluten.object.style.boxShadow = "0px 0px 0px"
		gluten.shadow = 0
	}	
}
var fish = new Option("fish");
fish.setObject();
fish.object.onclick = function(){
	if(fish.shadow == 0){
		fish.object.style.boxShadow = "1px 1px 10px"
		fish.shadow = 1
	} else {
		fish.object.style.boxShadow = "0px 0px 0px"
		fish.shadow = 0
	}	
}
var crustaceans = new Option("crustaceans");
crustaceans.setObject();
crustaceans.object.onclick = function(){
	if(crustaceans.shadow == 0){
		crustaceans.object.style.boxShadow = "1px 1px 10px"
		crustaceans.shadow = 1
	} else {
		crustaceans.object.style.boxShadow = "0px 0px 0px"
		crustaceans.shadow = 0
	}	
}
var eggs = new Option("eggs");
eggs.setObject();
eggs.object.onclick = function(){
	if(eggs.shadow == 0){
		eggs.object.style.boxShadow = "1px 1px 10px"
		eggs.shadow = 1
	} else {
		eggs.object.style.boxShadow = "0px 0px 0px"
		eggs.shadow = 0
	}	
}