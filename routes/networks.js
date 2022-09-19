//js
const express = require('express');
const { networksView } = require('../controllers/networksController');
const router = express.Router();

router.get('/', networksView);


// at the end
module.exports = router;