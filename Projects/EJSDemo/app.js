/** 
 * Template: views/temp_name -- contain html content
 * EJS: <%= > --- take the return value and add it to html
 * <% %> pure JavaScript content
 * res.render("_.ejs", {key: value});
 */

/**
 * public => css files
 * views => ejs files 
 * views/partials => header.ejs + footer.ejs. Then inclue it in ejs files
 */


var express = require("express");
var app = express();

// Link css files
app.use(express.static("public"));
// Set ejs files
app.set("view engine", "ejs");


app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/stitch/:yn", function(req, res){
	var answer = {
		yes: "I love stitch, too!",
		no: "You should check it out!",
	};
	var yn = req.params.yn;
	res.render("stitch.ejs",{ sentence: answer[yn]});
});

app.get("/posts", function( req, res){
	var posts = [
		{ topic: "Dining Hall", author: "Iris"},
		{ topic: "Parking Lot", author: "Charles"},
		{ topic: "Classes", author: "Emily"},
		{ topic: "Residence", author: "Jimmy"}
	];
	res.render("posts.ejs", {posts: posts});
});

// Tell Express to listen for requests (start server)
var port = 9000 || process.env.PORT;
app.listen(port, function () {
  console.log("Server started!");
});