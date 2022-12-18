// profile-details

const {Router} = require("express")
require("dotenv").config()
const {CompanyProfileModel} = require("../../model/Adminmodel/profile.model")
const profileRouter = Router();


profileRouter.get("/", async (req, res) => {
    const {tag} = req.query;
    const profile = await CompanyProfileModel.find({userID : req.body.userID, tag})
    res.send(profile)
})

profileRouter.post("/create", async (req, res) => {
    const {company_logo,company_name,website,industry,about_comapny,address,city,pincode,company_size,userID} = req.body;
    // const {} = req.body;
    console.log();
    try{
        const new_note = new CompanyProfileModel({company_logo,company_name,website,industry,about_comapny,address,city,pincode,company_size,userID})
        await new_note.save()
        res.send({msg : "Note created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({err : "Something went wrong"})
    }
});

module.exports = {
    profileRouter
}