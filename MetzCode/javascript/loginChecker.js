document.getElementById("login").onsubmit= function (){
	fireEvent(), event.preventDefault();
};
/*using preventDefault() there was a workaround for the window.location code. 
becasue I was trying to change pages partway through the form submission,
it submitted the form instead of changing pages. This would obviously break
the backend becasue it cancels submission, but it is a substitute for actual
backend (ie: checking if the username/password are in a database) so im not too 
worried about it. -Riley */
function fireEvent(){
	if(confirm("Oops! looks like you don't have a Metz profile. Click 'Ok' to create one.")){
		window.location="createProfile.html";
	};
}