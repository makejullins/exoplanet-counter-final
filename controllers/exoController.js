const exoplanetController = require("../models/exoplanets");

exports.index = function(req, res) {
    const currentCount = 4438;

    // Modify this to change counter page
    res.render("counter", {
        totalCount: currentCount
    });
};