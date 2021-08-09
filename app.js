// Libs
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Dependencies
var persistent = require("./ExoplanetCounter/persistent");

var app = express();

// Set up mongoose
var mongoose = require('mongoose');
const MongoDB = 'mongodb+srv://exoplanetCounter:viF6j2viGokBC8ck@exoplanetnames.nu20q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection error'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

/* 
 * Does
 * wget call from NASA API
 * Uploads to MongoDB
 * Counts exoplanet documents uploaded
 * Stores number in a variable to be rendered
 */
persistent();

module.exports = app;