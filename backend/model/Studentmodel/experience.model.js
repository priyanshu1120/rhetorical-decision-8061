const mongoose = require("mongoose")


const experienceSchema = mongoose.Schema({
    experiencetype:{type:String},
    jobtitle:{type:String},
    duration:{type:String},
    responsibility:{type:String},
    userID : {type:String},
})

const ExperienceModel = mongoose.model("experience",experienceSchema)
module.exports = {ExperienceModel}