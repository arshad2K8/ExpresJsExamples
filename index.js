const express = require('express');
require("dotenv").config();
const app = express();
const session = require('express-session');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

const cors = require('cors');
app.use(cors({
    origin: "*",
}));

//////////////////////////////////////////////////////////////
// Register all routes here

const loginRoutes = require('./routes/login');
const authRoutes = require('./routes/auth');
const networksRoutes = require('./routes/networks');
const vComputeRoutes = require('./routes/vComputeRoutes');
const placementRoutes = require('./routes/placementRoutes');


app.use('/auth', authRoutes);
app.use('/networks', networksRoutes);
app.use('/compute', vComputeRoutes);
app.use('/placement', placementRoutes);

app.use('/', loginRoutes);

//////////////////////////////////////////////////////////////
const port = 3000 
app.listen(port, () => console.log(`This app is listening on port ${port}`));