// Libs
const mongoose = require("mongoose");

// Dependencies
const getExoData = require("./getExoData");
const uploadToMongo = require("./uploadToMongo");

// Models
const Exoplanet = require("../models/exoplanet");

//console.log("Connecting to mongoose");


mongoose.Promise = global.Promise;

var exoplanetCount = 0;

module.exports.exoplanetCount = exoplanetCount;

module.exports.countExoplanets = function() {
    console.log(exoplanetCount);
    getExoData();

    setTimeout(() => {
        uploadToMongo();
    }, 5000);

    Exoplanet.countDocuments({}, function(err, count) {
        if (err) throw err;
        exoplanetCount = count;
        console.log(exoplanetCount);
    });
}