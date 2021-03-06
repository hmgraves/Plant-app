const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/plants/:id/comments', commentsCtrl.create);

module.exports = router;