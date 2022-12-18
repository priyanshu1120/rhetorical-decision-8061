const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
    userID : {type : String},
    company_logo : { type : String},
    company_name : { type : String },
    website : { type : String},
    industry : { type : String},
    about_comapny : { type : String},
    address : { type : String },
    city :  { type : String},
    pincode : { type : Number},
    company_size : { type : String }
});


const CompanyProfileModel = mongoose.model("company-profile",internSchema);

module.exports = {CompanyProfileModel};