var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var News = require('../models/news');
var ExceptionService = require('../services/exceptionService')

//get all
router.get('/', function (req, res, next) {
    News.find()
        .exec(function (err, docs) {
            ExceptionService.MongoosHelper.HandleRequest(err, null, docs);
            
            res.status(200).json({
                Message: "Newses retreived properly.",
                Data: docs
            });
        });
});

//get by id
router.get('/:id', function (req, res, next) {
    var newsId = req.params.id;

    News.findById({ "_id": ObjectId(newsId) }, function (err, news) {
        ExceptionService.MongoosHelper.HandleRequest(err, null, news);

        res.status(200).json({
            Message: "News retreived properly.",
            Data: news
        });
    });
});

//create
router.post('/', function (req, res, next) {
    var news = new News({
        content: req.body.content
    });

    news.save(function (err, result) {
        ExceptionService.MongoosHelper.HandleRequest(err, null, result);

        res.status(201).json({
            Message: "Ok!",
            Data: true
        });
    });
});

//delete
router.put('/', function (req, res, next) {
    var newsId = req.body._id;
    News.remove({ "_id": ObjectId(newsId) }, function (err, message) {
        ExceptionService.MongoosHelper.HandleRequest(err, null, message);

        res.status(201).json({
            Message: "Ok!",
            Data: true
        });
    });
});

module.exports = router;
