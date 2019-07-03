var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");
var mongoose = require("mongoose");
var express = require("express");
var app = express();

// App config
mongoose.connect("mongodb://localhost/myblog_app", {useNewUrlParser: true, useFindAndModify: false }, function(err) {
  if (err) { 
	  return console.error("Failed!");}
});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// Mongoose/ 
var blogSchema = new mongoose.Schema({
	title: String,
	image: { type: String, default: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
	body: String,
	created: { type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
// 	title: "Welcome to MyBlog!!!",
// 	body: "Welcome to MyBlog! Here, you can share everthing with the world!",
// });

//Index
app.get("/", function(req, res){
	res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log("ERROR!");
		}else{
			res.render("index.ejs", {blogs: blogs});		
		}
	});
});

// New
app.get("/blogs/new", function(req, res){
	res.render("new.ejs");
});

// Creat
app.post("/blogs", function(req, res){
	//create blog
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new.ejs");
		}else{
			//redirect
			res.redirect("/blogs");
		}
	});
});

// Show
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("show.ejs", {blog: foundBlog});
		}
	});
});

// Edit
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("edit.ejs", {blog: foundBlog});
		}
	});
});


// Update
app.put("/blogs/:id", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs/" + req.params.id);
		}
   	});
});

// Delete

app.delete("/blogs/:id", function(req, res){
	Blog.findByIdAndRemove(req.params.id, req.body.blog, function(err, updatedBlog){
      if(err){
          console.log("ERROR IN DELETE!");
      }  else {
          res.redirect("/blogs");
      }
   });
});


// Tell Express to listen for requests (start server)
var port = 9000 || process.env.PORT;
app.listen(port, function () {
  console.log("Server started!");
});