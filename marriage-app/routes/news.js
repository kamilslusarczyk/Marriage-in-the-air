var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var News = require('../models/news');
var ExceptionService = require('../services/exceptionService')

router.get('/', function (req, res, next) {
    News.find()
    .exec(function(err, docs) {
        debugger;
        if(err) {
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

router.get('/:id', function (req, res, next) {
    var newsId = req.params.id;

    News.findById({"_id" : ObjectId(newsId)}, function(err, news){
        if(err) {
            return res.status(500).json({
                title: "An error",
                error: err
            })
        }

        if(!news) {
            return res.status(500).json({
                title: "Not found",
                error: {
                    message: "NOT LOLOLO"
                }
            })
        }

        news.remove(function(err, result) {
            if(err) {
                return res.status(500).json({
                    title: "An error",
                    error: err
                })
            }
    
            res.status(200).json({
                message: "Updated",
                obj: result
            });
        });

    });
});

router.post('/', function (req, res, next) {
    var news = new News({
        content: req.body.content
    });

    news.save(function(err, result){
        if(err) {
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

router.put('/', function (req, res, next) {
    var newsToDeleteId = req.body;
    News.findById(req.params.id, function(err, message){
        if(err) {
            return res.status(500).json({
                title: "An error",
                error: err
            })
        }

        if(!message) {
            return res.status(500).json({
                title: "Not found",
                error: {
                    message: "NOT LOLOLO"
                }
            })
        }

        message.remove(function(err, result) {
            if(err) {
                return res.status(500).json({
                    title: "An error",
                    error: err
                })
            }
    
            res.status(200).json({
                message: "Updated",
                obj: result
            });
        });

    });
});

module.exports = router;
