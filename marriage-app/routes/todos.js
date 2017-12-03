var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
var ExceptionService = require('../services/exceptionService');

router.post('/', function (req, res, next) {
    Todo.insert(req.body, function (err, docs) {
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, docs, res);

        if (error)
            return error;

        res.status(201).json({
            Message: "To do saved!",
            Data: true
        });
    });

});

router.get('/', function (req, res, next) {
    Todo.find()
        .exec(function (err, docs) {
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, docs, res);

            if (error)
                return error;

            res.status(200).json({
                Message: "To do's retreived properly.",
                Data: docs
            });
        });
});

module.exports = router;
