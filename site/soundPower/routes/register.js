var express = require('express');
var router = express.Router();
var controller = require('../controllers/registerController');

/* POST register page */
router.get('/', controller.register);

module.exports = router;