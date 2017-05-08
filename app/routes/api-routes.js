// Requiring our models
var userData = require("../models/addUser.js");

// Routes =======================================================
module.exports = function(app) {

  // Display friends list
  app.get("/api/friends", function(req, res) {   
    userData.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a user
  app.post("/api/new", function(req, res) {

    console.log("User Data:");
    console.log(req.body);

    userData.create({
      name: req.body.name,
      photo_link: req.body.photo_link,
      q1: req.body.scores[0],
      q2: req.body.scores[1],
      q3: req.body.scores[2],
      q4: req.body.scores[3],
      q5: req.body.scores[4],
      q6: req.body.scores[5],
      q7: req.body.scores[6],
      q8: req.body.scores[7],
      q9: req.body.scores[8],
      q10: req.body.scores[9]
    }).then(function(results) {
      res.end();
    });

  });

};