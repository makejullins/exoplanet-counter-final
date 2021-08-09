var express = require("express");
var router = express.Router();

// Controllers
const exoController = require("../controllers/exoController");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Jake Mullins' Portfolio" });
});

router.get("/counter", exoController.index);

router.get("/aboutme", function(req, res, next) {
    res.render("aboutme");
});

module.exports = router;