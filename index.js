const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

const axios = require('axios');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const cors = require('cors');
const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');
const srcPath = path.join(__dirname, 'public');
const loginData = require('./public/login.json');

app.set('view engine', 'ejs');

app.use(cors({
    origin: "*",
}));


// Route to Homepage
/*
app.get('/', (req, res) => {
    res.sendFile(`${srcPath}/index.html`);
});
*/

app.get('/', (req, res) => {
    res.render(`${srcPath}/views/index`)
})

// Route to Login Page
app.get('/login', (req, res) => {
    res.sendFile(`${srcPath}/login.html`);
});


// Route to Authenticate user
const LOGIN_URL = 'https://iaas-pp.schwab.com/api/auth/login';
app.post('/auth', function(req, res) {
	let username = req.body.username;
	let password = req.body.password;
    const userNamePassObj = {
        username: username,
        password: password,
    };
    console.log('userNamePassObj ', userNamePassObj);
	if (username && password) {
		
        const options = {
            method: "POST",
            body: JSON.stringify(userNamePassObj),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "",
              "Access-Control-Allow-Headers": "POST",
              "Access-Control-Allow-Credentials": true
            },
        };

        fetch(LOGIN_URL, options)
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            // if succesful authentication 
            req.session.loggedin = true;
			req.session.username = username;
				// Redirect to home page
			res.redirect('/networks');
        })
        .catch(error => {
            console.error(error);
            res.render(`${srcPath}/views/error`, {
                errorMsg: `unable to authenticate ${error.message}`
            });
        });

	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

  // Route to Login Page
app.get('/networks', (req, res) => {
    if (req.session.loggedin) {

        const availableNetworks = [
            {name: 'Network1', type: 'Type 1' },
            {name: 'Network2', type: 'Type 2' },
        ];

		res.render(`${srcPath}/views/networks`, {
            networks: availableNetworks
        });
	} else {
		// Not logged in
        res.render(`${srcPath}/views/error`, {
            errorMsg: 'Please login to view this page!'
        });
	}
	res.end();
      
});


const port = 3000 
app.listen(port, () => console.log(`This app is listening on port ${port}`));