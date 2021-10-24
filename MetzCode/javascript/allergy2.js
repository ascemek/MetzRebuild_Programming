function Food(name, dieReq1, dieReq2, dieReq3, contain1, contain2, contain3, contain4) {
  this.name = name;

  //Dietary Requirments (Max 3 on the website)
  this.dieReq1 = dieReq1;
  this.dieReq2 = dieReq2;
  this.dieReq3 = dieReq3;

  //Contains (Max 4 on the website)

  this.contain1 = contain1;
  this.contain2 = contain2;
  this.contain3 = contain3;
  this.contain4 = contain4;

}

// Create two food objects
var waffle = new Food('Waffle',"VegetarianR", "0r", "0r", "Gc", "Ec", "Mc", "Sc", );
var scrambledEggs = new Food('Scrambled Eggs', "VegetarianR", "GlutenFreeR", "0r", "Ec" ,"0c", "0c", "0c");





