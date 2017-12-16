var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var ExceptionService = require('../services/exceptionService');
var AuthenticationService = require('../services/authenticationService');
var jwt = require('jsonwebtoken');
var MarriageDetails = require('../models/marriageDetails');

//get all
router.get('/', function (req, res, next) {
    MarriageDetails.find()
        .exec(function (err, docs) {
            if (err)
                return res.status(500).json({
                    message: "nope.",
                    data: err
                });
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, docs, res);

            if (error)
                return error;

            res.status(200).json({
                mssage: "Marriage details retreived properly.",
                data: docs
            });
        });
});

router.post('/', function (req, res, next) {
    var verified = AuthenticationService.AuthenticationHelper.Authenticate(req.query.token, next, res);
    if(!verified)
        return res.status(401).json({
            title: "NOT PERMITTED",
            error: "NOT PERMITTED"
        });

    MarriageDetails.remove({}, function (err) {

        if (err)
            return error;

        var details = new MarriageDetails({
            content: req.body.content,
            dateOfPublication: req.body.dateOfPublication,
            latitude: req.body.latitude,
            longtitude: req.body.longtitude
        });
        details.save(function (err, result) {
            var error = ExceptionService.MongoosHelper.HandleRequest(err, null, result, res);

            if (error)
                return error;

            res.status(201).json({
                message: "Ok!",
                data: true
            });
        });
    });
});

module.exports = router;
