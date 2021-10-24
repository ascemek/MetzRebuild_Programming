document.getElementById("feedback").onsubmit= function (){
	fireEvent(), event.preventDefault();
};
//I stole this code from my loginChecker script which may explain the preventDefault()
//-Riley
function fireEvent(){ 
	alert("The back-end of account creation and storage is unfinished. Note that despite inputing this information you will not be able to send your feedback.");
	window.location = "feedback.html";
}