const req = require('express/lib/request');
const res = require('express/lib/response');
mongoose = require('mongoose');
const Plant = require('../models/plant');

const index = (req, res) => {
	Plant.find({}, (err, plants) => {
		res.render('plants/index', { plants });
	});
};

const show = (req, res) => {
	Plant.findById(req.params.id, (err, plant) => {
		res.render('plants/show', {plant});
	});
};

const newPlant = (req, res) => {
	console.log('new');
	res.render('plants/new');
};

const create = (req, res) => {
	console.log('this works')
	const plant = new Plant(req.body);
	plant.save((err) => {
		if (err) return res.render('plants/new');
		console.log(plant);
		res.redirect('plants/index');
	})
};

const deletePlant = (req, res, next) => {
	console.log('delete called')
	Plant.deleteOne({'plant._id': req.params.id})
	.then((plant) => {
		res.redirect('../plants/index')
		console.log('delete')
	})
}

module.exports = {
	index,
	show,
	new: newPlant,
	create,
	delete: deletePlant
};