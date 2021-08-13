var exoplanetCount = require("../ExoplanetCounter/countExoplanets");
var Exoplanet = require("../models/exoplanet");

exports.index = function(req, res) {
    Exoplanet.countDocuments({}, function(err, currentCount) {

        console.log(currentCount);
        // Modify this to change counter page
        res.render("counter", {
            title: "Realtime Exoplanet Counter",
            totalCount: currentCount,
            // How many have been discovered since site went live
            sinceCount: currentCount - 4438,
        });
    });
};