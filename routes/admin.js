const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-user', adminController.getAddUser);

// /admin/products => GET
router.get('/users', adminController.getUsers);

// /admin/add-product => POST
router.post('/add-user', adminController.postAddUser);

module.exports = router;