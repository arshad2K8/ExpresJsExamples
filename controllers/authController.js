
const path = require('path');
const srcPath = path.join(__dirname, '../public');
const axios = require('axios');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));



// authenticateUser
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
        res.redirect('/networks');
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
};


module.exports =  {
    authenticateUser
};