
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
    isDone: {
        type: Boolean,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: false
    }
});

module.exports = mongoose.model('Todos', schema);