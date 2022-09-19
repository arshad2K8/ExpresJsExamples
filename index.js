const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

const cors = require('cors');
const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use(cors({
    origin: "*",
}));

//////////////////////////////////////////////////////////////
// Register all routes here

const loginRoutes = require('./routes/login');
const authRoutes = require('./routes/auth');
const networksRoutes = require('./routes/networks');

app.use('/auth', authRoutes);
app.use('/networks', networksRoutes);
app.use('/', loginRoutes);

//////////////////////////////////////////////////////////////
const port = 3000 
app.listen(port, () => console.log(`This app is listening on port ${port}`));