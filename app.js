// //  Option 3 - Smooth Scroll - https://github.com/cferdinandi/smooth-scroll
function SmoothScroll(nav)
{
	this.nav = nav;
}
const scroll = new SmoothScroll('.navbar a[href*="#"]',
{
	speed: 2000
});

// importing dependencies
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 4200;
app.listen(port, function()
{
	console.log("Server is running on port " + port);
});

app.get("/", function(request,response){
	response.render(__dirname + "/views/index.ejs");
})
