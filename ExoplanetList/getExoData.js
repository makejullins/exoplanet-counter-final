// Libs
const wget = require("wget-improved");
const fs = require("fs");
const async = require("async");

// Dependencies
// const uploadToMongo = require('./uploadToMongo.js');

//Only pulls pl_name attrivute, can be configured with config
// https://exoplanetarchive.ipac.caltech.edu/docs/program_interfaces.html

module.exports = function() {
    // wget argument
    const src =
        "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name+from+pscomppars&format=json";
    const outputFileString = "../ExoplanetList/ExoplanetJSON.json";

    // If file exists, delete then
    console.log("Checking for file");
    if (fs.existsSync(outputFileString)) {
        console.log("File exists");
        fs.unlinkSync(outputFileString);
        console.log("File deleted");
    }

    // Wget call, then waits for 5 seconds to make sure 
    // that the data is downloaded.
    const WAIT_TIME = 5000;

    console.log("Starting download, this might take a while");
    wget.download(src, outputFileString);

    setTimeout(() => {
        console.log("Upload to mongo");
        // upload to Mongo.
    }, WAIT_TIME);
};