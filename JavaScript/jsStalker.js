// Load the web page before asking for input
window.setTimeout(function() {
	var first_name = prompt("What is your first name?");
	var last_name = prompt("What is your last name?");
	var	age = prompt("What is your age?");
	console.log("Name: " + first_name + last_name + age);
}, 500);


