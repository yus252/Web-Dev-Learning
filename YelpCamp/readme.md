# YelpCamp
@author Yuling Shi
@date 06/29/2019


## v1.0 created on 06/29/2019 8:43AM(PDT)
##### Initial Routes: 
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds. Each Campgrounds has:
	* Name
	* Image
	
##### Layout and Basic Styling:
* Create header and footer partials
* Add in Boostrap

##### Style the Campgrounds page:
* Add a better header
* Make Campgrounds display in a grid

##### Style the New Campgrounds page:
* Style the new campgrounds form

##### Style All pages:
* Add a navbar 


## v2.0 created on on 06/29/2019 11:02PM(PDT)
##### Install MongoDB:
* Install:
1. sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
2. echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
3. sudo apt-get update
4. sudo apt-get install -y mongodb-org
5. mkdir data
6. echo 'mongod --dbpath=data --nojournal' > mongod
7. chmod a+x mongod

##### Add Mongoose
* Install anad configure mongoose
* Set up campground model
* Use campground model inside of routes


##### Show Page
* Review the RESTful routes
* Add descripton to campground model
* Show db.collection.drop()
* Add a show route/template


	RESTFUL ROUTES

	name      url      verb    desc.
	===============================================
	INDEX   /dogs      GET   Display a list of all dog
	NEW     /dogs/new  GET   Displays form to make a new dog
	CREATE  /dogs      POST  Add new dog to DB
	SHOW    /dogs/:id  GET   Shows info about one dog
	
	
## v3.0 created on 07/04/2019 10:43PM(PDT)

#### Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

#### Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts


#### Add the Comment model
* Display comments on show page


## v4.0 created on 07/08/2019 13:36(PDT)
#### Comment New/Create
* Nested routes
* Add the comments new nad create routes
* Add the new comment form
	- INDEX /campground
	- NEW /campgrounds/new
	- CREATE /campgrounds
	- SHOW /campgrounds/:id
	- ##### Nested routes
		- NEW /campgrounds/:id/comments/new GET
		- CREATE /campgrounds/:id/comments POST



## v5.0 created on 07/09/2019 10:05(PDT)
#### Finish Styling Show Page
* Addd public directory
* Add custom stylesheet


## v6.0 created on 07/11/2019 10:33(PDT)
#### Auth Pt. 1 - Add User Model
* Install all packages needed for authentication
* Define user model

#### Auth Pt. 2 - Register
* Configure Passport
* Add register route
* Add register template

#### Auth Pt. 3 - Login
* Add login routes
* Add login template


#### Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to the navbar
* Show/hide auth links correctly

#### Auth Pt. 5 - Show/Hide Links
* Show/Hide auth links in navbar correctly

## v7.0 created on 07/12/2019 17:13AM(PDT)
#### Refactoring Routes
* use Express router to recoganize all the routes


## v8.0 created on 07/12/2019 18:23AM(PDT)
#### User + Comments
* Associate users and comments
* Save author's name to comment atuomatically


## v9.0 created on 07/12/2019 21:44AM(PDT)
#### User + Comments
* Prevent an authenticated user from creating a campground
* Save username + id to newly created campground


## v10.0 created on 07/12/2019 22:04AM(PDT)
#### Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

#### Deleting Campgrounds
* Add Destroy Route
* Add Delete button

#### Authorization Part 1: Campground
* User can only edit his/her campgrounds
* User can only deletel his/her campgrounds
* Hide/Show edit and delete button

#### Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

#### Deleting Comments
* Add Destroy route
* Add Delete button

#### Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware



## v11.0 created on 07/13/2019 13:10PM(PTD)
#### UI Improve
* Add "back" redirect to login
* Add method-override
* BOOTSTRAP NAV COLLPASE JS
* Flash Messages
* Refactor container div to header
* Show/hide delete and update buttons
* style login/register forms

## v11.0 created on 07/13/2019 11:25PM(PTD)
* Random Background Landing Page
* Refactor middleware
* change styling in show template - comment delete/update
* UPATE/DELETE CAMPGROUND
-----
* BOOTSTRAP NAV COLLPASE JS
* Flash Messages
* Refactor container div to header
* Show/hide delete and update buttons
* style login/register forms
* Random Background Landing Page
* Refactor middleware
* change styling in show template - comment delete/update
* UPDATE/DELETE CAMPGROUND




