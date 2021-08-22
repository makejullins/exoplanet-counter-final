const { DateTime } = require("luxon");
const fs = require('fs');

var original = DateTime.fromISO('2021-08-04T18:30');
var current = DateTime.now();

module.exports.timeObject = current.diff(original, ['years', 'months', 'days']).toObject();