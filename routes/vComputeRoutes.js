//js
const express = require('express');
const { vComputeView } = require('../controllers/vcomputeController');
const router = express.Router();
const verifyToken = require('../middleware/authorization');

router.get('/', verifyToken, vComputeView);


// at the end
module.exports = router;