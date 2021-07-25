var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/counter", function(req, res, next) {
    res.render("counter", { count: 4438 });
});

module.exports = router;