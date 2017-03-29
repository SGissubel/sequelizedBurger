var models  = require('../models');
var express = require('express');
var router  = express.Router();



router.get('/', function(req, res) {
	models.Burger.findAll({
	}).then(function(burger){
		res.render('index', {
			burgers: burger
		})
	});
  
});
router.post('/create', function (req, res) {
  models.Burger.create({
    burger_name: req.body.burger_name,
  }).then(function(burger) {
  	res.redirect('/')
  });
});
router.put('/update/:id', function (req, res) {
  models.Burger.update({
    devoured: true
  },
  {
	where: { id : req.params.id}
  }).then(function() {
  	res.redirect('/')
  });
});
module.exports = router;