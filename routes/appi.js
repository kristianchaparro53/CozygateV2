const express = require('express');
const router = express.Router();
const appi = require('../controllers/appi');

router.post('/', appi.addaccess);
router.get('/', appi.getaccess);


module.exports = router;