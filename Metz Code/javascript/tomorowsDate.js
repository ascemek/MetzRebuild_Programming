// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1)

//The targeted lenght of day is two digit so if the day number is single digit, then it will add 0 to the beginning of it.
var TodayDay = String(tomorrow.getDate()).padStart(2, '0');
//January is 0 therefore we added 1. The targeted lenght of month is two digit
//so if the month number is single digit, then it will add 0 to the beginning of it.
//Example: 10/05/21 
var TodayMonth = String(tomorrow.getMonth() + 1).padStart(2, '0'); 
var TodayYear = tomorrow.getFullYear();

var todayDate = (TodayMonth + "/" + TodayDay + "/" + TodayYear)

// Create a variable called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById('TodaysDate');
// Write the message into that element.
elMsg.textContent = "Tomorrow's Menu: " + todayDate;