// models/producto.js

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let dataSchema = new Schema({
	nombre: { type: String, required: true },
	descripcion: String,
	precio: { type: Number , required: true },
	//created_at: { type: Date, default: Date.now() }
});

prod_model = mongoose.model('', dataSchema,'producto');

module.exports = prod_model;