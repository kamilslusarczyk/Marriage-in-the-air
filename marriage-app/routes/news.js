var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var News = require('../models/news');
var ExceptionService = require('../services/exceptionService')
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var AuthenticationService = require('../services/authenticationService');

//get all
router.get('/', function (req, res, next) {
    var conditions = JSON.parse(req.query.conditions);
    console.log(typeof conditions.isArchived);
    News.find(conditions)
        .populate('user', 'firstName')
        .exec(function (err, docs) {
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, docs, res);

            if (error)
                return error;

            res.status(200).json({
                Message: "Newses retreived properly.",
                Data: docs,
                success : true
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

//create
router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);

    var verified = AuthenticationService.AuthenticationHelper.Authenticate(req.query.token, next, res);
    if(!verified)
        return res.status(401).json({
            title: "NOT PERMITTED",
            error: "NOT PERMITTED"
        });

    User.findById(decoded.user._id, function (err, user) {
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, user, res);
        console.log(error,"adsadssa");
        if (error)
            return error;

        var news = new News({
            topic : req.body.topic,
            content: req.body.content,
            user: user,
            isArchived : false
        });
        news.save(function (err, result) {
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, result, res);

            if (error)
                return error;

            user.newses.push(result);
            user.save();ą

            res.status(201).json({
                Message: "Ok!",
                Data: true
            });
        });
    })

});

//delete
router.delete('/:id', function (req, res, next) {

    var verified = AuthenticationService.AuthenticationHelper.Authenticate(req.query.token, next, res);
    if(!verified)
        return res.status(401).json({
            title: "NOT PERMITTED",
            error: "NOT PERMITTED"
        });

    var newsId = req.params._id;
    News.remove({ "_id": ObjectId(newsId) }, function (err, news) {
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, news, res);

        if (error)
            return error;

        res.status(201).json({
            Message: "Ok!",
            success : true,
            Data: true
        });
    });
});

//update
router.put("/", function(req,res,next){
    var verified = AuthenticationService.AuthenticationHelper.Authenticate(req.query.token, next, res);
    if(!verified)
        return res.status(401).json({
            title: "NOT PERMITTED",
            error: "NOT PERMITTED"
        });

    var news = req.body;

    News.update({"_id" : news._id}, news ,function(err,news){
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, news, res);

        if (error)
            return error;

        res.status(200).json({
            Message: "Ok!",
            success : true,
            Data: true});
    });


});

module.exports = router;
