const req = require('express/lib/request');
const res = require('express/lib/response');
mongoose = require('mongoose');
const Plant = require('../models/plant');

const create = (req, res) => {
	console.log('test');
	Plant.findById(req.params.id, (err, plant) => {
		plant.comments.push(req.body);
		plant.save((err) => {
			res.redirect(`/plants/${plant._id}`);
		});
	});
};

module.exports = {
	create
};