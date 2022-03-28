var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/auth');
const plantsCtrl = require('../controllers/plants');


router.get('/index', isLoggedIn, plantsCtrl.index);
router.get('/new', isLoggedIn, plantsCtrl.new);
router.get('/:id', isLoggedIn, plantsCtrl.show);
router.post('/', plantsCtrl.create);
router.delete('/:id', plantsCtrl.delete);

module.exports = router;
