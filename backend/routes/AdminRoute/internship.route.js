const {Router} = require("express")
require("dotenv").config()
const {InternShipModel} = require("../../model/Adminmodel/internship.model")
const internShipRouter = Router();

internShipRouter.get("/", async (req, res) => {
    const internship = await InternShipModel.find()
    res.send(internship)
})

internShipRouter.get("/dashboard", async (req, res) => {
    const {tag} = req.query;
    const internship = await InternShipModel.find({userID : req.body.userID, tag})
    res.send(internship)
})

internShipRouter.post("/create", async (req, res) => {
    const {internship_title,internship_category,openings,internship_type,internship_starts,duration,duration_calender,address,internship_description,prefered_skills,prefered_colleges,prefered_degrees,specific_question,stiphen,perks,userID} = req.body;
    // const {} = req.body;
    console.log(internship_title,internship_category,openings,internship_type,internship_starts,duration,duration_calender,address,internship_description,prefered_skills,prefered_colleges,prefered_degrees,specific_question,stiphen,perks,userID);
    try{
        const new_note = new InternShipModel({internship_title,internship_category,openings,internship_type,internship_starts,duration,duration_calender,address,internship_description,prefered_skills,prefered_colleges,prefered_degrees,specific_question,stiphen,perks,userID})
        await new_note.save()
        res.send({msg : "Note created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({err : "Something went wrong"})
    }
})


internShipRouter.delete("/delete/:todoId", async (req, res) => {
    const {todoId} = req.params
    const deletedNote = await TodoModel.findOneAndDelete({_id : todoId, userID : req.body.userID})
    if(deletedNote){
        res.status(200).send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})

internShipRouter.patch("/edit/:todoId", async (req, res) => {
    const {todoId} = req.params
    const deletedNote = await TodoModel.findOneAndUpdate({_id : todoId, userID : req.body.userID},req.body)
    if(deletedNote){
        res.send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})


module.exports = {
    internShipRouter
}