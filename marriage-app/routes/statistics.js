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
            message: "Statistics saved!",
            data: true
        });
    });

});

router.get('/', function (req, res, next) {
    StatisticsEntry.find()
        .exec(function (err, docs) {
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, docs, res);

            if (error)
                return error;

            res.status(200).json({
                message: "Statistics retreived properly.",
                data: docs
            });
        });
});

module.exports = router;
