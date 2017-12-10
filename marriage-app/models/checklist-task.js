var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var checklistTaskSchema = new Schema({
    name:{
        type:string,
        required:true
    },
    isCompleted :{
        type:boolean,
        required:true
    },
    description : string
});


module.export = mongoose.model("ChecklistTask", checklistTaskSchema)