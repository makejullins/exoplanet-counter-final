"use strict";

var express = require("express");

var router = express.Router(); // Controllers

var exoController = require("../controllers/exoController");
/* GET home page. */


router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/counter", exoController.index);
router.get("/aboutme", function (req, res, next) {
  res.render("aboutme");
});
module.exports = router;