var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
	res.render("campgrounds/landing.ejs");
});

//==================
// 	Authentication
//==================

// Show register form
router.get("/register", function(req, res){
	res.render("register.ejs");
});

// Handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            req.flash("error", err.message);
            return res.render("register.ejs");
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
           res.redirect("/campgrounds"); 
        });
    });
});

// Show log in form
router.get("/login", function(req, res){
	res.render("login.ejs", {message: req.flash("error")});
});

// Handle Login Logic
router.post("/login", passport.authenticate("local", {
	successRedirect: "/campgrounds", 
	failureRedirect: "/login"
}), function(req, res){
});


// Log out Route
router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "Logged you out!");
	res.redirect("/campgrounds");
});

// Middleware
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports = router;