//js
const express = require('express');
const { networksView } = require('../controllers/networksController');
const router = express.Router();
const verifyToken = require('../middleware/authorization');

router.get('/', verifyToken, networksView);


// at the end
module.exports = router;