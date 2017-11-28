var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var ExceptionService = require('../services/exceptionService')

var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post("/dummyCreate", function (req, res, next) {
    var user = new User({
        firstName: "k",
        lastName: "s",
        password: bcrypt.hashSync("pass", 10),
        email: "k@k.com"
    });

    user.save(function (err, result) {
        ExceptionService.MongoosHelper.HandleRequest(err, null, result);

        res.status(200).json({
            Message: "User created properly.",
            Data: result
        });
    });

});

router.post("/signin", function (req, res, next) {
    User.findOne({email: req.body.email}, function(err, user){
        ExceptionService.MongoosHelper.HandleRequest(err, null, user);

        if(! bcrypt.compareSync(req.body.password, user.password)){
            return res.status(501).json({
                Message: "Password or username incorrect",
                Data: user
            });
        }

        var token = jwt.sign({
            user: user
        }, 'secret', {
            expiresIn: 7200
        });

        res.status(200).json({
            Message: "Logged in",
            token: token,
            userId: user._id
        });
    });
});


module.exports = router;