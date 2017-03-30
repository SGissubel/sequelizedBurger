var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var Models = require('./models');
var burgersController = require("./controllers/burgers_controller.js");
 
var app = express();

 app.use(express.static(process.cwd() + "/public"));
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(methodOverride("_method"));


 var exphbs = require("express-handlebars");

 app.engine("handlebars", exphbs({ defaultLayout: "main"}));
 
 app.set("view engine", "handlebars");

 app.use('/', burgersController);

var PORT = process.env.PORT || 3000;


 app.use("/burgers", burgersController);

Models.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`);
 	})
 });


