const express = require('express');
const router = express.Router();
const accessControlle = require('../controllers/accessControlle');

router.post('/', accessControlle.addaccess);
router.get('/', accessControlle.getaccess);
router.get('/:id', accessControlle.getOneAccess);
router.delete('/:id', accessControlle.deleteaccess);
router.put('/:id', accessControlle.updateaccess);

module.exports = router;