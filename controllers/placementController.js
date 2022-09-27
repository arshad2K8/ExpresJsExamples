const Zone = require('../models/zone');



const appZone = {zoneId: 'App'};
const dbZone = {zoneId: 'Db'};
const webZone = {zoneId: 'Web'};
const mgmtZone = {zoneId: 'Mgmt'};


let zones = [appZone, dbZone, webZone, mgmtZone];
let domains = ['Secured'];

const getZone = (req, res) => {
    res.send(zones);
};

const getDomain = (req, res) => {
    res.send(domains);
};



module.exports = {
    getZone,
    getDomain
}