// productoContoller.js
let model = require("../models/productoModel");

module.exports = {
	show : function(req,res){
		model.find({},function(err,items){
			if(!err){
				res.json(items);
			}else{
				console.log(err);
			}
		});
	},
	create : function(req,res){
		res.send("create");
	},
	update : function(req,res){
		res.send("update");
	},
	delete : function(req,res){
		res.send("delete");
	}
};