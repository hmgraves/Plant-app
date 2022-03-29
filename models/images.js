const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new mongoose.Schema({
	name: String,
	desc: String,
	image: {
		data: Buffer,
		contentType: String
	}
});

module.exports = mongoose.model('Plant', imageSchema);