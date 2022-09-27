//js
const express = require('express');
const { getZone , getDomain} = require('../controllers/placementController');
const router = express.Router();
const verifyToken = require('../middleware/authorization');

router.get('/zone', verifyToken, getZone);
router.get('/domains', verifyToken, getDomain);


// at the end
module.exports = router;