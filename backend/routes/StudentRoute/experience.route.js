const express = require("express")
const experienceRouter = express.Router()
const {ExperienceModel} = require("../../model/Studentmodel/experience.model")


experienceRouter.get("/",async(req,res)=>{
    const userID = req.body.userID
       try{
        const experience = await ExperienceModel.find({userID:userID})
        res.send(experience)
       }catch(err){
        console.log(err)
        res.send("somthing error in gets experience")
       }
})


experienceRouter.post("/create",async(req,res)=>{
    try{
         const data = req.body
         const experience = new ExperienceModel(data)  
          await experience.save()
         res.send(data)
    }catch(err){
        console.log(err)
     res.send("somthing error in create experience")
    }
})

experienceRouter.put("/:experienceID",async(req,res)=>{
     const experienceID = req.params.experienceID
     const userID = req.body.userID
     const payload = req.body
    try{
        const userexperience = await ExperienceModel.findOne({_id:experienceID})
         if(userID!==userexperience.userID) {
            res.send("you are not autherized for this")
         } else{
              await ExperienceModel.findByIdAndUpdate({_id:experienceID},payload)  
              res.send({"msg" : "experience updated successfully"})
            
         }    
    }catch(err){
     res.send("somthing error in create experience")
    }
})


experienceRouter.delete("/:experienceID",async(req,res)=>{
    const experienceID = req.params.experienceID
    const userID = req.body.userID
    try{
        const userexperience = await ExperienceModel.findOne({_id:experienceID})
         if(userID!==userexperience.userID) {
            res.send("you are not authenticated")
         } else{
              await ExperienceModel.findByIdAndDelete({_id:experienceID})  
              res.send({"msg" : "experience deleted successfully"})
            
         }    
    }catch(err){
        console.log(err)
     res.send("somthing error in experience note")
    }
})


module.exports={experienceRouter}