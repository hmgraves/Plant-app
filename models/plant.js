const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commmentSchema = new Schema({
	content: {
		type: String,
		required: true
	}, 
}, {
	timestamps: true
});

const plantSchema = new Schema({
	// photo: Image,
	name: String,
	water: String,
	light: String, 
	bought: Date,
	repot: Date,
	comments: [commmentSchema]
});


module.exports = mongoose.model('Plant', plantSchema);