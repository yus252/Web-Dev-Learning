# Web Projects

This repository contains many small web projects that I have done to keep track
of the process of learning website developement on my own.

## Getting Started
These instructions will get you a copy of the project up and running on your 
local machine for development and testing purposes. See deployment for notes on 
how to deploy the project on a live system.

### Prerequisites
For those Front-End projects, just download the repository and open HTML file.
For those Back-End(Full-Stack) projects, check the following steps:

(1) Install MongoDB

(2) Install npm

(3) Install each package that is specified in package.json file.

(4) Run 
```bash 
./mongod 
``` 
in one terminal and then run 
```bash 
mongo app.js
``` 
in another terminal.

(5) Go to https://test-webdev.run.goorm.io

## Authors
Yuling Shi

## Date Created
June 19th, 2019


## Front-End Learning

### 1. Pokemon Chart created on 6/20/2019
I was learning HTML basics at this time. Thus, this project only applies by
HTML. But I like this project a lot since I like Pokemon!!! The main concepts
used in this project are link, image, and table.


### 2. TicTacToe created on 6/21/2019
This is created while I am learning CSS. I just learned how to select elements
in different ways and manipulate background and borders. There, I created a 3 by
3 table to represent the board. Then, I use CSS to highlight the border that is 
needed for this game.


### 3. Photo Gallery created on 6/21/2019
More style about CSS, including fonts, margin, padding, and border. I used
those simple elements to creat the layout of Photo Gallery and use Google Fonts
to make the title fancy. Pictures come from the website, Unsplash.


### 4. Blog created on 6/21/2019
This project mainly focuses on CSS. It is fake blog website for Turning(I just 
copied content from his book). Besides Google Fonts, I added text-align, 
letter-space, and line-height. Also, I use color of hexadecimal value to choose
more precise color. 


### 5. Image Gallery created on 6/22/2019
I am learning how to use Bootstrap now. Thus, this project is basically the same
idea as the project beofore, Photo Galllery. But this one is maily focus on
Bootstrap. Since the video teaching how to use Bootstrap is using Bootstrap 3, I
also use Bootstrap 3 in this project. I have used container, navigation bar,
jumbotron, grid, and thumbnail from Bootstrap. Also, I used icons from Font 
Awsome. The first two pictures are taken by me. Others are from Unsplash.


### 6. Purrfect created on 6/22/2019
Purrfect is a website to connect human and animals( Sounds funny, right!). This
projects combines all the tools that I have used before -- HTML, CSS, Bootstrap,
Google Fonts, Font Awsome, and Unsplash. New things is that I set the background
to be the picture from Unspash, add shawdow to the title, and use horizontal
line.


### 7. Pattern created on 6/23/2019
Pattern is website that transforms your picture to look like a certain mood. I
began to use Bootstrap 4 in this project. I tried some new things in Bootstrap
4, including display, cards, button, spacing under small, middle, and large
screens( different pixel number), and editing margin/padding directly in class,
like mt-5.

### 8. Food Museum created on 6/23/2019
Food Museum displays pictures of food. It can work as a gallery of different
food or a menu website. For this time, I tried more "hidden" effect of
Bootstrap. For example, the navbar is fix-top but when you scoll the page, it
changes color( a little bit of JavaScript); To make the picture's size
proportional to the page as the user drag the window to change the page's size,
I set image to be "container-fluid"; I implemented flex box to make the text and
the picture have the same height; the text will be hiddent when the window is
small and the order of the description and the picture will also change.


### 9. Todo List created on 6/23/2019
I am now learning JavaScript. The main focus of this small project is
"function" and "array", including alert, prompt, and forEach. Array is used to
keep track of the user's todos. Every time the user opens the page, it asks to
type one command of the four, [new], [delete], [list], and [quit].


### 10. Score Keeper created on 6/24/2019
Score Keeper keeps track of the scores between two players. Users can input how
many rounds they will have, resert the gaem, and add scores. I maily toggled
with addEventListener(), classList.add(), and querySelector("id).


### 11. RGB Color Game created on 6/24/2019
This game is the clone of the online web game of the same name. Since I was 
writing the function while playing the game to seek out JavaScript effects, the 
code is a little bit messy. It wraps up all the things that I have learned so 
far.New things: Math.random & floor and style.display in JavaScript and
transition, outline, and border radius in CSS.


### 12. Todo List v2.0 created on 6/25/2019
This is a totally different version of the Todo List that I have created before.
I used jQuery to create more animations, such as change color or fadeout while
clicking a certain element, add new li to the list by changing HTML content, and
slide out an icon while hovering over the elemnts.

### 13. Simon Game created on 6/25/2019
This is a clone of Simon Game.The device creates a series of tones and lights 
and requires a user to repeat the sequence. If the user succeeds, the series 
becomes progressively longer and more complex. Once the user fails or the time 
limit runs out, the game is over. What is new here is adding sounds and flash
effect to the game. Also, I need one array to keep track of the button that the
player has clicked and another array to record the sequence of randomly 
generated color. Then, I need to check if they are same. If they are same, the
game continues. Otherwise, I would reset all the variables and restart the game.


### 14. Patatap created on 6/26/2019
Paratap has the same idea as the online portable animation and sound kit of the
same name. But this project is less complicated than the online version. When
the alphabet keys are pressed, animated circles will show up on the page and a
corresponding sound would play. I make the animation of circles by applying a 
Paper.js, an open source vector graphics scripting framework that runs on top 
of the HTML5 Canvas. Sound resources come from Paratap's github resources. I
used another JavaScript library called Holwer, an audio library for the modern 
web, to play the sound(make sure mutiple sounds can be played at the same time).
But there is still a small problem here -- if you directly open the HTML file,
there will be some the Cross Origin errors in the console. To get rid of those
errors, you should:
1) navigate to your project folder in the terminal
2) if you have python v2.x installed then run: 
   python -m SimpleHTTPServer
    or for python v3.x:
   python -m http.server
3) open up your browser and navigate to http://localhost:8000
4) open the circles.html file
This project is not hard. Most of things that I do is reading documentation
about how to use those libraries. But this project is really fun since I can
create my own music while playing it. Hope you enjoy, too!




## Back-End Learning


### 1. EJSDemo created on 6/26/2019
Until now I have already learned the basics of Node.js, including NPM, Express,
Template, and EJS. This project does not have fancy front-end stuff. It is used
for me to do route practice. The orginal file is created on Goormide.

### 2. Movie Search App create on 6/27/2019
I just finished APIs and Request. Thus, this project combines the two. First, it
reads the user input [movie name]. Then, it makes an request to the API omdbapi 
and this API will return a JSON string to our website. Then, I parse in the JSON
file and shown every movie's name on the results page.

### 3. MyBlog App created on 7/01/2019 
After learning 7 RESTFUL routes, I created MyBlog App. It is orginally created
on goormIDE. For further details, please check https://goor.me/9qS2r

For the front-end, instead of using Bootstrap like I usually do, I switched to 
Sematic UI for this time to get used to different libraries. For the back-end, 
this App applies MongoDB, Express, EJS, Body-Parser, Method-Override, and 
Express-Sanitizer packages. User can create, edit, delete, and view blogs on 
this website. But for now, I did not set up user login and sign up stuff.


