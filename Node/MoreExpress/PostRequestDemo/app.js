var express = require("express");
var app = express();

// Install body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
// Link css files
app.use(express.static("public"));
// Set ejs files
app.set("view engine", "ejs");

var friends = ["Tony", "Ben", "Emily", "Iris"];

app.get("/", function( req, res){
	res.render("home");
});

app.get("/friends", function(req, res){
	res.render("friends", { friends: friends});
});

app.post("/addfriend",function(req, res){
	var newfriend = req.body.newfriend;
	friends.push(newfriend);
	res.redirect("/friends"); // Go back to the orginal route
});

//Tell Express to listen for requests (start server)
var port = 9000 || process.env.PORT;
app.listen(port, function () {
  console.log("Server started!");
});