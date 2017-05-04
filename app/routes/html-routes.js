var path = require("path");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "WebsitePass12!@",
  database: "friends_db"
});

var express = require("express");
var app = express();

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
    console.log("on survey page");
  });

  // app.get("/api/friends", function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/friendslist.html"));
  // });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};

// app.post("/survey", function(req, res) {
//     connection.query("INSERT INTO friendslist (name, photo_link) VALUES (?, ?)", [req.body.name, req.body.photo], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     res.redirect("/");
//     console.log("help");
//     });
// });
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// app.post("/survey", function(req, res) {
//   connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     // res.redirect("/");
//     console.log("it worked?");
//   });
// });