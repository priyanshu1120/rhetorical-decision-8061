const mongoose = require("mongoose")


const educationSchema = mongoose.Schema({
    graduation:{type:String},
    year:{type:String},
    college:{type:String},
    degree:{type:String},
    status:{type:String},
    userID : {type:String},
})

const EducationModel = mongoose.model("education",educationSchema)
module.exports = {EducationModel}