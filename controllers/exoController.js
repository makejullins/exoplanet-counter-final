var Exoplanet = require('../models/exoplanet');

exports.index = function(req, res) {
    Exoplanet.countDocuments({}, function(err, count) {
        console.log(count);
        // Modify this to change counter page
        res.render("counter", {
            totalCount: currentCount,
            // How many have been discovered since site went live
            sinceCount: currentCount - 4438
        });
    });
};