var express = require('express');
var router = express.Router();
var GuestModel= require('../models/guest');

router.get('/', function (req, res, next) {
    var cCode = req.query.confirmationCode;

    GuestModel.find({confirmationCode : cCode},function(err,result){

        return res.status(200).json({
            message : "",
            success : true,
            data : result
        });

    });


});

module.exports = router;
