var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var News = require('../models/news');
var ExceptionService = require('../services/exceptionService')

//get all
router.get('/', function (req, res, next) {
    News.find()
        .exec(function (err, docs) {
            if (err) {
                return res.status(500).json({
                    title: "An error",
                    error: err
                })
            }

            res.status(200).json({
                message: "Newses retreived properly.",
                obj: docs
            });
        });
});

//get by id
router.get('/:id', function (req, res, next) {
    var newsId = req.params.id;

    News.findById({ "_id": ObjectId(newsId) }, function (err, news) {
        ExceptionService.MongoosHelper.HandleRequest(err, null, news);

        res.status(200).json({
            message: "News retreived properly.",
            obj: news
        });
    });
});

//create
router.post('/', function (req, res, next) {
    var news = new News({
        content: req.body.content
    });
    news.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: "An error",
                error: err
            })
        }

        res.status(201).json({
            message: "Ok!",
            obj: true
        });
    });
});

//delete
router.put('/', function (req, res, next) {
    var newsId = req.body._id;
    News.remove({ "_id": ObjectId(newsId) }, function (err, message) {
        ExceptionService.MongoosHelper.HandleRequest(err, null, newsId);

        return true;
    });
});

module.exports = router;
