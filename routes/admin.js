const express = require('express');
const router = express.Router();
const adminControlle = require('../controllers/adminControlle');

router.post('/', adminControlle.addAdmin);
router.get('/', adminControlle.getAdmin);
router.get('/:id', adminControlle.getOneAdmin);
router.delete('/:id',adminControlle.deleteAdmin);
router.put('/:id', adminControlle.updateAdmin);

module.exports = router;