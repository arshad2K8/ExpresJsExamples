
const path = require('path');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const srcPath = path.join(__dirname, '../public');
const axios = require('axios');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));



// authenticateUser
const LOGIN_URL = 'https://iaas-pp.schwab.com/api/auth/login';
const authenticateUser = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
    const userNamePassObj = {
        username: username,
        password: password,
    };
    console.log('userNamePassObj ', userNamePassObj);
	if (username && password) {
		
        /*
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
            const token = '';
            req.session.token = token;
            res.cookie('token', token, { httpOnly: true });
				// Redirect to home page
			res.redirect('/networks');
        })
        .catch(error => {
            console.error(error);
            res.render(`${srcPath}/views/error`, {
                errorMsg: `unable to authenticate ${error.message}`
            });
        }); */


      // if succesful authentication 
        req.session.loggedin = true;
        req.session.username = username;

        // we need to send the token back looks like as a cookie is a better option
        const token = 'SomeToken';
        // res.cookie('token', token, { httpOnly: true });
        req.session.token = token;
        res.redirect('/networks');
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
};

const verifyRequestor = (req, res) => {
    let userid = req.body.userid;
    let appId = req.body.appId; // where does this come far

    // make an AD call 
    // verify user and membershipts to specific appID

};


const verifyUserFromADAndCheckMembershipsByAppID = (user, appID) => {

};


module.exports =  {
    authenticateUser
};