var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/auth');
const plantsCtrl = require('../plants');

var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({ storage: storage });

router.get('/index', isLoggedIn, plantsCtrl.index);
router.get('/new', isLoggedIn, plantsCtrl.new);
router.get('/:id', isLoggedIn, plantsCtrl.show);
router.post('/', upload.single('img'), plantsCtrl.create);
router.post('/:id', plantsCtrl.update);
router.delete('/:id', isLoggedIn, plantsCtrl.delete);


module.exports = router;
