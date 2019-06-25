window.setTimeout(function() {
	var todos = [];
	var input = prompt("What would you like to do?");

	while( input !== "quit"){
		//Ask for user input
		if(input === "list"){
			console.log("________________");
			todos.forEach(function(todo, i){
				console.log(i + ": " + todo);
			});
		}
		else if( input === "new"){
			todos.push(prompt("Enter new todo"));
		}
		else if( input == "delete"){
			var index = prompt("Enter index of todo to detete");
			todos.splice(index, 1);
			console.log("Item delted!")
		}
		else{
			alert("Invalid input! Please retype!");
		}
		var input = prompt("What would you like to do?");
	}

	console.log("You quit the app!");
}, 500);




