const req = require('express/lib/request');
const res = require('express/lib/response');
mongoose = require('mongoose');
const Plant = require('../models/plant');

const index = (req, res) => {
	res.render('plants/index');
};

const newPlant = (req, res) => {
	res.render('plants/new');
};

module.exports = {
	index,
	new: newPlant
};