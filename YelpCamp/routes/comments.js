var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground.js");
var Comment = require("../models/comment.js");
var middleware = require("../middleware");

//==========================
//		Comments Routes
//==========================
// NEW 
router.get("/new", middleware.isLoggedIn, function( req, res){
	Campground.findById(req.params.id, function(error, campground){
		if(error || !campground){
			console.log(error);
		}else{
			res.render("comments/new.ejs", {campground: campground});
		}
	});
});

// CREATE
router.post("/", middleware.isLoggedIn, function(req, res){
	Campground.findById(req.params.id, function(error, campground){
		if(error || !campground){
			console.log(error);
			res.redirect("/campgrounds");
		}else{
			Comment.create(req.body.comment, function( err, comment){
				if(err){
					req.flash("error", "Something went wrong!");
					console.log(err);
				}else{
					// Edit comment
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					
					// Save comment
					campground.comments.push(comment);
					campground.save();
					req.flash("success", "Successfully added comment");
					res.redirect("/campgrounds/" + campground._id);
				}
			});
		}
	});
});


// COMMENT EDIT ROUTE
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
   Comment.findById(req.params.comment_id, function(err, foundComment){
      if(err || !foundComment){
          res.redirect("back");
      } else {
        res.render("comments/edit.ejs", {campground_id: req.params.id, comment: foundComment});
      }
   });
});

// COMMENT UPDATE
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
      if(err){
          res.redirect("back");
      } else {
		  req.flash("success", "Comment Updated!");
          res.redirect("/campgrounds/" + req.params.id );
      }
   });
});

// COMMENT DESTROY ROUTE
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    //findByIdAndRemove
    Comment.findByIdAndRemove(req.params.comment_id, function(err, foundComment){
       if(err || !foundComment ){
           res.redirect("back");
       } else {
		   req.flash("success", "Comment deleted!");
           res.redirect("/campgrounds/" + req.params.id);
       }
    });
});

module.exports = router;