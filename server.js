// Dependencies =======================================================
var express = require("express");
var bodyParser = require("body-parser");
 
// Sets up the Express App ============================================
var app = express();
var port = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("app/public"));

// Routes =============================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "WebsitePass12!@",
//   database: "friends_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);

// });

// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM movies;", function(err, data) {
//     if (err) {
//       throw err;
//     }

//     res.render("home", { movies: data });

//   });
// });

// app.post("/", function(req, res) {
//   connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     res.redirect("/");
//   });
// });

// app.delete("/:id", function(req, res) {
//   connection.query("DELETE FROM movies WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     res.redirect("/");
//   });
// });

// app.put("/", function(req, res) {
//   connection.query("UPDATE movies SET movie = ? WHERE id = ?", [
//     req.body.movie, req.body.id
//   ], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     res.redirect("/");
//   });
// });