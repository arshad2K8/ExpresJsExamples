//js
const express = require('express');
const { authenticateUser } = require('../controllers/authController');
const router = express.Router();
const logger = require('../middleware/logger');

// authenticate user route
router.post('/', logger, authenticateUser);

module.exports = router;