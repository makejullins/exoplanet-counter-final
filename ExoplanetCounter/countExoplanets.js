// Libs
const mongoose = require("mongoose");

// Dependencies
const getExoData = require("./getExoData");
const uploadToMongo = require("./uploadToMongo");

// Models
const Exoplanet = require("../models/exoplanet");

const mongoString =
    "mongodb+srv://exoplanetCounter:viF6j2viGokBC8ck@exoplanetnames.nu20q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//console.log("Connecting to mongoose");

mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

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