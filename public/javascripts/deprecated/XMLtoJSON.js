// Interprets xml files and outputs into json
// This was because of a bug with the database that wouldn't format the data into JSON

// Dependencies
const fs = require("fs");
const xml2js = require("xml2js");

exports.convertToJson = function () {
  // Use fs.readFile() method to read the file
  console.log("Started");
  fs.readFile(".\\ExoplanetList\\ExoplanetXML.xml","utf8",function (err1, xmlData) {
      // Display the file content
      // Error handling
      console.log("File read");
      if (err1) throw err1;

      // Parse xml

      xml2js.parseString(xmlData, function (err2, xmlResult) {
        if (err2) throw err2;

        // Turns xmlResult into JSON format
        var jsonResult = JSON.stringify(xmlResult);

        // Mongo doesn't like the $ denoting metadata in the VOTable tag
        var finalJson = jsonResult.replace("$", "metadata");

        // Writes jsonResult to named file
        fs.writeFile("testJSON.json", finalJson, function (err3) {
          if (err3) throw err3;
        });
      });
    }
  );
};
