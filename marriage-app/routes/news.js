var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var News = require('../models/news');
var ExceptionService = require('../services/exceptionService')
var jwt = require('jsonwebtoken');
var User = require('../models/user');

//get all
router.get('/', function (req, res, next) {
    News.find()
        .populate('user', 'firstName')
        .exec(function (err, docs) {
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, docs, res);

            if (error)
                return error;

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
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, news, res);

        if (error)
            return error;

        res.status(200).json({
            Message: "News retreived properly.",
            Data: news
        });
    });
});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: "NOT PERMITTED",
                error: err
            });

            next();
        }
    });
});

//create
router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, user) {
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, user, res);

        if (error)
            return error;

        var news = new News({
            content: req.body.content,
            user: user
        });
        news.save(function (err, result) {
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, result, res);

            if (error)
                return error;

            user.newses.push(result);
            user.save();

            res.status(201).json({
                Message: "Ok!",
                Data: true
            });
        });
    })

});

//delete
router.put('/', function (req, res, next) {
    var newsId = req.body._id;
    News.remove({ "_id": ObjectId(newsId) }, function (err, news) {
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, news, res);

        if (error)
            return error;

        res.status(201).json({
            Message: "Ok!",
            Data: true
        });
    });
});

module.exports = router;
