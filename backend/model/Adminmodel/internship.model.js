const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
    userID : {type : String},
    internship_title : {type : String , require : true},
    internship_category : {type : String , require : true},
    openings : {type : Number, require : true},
    internship_type : {type : String , require : true},
    internship_starts : {type : String , require : true},
    duration : { type : Number, require : true},
    duration_calender : {type : String , require : true},
    address : {type : String , require : true},
    internship_description : {type : String , require : true},
    prefered_skills : {type : String , require : true},
    prefered_colleges : {type : String , require : true},
    prefered_degrees : {type : String, require : true},
    specific_question : {type : String, require : true},
    stiphen : {type : Number, require : true},
    perks : {type : String, require : true},
})


const InternShipModel = mongoose.model("internship",internSchema);

module.exports = {InternShipModel};