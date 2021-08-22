var exoplanetCount = require("../ExoplanetCounter/countExoplanets");
var Exoplanet = require("../models/exoplanet");
var timeElapsed = require("../ExoplanetCounter/getTimeElapsed");

exports.index = function(req, res) {
    Exoplanet.countDocuments({}, function(err, currentCount) {

        const timeObj = timeElapsed;
        console.log(timeObj.timeObject);

        console.log(currentCount);
        // Modify this to change counter page
        res.render("counter", {
            title: "Realtime Exoplanet Counter",
            totalCount: currentCount,
            years: Math.floor(timeObj.timeObject.years),
            months: Math.floor(timeObj.timeObject.months),
            days: Math.floor(timeObj.timeObject.days)
        });
    });
};