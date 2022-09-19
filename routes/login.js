//js
const express = require('express');
const {loginView, homeView } = require('../controllers/loginController');
const router = express.Router();

// register all login and Home page Routes here routes here 
router.get('/login', loginView);
router.get('/', homeView);


// at the end
module.exports = router;