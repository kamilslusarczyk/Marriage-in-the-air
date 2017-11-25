var express = require('express');
var router = express.Router();

var News = require('../models/news');

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

module.exports = router;
