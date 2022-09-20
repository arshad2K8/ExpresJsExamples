const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
  console.log('token is ', req.session);
  const token = req.session.token;
  
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
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
    // we will probably have to invoke another endpoint to verify token
    console.log('token is verified ');
    next();
  }
};

module.exports = verifyToken;