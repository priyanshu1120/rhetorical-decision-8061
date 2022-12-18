const {Router} = require("express");
const { InternShipModel } = require("../../model/Adminmodel/internship.model");
const userInternshipRouter = Router();

userInternshipRouter.get("/", async (req, res) => {
    const internship = await InternShipModel.find()
    res.send(internship)
})

module.exports= {userInternshipRouter}