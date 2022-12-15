const express = require("express")
const educationRouter = express.Router()
const {EducationModel} = require("../../model/Studentmodel/education.model")



educationRouter.get("/",async(req,res)=>{
    const userID = req.body.userID
       try{
        const education = await EducationModel.find({userID:userID})
        res.send(education)
       }catch(err){
        console.log(err)
        res.send("somthing error in gets education")
       }
})


educationRouter.post("/create",async(req,res)=>{
    try{
         const data = req.body
         const education = new EducationModel(data)  
          await education.save()
         res.send("education created successfully")
    }catch(err){
        console.log(err)
     res.send("somthing error in create education")
    }
})

educationRouter.put("/:educationID",async(req,res)=>{
     const educationID = req.params.educationID
     const userID = req.body.userID
     const payload = req.body
    try{
        const usereducation = await EducationModel.findOne({_id:educationID})
         if(userID!==usereducation.userID) {
            res.send("you are not autherized for this")
         } else{
              await EducationModel.findByIdAndUpdate({_id:educationID},payload)  
              res.send({"msg" : "education updated successfully"})
            
         }    
    }catch(err){
     res.send("somthing error in create education")
    }
})


educationRouter.delete("/:educationID",async(req,res)=>{
    const educationID = req.params.educationID
    const userID = req.body.userID
    try{
        const usereducation = await EducationModel.findOne({_id:educationID})
         if(userID!==usereducation.userID) {
            res.send("you are not authenticated")
         } else{
              await EducationModel.findByIdAndDelete({_id:educationID})  
              res.send({"msg" : "education deleted successfully"})
            
         }    
    }catch(err){
        console.log(err)
     res.send("somthing error in create education")
    }
})


module.exports={educationRouter}