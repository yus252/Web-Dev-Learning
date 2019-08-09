var express = require("express");
var router = express.Router();
var Campground = require("../models/campground.js");
var middleware = require("../middleware");

//====================
// Campgrounds Routes
//=====================

// INDEX - Display a list of all campgrounds
router.get("/", function(req, res){	
	// Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/index.ejs", {campgrounds: allCampgrounds});
		}
	});
});

// CREATE - add new campgrounds to DB
router.post("/", middleware.isLoggedIn, function(req, res){
	//Get data from the post 
	var author = {
		id: req.user._id,
		username: req.user.username
	};
	Campground.create( {name: req.body.name, price: req.body.price, image: req.body.image, description: req.body.description, author: author }, function( err, newlyCreated){
		if(err){
			console.log(err);
		}else{
			// Redirect to campgrounds page
			res.redirect("/campgrounds");
		}
	});
});

// NEW - Displays form to make a new campgrounds
router.get("/new", middleware.isLoggedIn, function(req, res){
	res.render("campgrounds/new.ejs");
});

//SHOW - Shows info about one campground
router.get("/:id", function(req, res){
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err|| !foundCampground){
			req.flash("error", "Campground not found");
          	res.redirect("/campgrounds" );
		}else{
			res.render("campgrounds/show.ejs",{campground: foundCampground });
		}
	});
});


// EDIT Campground Route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit.ejs", {campground: foundCampground});
    });
});


// UPDATE Campground Route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err || !updatedCampground){
           res.redirect("/campgrounds");
       } else {
           //redirect somewhere(show page)
           res.redirect("/campgrounds/" + req.params.id);
       }
    });
});

// DESTROY Campground Route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
   Campground.findByIdAndRemove(req.params.id, function(err, foundCampground){
      if(err || !foundCampground){
          res.redirect("/campgrounds");
      } else {
          res.redirect("/campgrounds");
      }
   });
});

module.exports = router;
