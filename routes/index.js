var express = require("express");
var router = express.Router();

// Controllers
const exoController = require("../controllers/exoController");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/counter", exoController.index);

module.exports = router;