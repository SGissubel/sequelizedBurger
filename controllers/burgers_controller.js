//controller files are plural
var express = require("express");
// Import the model (.js) to use its database functions.
var router = express.Router();
var burger = require('../models/burger.js');

//*******************************************************************************************

router.get('/', function(req, res) {
	burger.all(function(data){
		var brgObj = {burgers: data};
		console.log(brgObj);
		// res.json({brgObj});
		res.render('index', brgObj);
	});	
});

router.get("/new", function(req, res) {
	res.render('burgers/new');
});

router.post("/create", function(req, res){
	burger.create([
		"burger_name"
		], [req.body.burger_name],
		function(){
		res.redirect('/');
	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	
	burger.update({
		devoured: req.body.devour
	}, condition, function(){
		res.redirect('/');
	});
});


module.exports = router;