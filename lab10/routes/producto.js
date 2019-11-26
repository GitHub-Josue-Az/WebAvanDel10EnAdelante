var express = require('express');
var controller = require('../controllers/productoController')
var router = express.Router();

/* GET users listing. */
router.get('/detail/:id', function(req, res, next) {
  controller.detail(req,res);
});

router.get('/show', function(req, res, next) {
  controller.show(req,res);
});

router.get('/create', function(req, res, next) {
  res.render('create.ejs');
});

router.post('/create', function(req, res, next) {
  controller.create(req,res);
});

router.put('/update', function(req, res, next) {
  controller.update(req,res);
});

router.delete('/delete', function(req, res, next) {
  res.send('delete');
});

module.exports = router;