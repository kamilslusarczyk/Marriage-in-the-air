var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get("/", function(req, res, next){
    Message.find()
        .exec(function(err, docs) {
            if(err) {
                return res.status(500).json({
                    title: "An error",
                    error: err
                })
            }

            res.status(200).json({
                message: "Get ok",
                obj: docs
            });
        });
});

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });

    message.save(function(err, result){
        if(err) {
            return res.status(500).json({
                title: "An error",
                error: err
            })
        }

        res.status(201).json({
            message: "Ok!",
            obj: result
        });
        
    });
});

router.patch('/:id', function(req, res, next) {
    Message.findById(req.params.id, function(err, message){
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

        message.content = req.body.content;
        message.save(function(err, result) {
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

router.delete('/:id', function(req, res, next){
    Message.findById(req.params.id, function(err, message){
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
