//js
const express = require('express');
const { authenticateUser } = require('../controllers/authController');
const router = express.Router();

// authenticate user route
router.post('/', authenticateUser);

module.exports = router;