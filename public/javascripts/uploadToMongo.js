const mongoose = require("mongoose");
const fs = require("fs");
const async = require("async");

const dataPath = "./ExoplanetList/ExoplanetJSON.json";
console.log(dataPath);

const MONGO_URI =
  "mongodb+srv://exoplanetCounter:9Y6gdCsMR8AHXRir@exoplanetnames.nu20q.mongodb.net/pl_name?retryWrites=true&w=majority";

const exoSchema = new mongoose.Schema({
  pl_name: String,
});

var Exoplanet = mongoose.model("Exoplanet", exoSchema);

function uploadData() {
  // Gets from wget, made the execution of this function dependent on
  // Completion of wget
  console.log("Connecting to mongoose");
  mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function () {
      console.log("Connected to Mongoose");
      console.log(mongoose.connection.db.databaseName);
      fs.readFile(dataPath, function (err, data) {
        if (err) throw err;

        const exoString = data.toString();
        const exoJSON = JSON.parse(exoString);

        // Deletes all Exoplanets, then populates with pl_name from JSON
        // Counts entries
        Exoplanet.deleteMany({}, function () {
          console.log("Old data removed");
          Exoplanet.insertMany(exoJSON);
          console.log("New data updated");
        });
      });
    }
  );

  // Counts exoplanets
  Exoplanet.countDocuments({}, function (err2, count) {
    if (err2) throw err2;

    console.log(count);

    module.exports.exoplanetCount = count;
  });
}

module.exports.uploadData = uploadData;
