// Dependencies =================================================
var userData = require("../models/friends");

// Routes =======================================================
module.exports = function(app) {


function friendsList () {
  console.log("");  
  connection.query("SELECT * FROM friendslist", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log("Name: " + res[i].name);
      console.log("Photo Link: " + res[i].photo_link);
      console.log("User Answers: " + res[i].q1 + ", " + res[i].q2 + ", " + res[i].q3 + ", " + res[i].q4 + ", " + res[i].q5 + ", " + res[i].q6 + ", " + res[i].q7 + ", " + res[i].q8 + ", " + res[i].q9 + ", " + res[i].q10);
      console.log("");
      tableArray.push({
        name: res[i].name,
        photo: res[i].photo_link,
        scores: [res[i].q1,res[i].q2,res[i].q3,res[i].q4,res[i].q5,res[i].q6,res[i].q7,res[i].q8,res[i].q9,res[i].q10],
      });
    }

  });
}



  // Get all chirps
  app.get("/api/friends", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    userData.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
      friendsList();
    });

  });

  // Add a user
  app.post("/api/new", function(req, res) {

    console.log("User Data:");
    console.log(req.body);

    userData.create({
      name: req.body.name,
      photo_link: req.body.photo_link,
      q1: req.body.q1,
      q2: req.body.q2,
      q3: req.body.q3,
      q4: req.body.q4,
      q5: req.body.q5,
      q6: req.body.q6,
      q7: req.body.q7,
      q8: req.body.q8,
      q9: req.body.q9,
      q10: req.body.q10
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};
