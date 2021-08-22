var express = require("express");
var router = express.Router();

// Controllers
const exoController = require("../controllers/exoController");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index");
});

router.get("/counter", exoController.index);

router.get("/aboutme", function(req, res, next) {
    res.render("aboutme", { title: "About Me" });
});

router.get("/exoplanetdef", function(req, res, next) {
    res.render("exoplanetdef", { title: "About Exoplanets" })
});

router.get("/aboutproject", function(req, res, next) {
    res.render("aboutproject", {
        title: "About This Project"
    });
})

module.exports = router;