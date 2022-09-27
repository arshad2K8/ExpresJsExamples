
const path = require('path');
const srcPath = path.join(__dirname, '../public');
const Network = require('../models/network.js');

const network1 = new Network('Network1', 'type1');
const network2 = new Network('Network2', 'type2');
const availableNetworks = [
        network1, network2
];

const networksView = (req, res) => {
    
	res.render(`${srcPath}/views/networks`, {
        networks: availableNetworks
    });
	res.end();
      
};

module.exports =  {
    networksView
};