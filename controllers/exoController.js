const exoplanetController = require('../models/exoplanets');

exports.index = function(req, res) {
    // 
    res.render('counter', { count: 4438 });
}