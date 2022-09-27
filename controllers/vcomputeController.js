 
const path = require('path');
const srcPath = path.join(__dirname, '../public');
const Compute = require('../models/compute.js');
const Tier = require('../models/tier.js');


const tier1 = new Tier();
tier1.buildStrategy = "buildStrategy";
tier1.os = "Mac OS";

const tier2 = new Tier();
tier2.buildStrategy = "buildStrategy2";
tier2.os = "Windows OS";

const compute = new Compute();
compute.appId = "1234";
compute.serviceACL = "some acl";
compute.tiers.push(tier1);
compute.tiers.push(tier2);

const vComputeView = (req, res) => {

    res.render(`${srcPath}/views/compute`, {
        compute: compute
    });
    
	res.end();
      
};

module.exports =  {
    vComputeView
};