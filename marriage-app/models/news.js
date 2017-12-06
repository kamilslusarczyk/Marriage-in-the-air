var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var schema = new Schema({
    content: {
        type: String,
        required: true
    },
    dateOfPublication: {
        type: Date,
        default: Date.now,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

schema.post('remove', function(news){
    User.findById(news.user, function(err, user){
        user.newses.pull(news);
        user.save();
    });
})

module.exports = mongoose.model('News', schema);