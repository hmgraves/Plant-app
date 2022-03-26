var express = require('express');
var router = express.Router();
const plantsCtrl = require('../controllers/plants')


router.get('/index', plantsCtrl.index)
router.get('/new', plantsCtrl.new)

module.exports = router;
