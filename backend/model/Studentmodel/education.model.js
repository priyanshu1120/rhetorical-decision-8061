const mongoose = require("mongoose")


const educationSchema = mongoose.Schema({
    graduation:{type:String},
    year:{type:Number},
    college:{type:String},
    degree:{type:String},
    userID : {type:String},
})

const EducationModel = mongoose.model("education",educationSchema)
module.exports = {EducationModel}