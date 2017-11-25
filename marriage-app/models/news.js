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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('News', schema);