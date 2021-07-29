// Libs
const wget = require("wget-improved");
const fs = require("fs");
const async = require("async");

// Dependencies
const uploadToMongo = require("./uploadToMongo.js");

// Only pulling planet name, can be configured to pull whatever with 
// https://exoplanetarchive.ipac.caltech.edu/docs/program_interfaces.html

const src =
    "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name+from+pscomppars&format=json";
const outputFile = "ExoplanetList\\ExoplanetJSON.json";

// If ENOENT error because wget takes too long, just
// Make number higher
const WAIT_TIME = 5000;

// Uses wget to pull XML table from caltech NASA API
function wgetExo() {

    console.log("Checking for file");
    if (fs.existsSync(outputFile)) {
        fs.unlinkSync(outputFile);
        console.log("Unlinked");
    }
    console.log("Starting download, this might take a minute");
    wget.download(src, outputFile);

    setTimeout(() => {
        console.log("Upload to mongo");
        uploadToMongo.uploadData();
    }, WAIT_TIME);
}

// Entire process is long and complex and doesn't
// Lend itself to a snappy title sooooo
module.exports.databaseStuff = wgetExo;
module.exports.exoplanetCount = uploadToMongo.exoplanetCount;