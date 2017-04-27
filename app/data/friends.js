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

connection.connect(function(err) {
  if (err) throw err;
  friendsList();
});

var tableArray = [];

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

module.exports = tableArray;