// import express package
var express = require("express");
var app = express();

// "/" => "Hellow World!"
app.get("/", function(req, res){
    res.send("Hello World!");
});

// "/bye" => "Good Bye!"
app.get("/bye", function( req, res){
	res.send("Good Bye!");
});


// "/who" => "Yuling Shi"
app.get("/who", function(req, res){
	res.send("Yuling Shi");
});

/***** Route Parameters ******/
// : following by anything that we want to be an variable
app.get("/email/:name", function(req, res){
	var emails = {
		pan: "pany@ucsd.edu",
		yuling: "yus252@ucsd.edu",
		seraph: "sh6262@ucsd.edu",
	};
	var name = req.params.name;
	if( emails[name]){
		res.send( name + "'s email is " + emails[name]);
	}else{
		res.send("Sorry! I don't know what " + name + "'s email " + emails[name] + " is!");
	}
});


// Go to a route which is not defined above
// Put it at the bottom or it will stop other routes to run
app.get("*", function( req, res){
	res.send("Route is not defined");	
});


// Tell Express to listen for requests (start server)
var port = 9000 || process.env.PORT;
app.listen(port, function () {
  console.log("Server started!");
});
