let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var modelSchema = new Schema({

	categoria_id : { 
		type: Schema.ObjectId,
		ref: 'categoria',
		required: true
	},
	nombre : {type: String, required: true},
	descripcion: String,
	precio: {type: String, required: true}
});

let model = mongoose.model('producto',modelSchema,'producto');
module.exports = model;




