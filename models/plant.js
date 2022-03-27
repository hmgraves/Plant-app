const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = Schema({
	// photo: Image,
	name: String,
	water: String,
	light: String, 
	bought: Date,
	repot: Date
});

module.exports = mongoose.model('Plant', plantSchema);