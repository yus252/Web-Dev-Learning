var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var r = document.querySelector("#reset");
var input = document.querySelector("input");
var num_display = document.querySelector("p span");
var p1_display = document.querySelector("#score1");
var p2_display = document.querySelector("#score2");
var p1_score = 0;
var p2_score = 0;
var game_over = false;
var total = 5;


p1.addEventListener("click", function(){
	if( !game_over){
		p1_score++;
		p1_display.textContent= p1_score;
		if(p1_score === total){
			game_over = true;
			p1_display.classList.add("winner");
		}
	}
});


p2.addEventListener("click", function(){
	if( !game_over){
		p2_score++;
		p2_display.textContent= p2_score;
		if(p2_score === total){
			game_over = true;
			p2_display.classList.add("winner");
		}
	}
});

r.addEventListener("click", function(){
	reset();
});

input.addEventListener( "change", function(){
	reset();
	num_display.textContent = this.value;
	total = Number(this.value);
});

function reset(){
	p1_display.textContent = 0;
	p1_score = 0;
	p2_display.textContent = 0;
	p2_score = 0;
	game_over = false;
	p1_display.classList.remove("winner");
	p2_display.classList.remove("winner");
}

