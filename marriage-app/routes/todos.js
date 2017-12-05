var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
var ExceptionService = require('../services/exceptionService');
var ObjectId = require('mongodb').ObjectID;

router.post('/', function (req, res, next) {
    var todo = new Todo(req.body);
    todo.save(function (err, result) {
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, result, res);

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

router.put('/', function (req, res, next) {
    var todoId = req.body._id;
    if (req.body.toDelete) {
        Todo.findByIdAndRemove({ "_id": ObjectId(todoId) }, function (err) {
            // var error = ExceptionService.MongoosHelper.HandleRequest(err, null, todo, res);
    
            // if (error)
            //     return error;
    
            res.status(201).json({
                Message: "Ok!",
                Data: true
            });
        });
    }
    else {
        Todo.update({ "_id": ObjectId(todoId) }, req.body, function (err, todo) {
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, todo, res);
    
            if (error)
                return error;
    
            res.status(201).json({
                Message: "Ok!",
                Data: true
            });
        });
    }
});

module.exports = router;