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