// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// BodyParser to interpret data.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});