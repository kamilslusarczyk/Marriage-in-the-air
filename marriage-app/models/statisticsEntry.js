var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    token: {
        type: String,
        required: false //for anonymous users
    },
    dateTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    isAnonymous: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Statistics', schema);