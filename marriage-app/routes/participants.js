var express = require('express');
var router = express.Router();
var Participants = require('../models/participant');
var ExceptionService = require('../services/exceptionService');
var ObjectId = require('mongodb').ObjectID;
var AuthenticationService = require('../services/authenticationService');

router.get('/', function (req, res, next) {

    var verified = AuthenticationService.AuthenticationHelper.Authenticate(req.query.token, next, res);
    if (!verified)
        return res.status(401).json({
            title: "NOT PERMITTED",
            error: "NOT PERMITTED"
        });

    Participants.find()
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

//create
router.post('/', function (req, res, next) {

    var verified = AuthenticationService.AuthenticationHelper.Authenticate(req.query.token, next, res);
    if (!verified)
        return res.status(401).json({
            title: "NOT PERMITTED",
            error: "NOT PERMITTED"
        });

    var participant = new Participants(req.body);
    participant.save(function (err, result) {
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, result, res);

        if (error)
            return error;

        res.status(201).json({
            Message: "To do saved!",
            Data: true
        });
    });

});

//update or delete
router.put('/', function (req, res, next) {
    var verified = AuthenticationService.AuthenticationHelper.Authenticate(req.query.token, next, res);
    if (!verified)
        return res.status(401).json({
            title: "NOT PERMITTED",
            error: "NOT PERMITTED"
        });

    var participantId = req.body._id;
    if (req.body.toDelete) {
        Participants.findByIdAndRemove({ "_id": ObjectId(participantId) }, function (err) {

            res.status(201).json({
                Message: "Ok!",
                Data: true
            });
        });
    }
    else {
        Participants.update({ "_id": ObjectId(participantId) }, req.body, function (err, participant) {
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, participant, res);

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