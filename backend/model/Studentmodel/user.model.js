const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
      firstname:{type:String},
      lastname:{type:String},
      email:{type:String, required:true},
      password:{type:String},
      mobile:{type:Number},
      dob:{type:String},
      city:{type:String},
      preference:{type:String},
      language:{type:String},
      skill:{type:String},
      address:{type:String},
      state:{type:String},
      pincode:{type:Number},
      about:{type:String},
      category:{type:String},
      find:{type:String}

})

const UserModel = mongoose.model("studentuser",UserSchema)
module.exports = {UserModel}