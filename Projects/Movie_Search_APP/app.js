var express = require("express");
var app = express();
const request = require('request');

app.use(express.static("public"));
// Set ejs files
app.set("view engine", "ejs");

app.get("/", function( req, res){
	res.render("search");
});

app.get("/results", (req, res)=>{
	var query = req.query.search;
	request("http://www.omdbapi.com/?s=" + query + "&apikey=thewdb", function( error, response, body){
		if( !error && response.statusCode == 200){
			var parseData = JSON.parse(body);
			res.render("results", {results: parseData});
		}
	});
});

// Tell Express to listen for requests (start server)
var port = 9000 || process.env.PORT;
app.listen(port, function () {
  console.log("Server started!");
});