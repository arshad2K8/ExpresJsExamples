const jwt = require('jsonwebtoken');
const path = require('path');
const srcPath = path.join(__dirname, '../public');



const verifyToken = (req, res, next) => {
  console.log('token is ', req.session.token);
  const token = req.session.token;
  
  if (!token) {
    //res.status(401).send('Unauthorized: No token provided');
    res.render(`${srcPath}/views/error`, {
      errorMsg: 'Please login to view this page!'
  });

  } else {

    /*
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
    */
    // first parse the token 
    // const parsedToken = parseJwt(token);
    // check if the username is not blank
    // check if the token has not expired

    // we will probably have to invoke another endpoint to verify token
    console.log('received token ', token);
    console.log('token is verified ');
    next();
  }
};



const parseJwt = (token) =>  {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
};

module.exports = verifyToken;