// Dependencies
const wgetExoplanet = require("./wgetExoplanet.js");
const exoplanetCount = 0;

exports.countExoplanets = function() {
    // Calls wgetExoplanet which calls uploadToMongo
    wgetExoplanet();
};