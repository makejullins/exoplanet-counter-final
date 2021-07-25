var express = require('express');
var router = express.Router

var exoController = require('../controllers/exoController');

router.get('/', exoController.index);