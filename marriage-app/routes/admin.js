var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var ExceptionService = require('../services/exceptionService')

router.get("/",function(req, res, next){

    console.log(req);

});

module.exports = router;