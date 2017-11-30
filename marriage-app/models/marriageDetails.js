var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    latitude: {
        type: Number,
        required: true
    },
    longtitude: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('MarriageDetails', schema);