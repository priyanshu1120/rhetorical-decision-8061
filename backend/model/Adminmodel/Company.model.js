const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    userID : {type : String},
    firstname : {type : String },
    lastname : {type : String },
    company_name : {type : String, require : true },
    mob_number : {type : Number, require : true },
    email : {type : String, required : true},
    password : {type : String, required : true},
    role : { type : String , enum : ["company","student"], default : "student"}
})

const CompanyModel = mongoose.model("company_register", companySchema)


module.exports = {
    CompanyModel
}

// firstname,