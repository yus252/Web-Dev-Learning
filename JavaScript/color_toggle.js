var btn = document.querySelector("button");

// btn.addEventListener("click", function(){
// 	if( document.body.style.background === "lightgray"){
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "lightgray";
// 	}
// });

btn.addEventListener( "click", function() {
	document.body.classList.toggle("change");
});