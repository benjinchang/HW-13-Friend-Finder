// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelizeInfo = require("../config/connection.js");

var userData = sequelizeInfo.define("user", {
  name: {
    type: Sequelize.STRING
  },
  photo_link: {
    type: Sequelize.STRING
  },
  q1: {
    type: Sequelize.INTEGER
  },
  q2: {
    type: Sequelize.INTEGER
  },
  q3: {
    type: Sequelize.INTEGER
  },
  q4: {
    type: Sequelize.INTEGER
  },
  q5: {
    type: Sequelize.INTEGER
  },
  q6: {
    type: Sequelize.INTEGER
  },
  q7: {
    type: Sequelize.INTEGER
  },
  q8: {
    type: Sequelize.INTEGER
  },
  q9: {
    type: Sequelize.INTEGER
  },
  q10: {
    type: Sequelize.INTEGER
  }
});

userData.sync();

module.exports = userData;

// connection.connect(function(err) {
//   if (err) throw err;
//   friendsList();
// });

// var tableArray = [];

// function friendsList () {
//   console.log("");  
//   connection.query("SELECT * FROM friendslist", function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log("Name: " + res[i].name);
//       console.log("Photo Link: " + res[i].photo_link);
//       console.log("User Answers: " + res[i].q1 + ", " + res[i].q2 + ", " + res[i].q3 + ", " + res[i].q4 + ", " + res[i].q5 + ", " + res[i].q6 + ", " + res[i].q7 + ", " + res[i].q8 + ", " + res[i].q9 + ", " + res[i].q10);
//       console.log("");
//       tableArray.push({
//         name: res[i].name,
//         photo: res[i].photo_link,
//         scores: [res[i].q1,res[i].q2,res[i].q3,res[i].q4,res[i].q5,res[i].q6,res[i].q7,res[i].q8,res[i].q9,res[i].q10],
//       });
//     }

//   });
// }