
const path = require('path');
const srcPath = path.join(__dirname, '../public');
const Compute = require('../models/compute.js');
const Tier = require('../models/tier.js');

const vComputeView = (req, res) => {
    if (req.session.loggedin) {

        const compute = new Compute('Network1', 'type1');
        
		res.render(`${srcPath}/views/compute`, {
            compute: compute
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
    vComputeView
};