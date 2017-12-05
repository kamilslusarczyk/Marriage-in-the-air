var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');
var newsRoutes = require('./routes/news');
var adminRoutes = require('./routes/admin');
var marriageDetailsRoutes = require('./routes/marriage-details');
var statisticsRoutes = require('./routes/statistics');
var todosRoutes = require('./routes/todos');
var participantsRoutes = require('./routes/participants');
// require('./public/stylesheets/styles.less');

var app = express();
mongoose.connect('localhost:27017/marriage');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appRoutes);
app.use('/news', newsRoutes);
app.use('/admin', adminRoutes);
app.use('/details', marriageDetailsRoutes);
app.use('/stats', statisticsRoutes);
app.use('/todos', todosRoutes);
app.use('/participants', participantsRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});

module.exports = app;
