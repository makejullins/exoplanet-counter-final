// Libs
const fs = require("fs");

// Dependencies
const Exoplanet = require("../models/exoplanet.js");
const dataPath = __dirname + "/exoplanetJSON.json";

const mongoString =
    "mongodb+srv://exoplanetCounter:viF6j2viGokBC8ck@exoplanetnames.nu20q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = function() {
    // Signals start of function
    //console.log("Starting upload");

    // Reads data from JSON
    //console.log("Reading data");
    const dataString = fs.readFileSync(dataPath, "utf8");
    const parsedData = JSON.parse(dataString);
    //console.log("Done reading data");

    // Deletes all prior exoplanet data
    Exoplanet.deleteMany({})
        .then(function() {
            //console.log("Old exoplanets are deleted");
        })
        .catch(function(err) {
            console.log(err);
        });

    // Inserts parsed exoplanet data
    Exoplanet.insertMany(parsedData)
        .then(function() {
            //console.log("Exoplanet data inserted");
        })
        .catch(function(error) {
            console.log(error);
        });
};