var exoplanetCount = require('../ExoplanetCounter/countExoplanets');

exports.index = function(req, res) {
    const currentCount = exoplanetCount.exoplanetCount;
    console.log(currentCount);
    // Modify this to change counter page
    res.render("counter", {
        totalCount: currentCount,
        // How many have been discovered since site went live
        sinceCount: currentCount - 4438,
    });
};