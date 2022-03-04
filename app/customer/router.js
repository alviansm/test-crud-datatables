var express = require('express');
var router = express.Router();
var customerController = require('./controller');

// index
router.post('/', customerController.create)
router.get('/', customerController.read);
router.delete('/:id', customerController.remove);
router.put('/:id', customerController.update);

module.exports = router;