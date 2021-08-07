var mongoose = require('mongoose');
const { Schema } = mongoose;

const exoSchema = new Schema({
    pl_name: String
});

module.exports = mongoose.model('Exoplanet', exoSchema);