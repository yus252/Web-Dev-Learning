var mongoose = require("mongoose"),
	Campground = require("./models/campground.js"),
	Comment = require("./models/comment.js");

var data = [
	{
		name: "Torry Pine Hike", 
		image: "https://grist.files.wordpress.com/2017/05/tent-campsite-by-river.jpg?w=1024&h=576&crop=1",
		description: "This Torrey Pines hike takes you to the best of the park – you experience get great ocean views, hike through unique geological formations, get a glimpse of the world-famous golf course, hike on an antique version of the Pacific Coast Highway, and of course, get see the Torrey Pine. The Torrey Pine is the rarest pine tree in the United States and is an endangered species. You can only see them here and on the Channel Islands. As you’re hiking Torrey Pines, remember that the environment is fragile, so please stay on the trail. "
	},
	{
		name: "Campland on the Bay",
		image: "https://www.rd.com/wp-content/uploads/2017/05/00_camping_Bucket-List-Worthy-American-Campsites_358158596_shuttero_FT.jpg",
		description:"Campland on the Bay is San Diego's premiere campground. Dig your toes in the sand on our private beach. Catch some sun and fun on a sailboat from our marina. Enjoy one of dozens of activities and amenities for kids and adults that make Campland everyone's favorite campground. You'll find hookups for RVs, spaces for tent camping and luxury amenities. With so much to do and enjoy, you may never want to leave."	
	},
	{
		name: "Kumeyaay Campground",
		image: "https://cdn.vox-cdn.com/thumbor/Njz1Z1ks2Te24lNn9stLBnDOyYk=/0x0:5718x3812/1200x800/filters:focal(2402x1449:3316x2363)/cdn.vox-cdn.com/uploads/chorus_image/image/55070239/Tentrr_Meadow_Lark_0765_72DPI.0.jpg",
		description: "Kumeyaay Campground is located in San Diego city just 4 miles from my house. It is a small campground that is only open on the weekends and it is actually newly re-opened after being closed for a couple of years. It has been renovated and upgraded by local Boy Scouts and Mission Trails rangers so it is like brand new. The sites are small and pretty close together, and the upper-level ones don't have any shade."
	},
	{
		name: "Lakes Campground",
		image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=xo0RuR6u",
		description: "It is a San Diego County beach with coastal bluffs. Popular activities include swimming, surfing and bodyboarding several nearby breaks, scuba diving, fishing, and beachcombing.[1] Many visitors camp on the campsites on top of the cliffs. Access to the beach is through the multiple staircases and also one ramp. Amenities include showers, bathrooms, electricity, water, Wi-Fi, and a camp store. There are 220 campsites total.[2][3] The 44-acre (18 ha) park was established in 1933.[4]"
	}
];

function seedDB(){
	// Remove all campgorunds
	Campground.deleteMany({}, function(err){
		if(err){
			console.log("Error: remove data");
		}else{
			console.log("Removed Campground");
				
			// Add campgrounds
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if(err){
						console.log("Error");
					}else{
						console.log("Added a campground");
						
						// Create comments
						Comment.create({
							text: "This is a greate place. I have been here for many times.",
							author: "Bob"
						}, function( err, comment){
							if(err){
								console.log("Error: create comment");
							}else{
								campground.comments.push(comment);	
								campground.save();
								console.log("Comment created");
							}
						});
					}
				});
			});
		}
	});
}

module.exports = seedDB;
