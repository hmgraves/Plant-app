const req = require('express/lib/request');
const res = require('express/lib/response');
mongoose = require('mongoose');
const Plant = require('../models/plant');

const index = (req, res) => {
	Plant.find({}, (err, plants) => {
		res.render('plants/index', { plants });
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

module.exports = {
	index,
	new: newPlant,
	create
};