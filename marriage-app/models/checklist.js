var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let checklistSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    description: String,
    tasks:[{
        name:{
            type:String,
            required:true
        },
        isCompleted :{
            type:Boolean,
            required:true
        },
        description : String
    }]
})

module.exports = mongoose.model("Checklist", checklistSchema);