
const path = require('path');
const srcPath = path.join(__dirname, '../public');


// login view handler 
const loginView = (req, res) => {
    res.sendFile(`${srcPath}/login.html`);

};

// home view handler 
const homeView = (req, res) => {
    res.render(`${srcPath}/views/index`)
};

module.exports =  {
    loginView,
    homeView
};