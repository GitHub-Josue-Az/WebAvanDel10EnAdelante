var express = require('express');
var router = express.Router();
let controller = require("../controllers/productoController");

//localhost:3000/producto/
router.get('/', function(req, res, next) {
  controller.show(req,res);
});
//localhost:3000/producto/
router.post('/', function(req, res, next) {
  res.send('crear');
});
//localhost:3000/producto/update
router.post('/update', function(req, res, next) {
  res.send('actualizar');
});
//localhost:3000/producto/delete
router.post('/delete', function(req, res, next) {
  res.send('eliminar');
});

module.exports = router;