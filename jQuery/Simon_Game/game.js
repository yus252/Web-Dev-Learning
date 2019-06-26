var buttons = ["green", "red", "yellow", "blue"];
var pattern =[];
var chosen =[];
var level = 0;
var started = false;
var i = 0;
var failed = false;

$("div[type='button']").click(function(){
	var audio = new Audio("sounds/" + $(this).attr("id") + ".mp3");
	audio.play();
	$(this).fadeOut(100).fadeIn(100);
	if( started === true){
		chosen.push($(this).attr("id"));
		if( chosen[chosen.length-1] !== pattern[chosen.length-1]){
			var audio = new Audio("sounds/wrong.mp3");
			audio.play();

			$("body").addClass("game-over");
      		$("#level-title").text("Game Over, Press Any Key to Restart");

      		setTimeout(function () {
        	$("body").removeClass("game-over");
      		}, 200);
			
      		restart();

		}else{
			if(pattern.length === chosen.length){
				setTimeout(function () {
         		levelUp();
        		}, 1000);
			}
		}
	}
});


$(document).keypress(function(event){
	if( (event.which === 65 || event.which === 97) && started === false){
		started = true;
		levelUp();
	}

	if( started === false){
		restart();
		started = true;
		levelUp();
	}
});



function generateKey(){
	var next = Math.floor(Math.random() * 4);
	return next;
}

function levelUp(){
	if( started === true){
		level++;
		$("#level-title").text("Level " + level);
		chosen = [];
		var next = generateKey();
		var audio = new Audio("sounds/" + buttons[next] + ".mp3");
		audio.play();
		$("#"+buttons[next]).fadeOut(100).fadeIn(100);
		pattern.push(buttons[next]);
	}
}

function restart(){
	started = false;
	pattern =[];
	chosen =[];
	level = 0;
	started = false;
}