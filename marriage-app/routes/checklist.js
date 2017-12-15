var express = require('express');
var router = express.Router();
var ChecklistModel= require('../models/checklist');
var ExceptionService = require('../services/exceptionService');
var AuthenticationService = require('../services/authenticationService');

router.post('/', function (req, res, next) {
   

    var verified = AuthenticationService.AuthenticationHelper.Authenticate(req.query.token, next, res);
    if(!verified)
        return res.status(401).json({
            title: "NOT PERMITTED",
            error: "NOT PERMITTED"
        });

    var checklist = new ChecklistModel(req.body);
    
    checklist.save(function(err, result){

        console.log(err,", ", result);
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, result, res);

        if (error)
            return error;

        return res.status(200).json({
            message: "Ok!",
            success : true,
            data: true});

    })



});


module.exports = router;