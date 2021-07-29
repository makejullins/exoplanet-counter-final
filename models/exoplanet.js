var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var exoSchema = new Schema({
    pl_name: { type: String, require: true }
});

module.exports = mongoose.model('exoplanets')