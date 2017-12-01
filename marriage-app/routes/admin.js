
var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var ExceptionService = require('../services/exceptionService')

router.get("/",function(req, res, next){

    console.log(req);

<<<<<<< db6efcfce2f759cdde2bfc1eb615bef49f349d41
=======
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
        var error = ExceptionService.MongoosHelper.HandleRequest(err, null, user, res);

        if(error)
            return error;

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
>>>>>>> Authenthication done
});

module.exports = router;