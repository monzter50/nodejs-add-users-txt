const path = require('path');

const express = require('express');

const userController = require('../controllers/users-list');

const router = express.Router();
router.get('/',userController.getUsers);
module.exports = router;