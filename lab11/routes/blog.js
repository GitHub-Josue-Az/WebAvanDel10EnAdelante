//producto.js
var express = require('express');
var controller = require('../controllers/blogController');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('blog',function(err,html){
					if(err) throw err;
					res.render('layouts/bl',{
				      seccion: html
				    });
				});
});


router.get('/news', function(req, res, next) {
  controller.show(req,res);
});

router.get('/news/detail', function(req, res, next) {
  controller.detail(req,res);
});

router.post('/comment/create', function(req, res, next) {
  controller.create(req,res);
});



module.exports = router;