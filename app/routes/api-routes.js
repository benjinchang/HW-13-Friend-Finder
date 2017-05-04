var tableData = require("../data/friends");
var express = require("express");
var app = express();
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

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });


  app.post("/", function(req, res) {
    // connection.query("INSERT INTO friendslist (name, photo_link, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.body.name, req.body.photo], function(err, result) {
    //   if (err) {
    //     throw err;
    //   }
    //   res.redirect("/");
    //   console.log(res);
    // });          
  });
};
