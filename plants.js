mongoose = require('mongoose');
const multer = require('multer');
const fs  = require('fs')
var path = require('path');
const Plant = require('./models/plant');

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
	var obj = {
        name: req.body.name,
        water: req.body.water,
        light: req.body.light,
        bought: req.body.bought,
        repot: req.body.repot,
		data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/jpg'
    }
	Plant.create(obj, (err, plants) => {
		if (err) {
			return res.render('plants/new');
		} else {
			plants.save();
			res.redirect('plants/index');
		}
	});
};

const update = (req, res) => {
	console.log('update')
	const id = req.params.id;
	const repot = req.body.repot;
	Plant.findById(req.params.id, (err, repot) => {
		if (err) { console.log(err) }
		Object.assign(repot, req.body)
		repot.save(err => {
			res.redirect('/plants/' + id);
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