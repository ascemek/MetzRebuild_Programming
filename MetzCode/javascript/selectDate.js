document.dateSelector.date.onchange = function(){ //this is called anyting the form element named "date" is updated

//Good god was this code a pain to set up. Once again submitting the form broke everything. I ended up using
//.onchange rather than .onsubmit. so that I could still access the value of the date input. -Riley

	var inputDate = document.dateSelector.date.valueAsNumber + 86400000; //get the value of the input and add 1 day 
	var intermediateDate = new Date (inputDate); //turn that into a date object

	var outputDay = String(intermediateDate.getDate()).padStart(2, '0'); //get the day
	var outputMonth = String(intermediateDate.getMonth() + 1).padStart(2, '0'); //get the month
	var outputYear = intermediateDate.getFullYear(); //get the year

	var outputDate = (outputMonth + "/" + outputDay + "/" + outputYear) //combine all of them


	var msg = "Veiwing Menu For: " + outputDate.toString(); //add a string to that (this could probably be part of line 11 couldnt it)
	
	document.getElementById('TodaysDate').textContent = msg; //find the element on the page to display the date in
	document.getElementById('sorrymsg').style.visibility = 'visible'; //show the error message
}