var express = require('express');
var router = express.Router();
var StatisticsEntry = require('../models/statisticsEntry');
var ExceptionService = require('../services/exceptionService');

router.post('/', function (req, res, next) {
    StatisticsEntry.insertMany(req.body, function (err, docs) {
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, docs, res);

        if (error)
            return error;

        res.status(201).json({
            Message: "Statistics saved!",
            Data: true
        });
    });

});

module.exports = router;
