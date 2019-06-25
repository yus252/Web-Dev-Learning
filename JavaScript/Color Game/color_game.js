// Default colors
var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(6);
var pickedColor = pickColor();
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var	color_display = document.querySelector("#color_display");
var eBtn = document.querySelector("#eBtn");
var hBtn = document.querySelector("#hBtn");
var easy = false; //Hard by default

hBtn.classList.add("selected");


eBtn.addEventListener("click", function(){
	eBtn.classList.add("selected");
	hBtn.classList.remove("selected");
	// Show three squares and hide other 3
	easy = true;
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	squares[3].style.display = "none";
	squares[4].style.display = "none";
	squares[5].style.display = "none";
	reset();
});

hBtn.addEventListener("click", function(){
	hBtn.classList.add("selected");
	eBtn.classList.remove("selected");
	// Show three squares and hide other 
	easy = false;
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	console.log( colors);
	squares[3].style.display = "block";
	squares[4].style.display = "block";
	squares[5].style.display = "block";
	reset();
});

color_display.textContent = pickedColor;
renewColors(squares, colors);

resetBtn.addEventListener("click", function(){
	if( easy === true){
		colors = generateRandomColors(3);
		pickedColor = pickColor();
	}else{
		colors = generateRandomColors(6);
		pickedColor = pickColor();
	}
	reset();
})


function reset(){

	color_display.textContent = pickedColor;
	h1.style.backgroundColor = "transparent";
	renewColors(squares, colors);
	message.textContent = "";
	resetBtn.textContent = "New Colors";
}


// Assign colors to squares and add evenlistner
function renewColors(square, colors){
	for( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				changeColors(clickedColor);
				resetBtn.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "transparent";
				message.textContent = "Try Again";
			}
		});
	}
}


function changeColors(color){
	h1.style.backgroundColor = color;
	//Change all the squares to the given color
	for( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	// Pick a random color
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function generateRandomColors( num ){
	// Make an array
	var array = [];
	// Add numb random colors to array
	for( var i = 0; i < num; i++){
		//Generate random numbers for RGB value
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		array.push("rgb(" + r + ", " + g + ", " + b + ")"); 
	}
	return array;
}

