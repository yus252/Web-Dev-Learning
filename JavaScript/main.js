var line = document.querySelector("#mouse_effect");

line.addEventListener( "mouseover", function(){
	this.style.color = "red";
});

line.addEventListener( "mouseout", function(){
	this.style.color = "black";
})