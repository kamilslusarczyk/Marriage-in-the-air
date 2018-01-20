var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var guestSchema = new Schema({
    name :  {
        type : String,
        required : true
    },
    surname : {
        type: String,
        required : true
    },
    phoneNumber : String,
    email : String,
    confirmationCode : String,
    age :{
        type : Number,
        required : false
    },
    partner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest",
        required : false
    },
    children:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Guest",
        required: false
    },
    invitation : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Invitation"
    },
    accomodation : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Accomodation"
    },
    preferences : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "GuestPreference"
    }
})


module.exports = mongoose.model("Guest",guestSchema);