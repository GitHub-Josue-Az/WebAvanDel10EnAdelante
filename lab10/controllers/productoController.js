
require('../models/categoriaModel');
let model=require('../models/productoModel');

module.exports= {

show: function (req,res) {
	
	model.find({}).populate({
		path:"categoria_id",
		select:"nombre"
		}).exec(function(err,data){
			if(err) throw err;
			else res.render('producto',{lista:data});
		});

	},

	detail: function (req,res) {
		let val_id = req.params.id
		model.findOne({_id:val_id},function(err,data){
			res.send(data);
		})
	},


	create: function (req,res) {
	
		let obj = new model;
		obj.categoria_id = req.body.categoria_id;
		obj.nombre = req.body.nombre;
		obj.descripcion = req.body.descripcion;
		obj.precio = req.body.precio,
		obj.save(function(err,newData){
			if(err){
				console.log(err);
				res.send(500);
			}else{
				res.send(newData);
			}
		});
	},

	update: function (req,res) {
		let val_id = req.body.id;
		let datos={
			categoria_id:req.body.categoria_id,
			nombre:req.body.nombre,
			descripcion:req.body.descripcion,
			precio:req.body.precio
		};
		model.updateOne({_id:val_id},datos,function(err,newData){
			if(err){
				console.log(err);
				res.status(500);
			}else{
				res.send(newData);
			}
		});
	},
	delete: function (req,res) {
	}
};