document.getElementById("login").onsubmit= function (){
	fireEvent(), event.preventDefault();
};

function fireEvent(){
	if(confirm("Oops! looks like you don't have a Metz profile. Click 'Ok' to create one.")){
		window.location="createProfile.html";
	};
}