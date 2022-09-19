
const path = require('path');
const srcPath = path.join(__dirname, '../public');
const Network = require('../models/network.js');

const networksView = (req, res) => {
    if (req.session.loggedin) {

        const network1 = new Network('Network1', 'type1');
        const network2 = new Network('Network2', 'type2');
        const availableNetworks = [
            network1, network2
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
      
};

module.exports =  {
    networksView
};