console.log("EXTENSION _ SHOWTIME");
var date = new Date();
document.addEventListener("DOMContentLoaded",function(event){
	var element = document.getElementById("displayDate");
	element.innerHTML = date;
});