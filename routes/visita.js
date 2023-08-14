const express = require('express');
const router = express.Router();
const visitaControlle = require('../controllers/visitaControlle');

router.post('/', visitaControlle.addVisita);
router.get('/', visitaControlle.getVisita);
router.get('/:id', visitaControlle.getOneVisita);
router.delete('/:id', visitaControlle.deleteVisita);
router.put('/:id', visitaControlle.updateVisita);



module.exports = router;