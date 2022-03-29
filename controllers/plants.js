const req = require('express/lib/request');
const res = require('express/lib/response');
const plant = require('../models/plant');
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
	});
};

const update = (req, res) => {
	const id = req.params.id;
	const repot = req.body.repot;
	Plant.findById(req.params.id, (err, repot) => {
		if (err) { console.log(err) }
		Object.assign(repot, req.body)
		repot.save(err => {
			res.redirect('/plants/' + id);
			console.log(repot);
		})
	})
};

const deletePlant = (req, res, next) => {
	Plant.findOneAndRemove({_id: req.params.id}, (err, plant) => {
		if (err) {
			res.redirect('/plant/' + id)
		}
		res.redirect('/plants/index');
	})
}; 

module.exports = {
	index,
	show,
	new: newPlant,
	create,
	update,
	delete: deletePlant
};