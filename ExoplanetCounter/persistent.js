// dependencies
const countExoplanets = require('./countExoplanets');

const INTERVAL_TIME = 5 * 60 * 1000;

module.exports = function() {

    countExoplanets.countExoplanets();

    setInterval(() => {
        countExoplanets.countExoplanets();
    }, INTERVAL_TIME);
};