var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let checklistSchema = new Schema({
    name : {
        type: string,
        required : true
    },
    tasks:{
        type: Schema.Types.ObjectId,
        ref : 'ChecklistTask'
    }
})

module.exports = mongoose.model("Checklist", checklistSchema);