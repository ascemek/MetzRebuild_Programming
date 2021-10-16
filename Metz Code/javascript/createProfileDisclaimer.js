document.getElementById("createProfile").onsubmit= function (){
	fireEvent(), event.preventDefault();
};

function fireEvent(){
	alert("The back-end of account creation and storage is unfinished. Note that despite inputing this information you will not be able to log into your account.");
	window.location = "profilePreferences.html";
}