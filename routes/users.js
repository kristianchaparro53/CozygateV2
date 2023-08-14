const express = require('express');
const router = express.Router();
const userControler = require('../controllers/userControler');

router.post('/', userControler.addUser);
router.get('/', userControler.getUsers);
router.get('/:id', userControler.getOne);
router.delete('/:id', userControler.deleteUser);
router.put('/:id', userControler.updateUser);



module.exports = router;