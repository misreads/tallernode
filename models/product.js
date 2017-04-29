const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//var son globales, let son privadas, solo funcionan en el scope que se han instanciado
//const son globales, pero no modificables

let Product = new Schema({
	name: String,
	price: Number,
	img: String,
	description: String,
	date: Date

})

module.exports = mongoose.model('Product',Product); 
//(nombre para afuera del scope , nombre en el scope)