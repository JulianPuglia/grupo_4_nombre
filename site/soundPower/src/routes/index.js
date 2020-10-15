var express = require('express');
var router = express.Router();
let controller = require ('../controllers/indexController');

/* GET homepage. */
router.get('/', controller.index);

router.get('/faqs',controller.faqs);
module.exports = router;