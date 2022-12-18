const express = require("express");
const studentUserRouter = express.Router();
const {UserModel} = require("../../model/Studentmodel/user.model")
require("dotenv").config()
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



studentUserRouter.get("/:id", async(req,res)=>{
     let id = req.params.id
  try{
        let data = await UserModel.find({_id:id})
        res.send(data)
  }catch(err){
    console.log(err)
    res.send(err)
  }  
})   

studentUserRouter.patch("/:id",async(req,res)=>{
  let id = req.params.id
  let userdata = req.body
  let data = await UserModel.findByIdAndUpdate({_id:id},userdata)

  if(data){ 
       res.send(data)
  }else{
    res.send("user not updated")
  }
   
})





studentUserRouter.post("/signup", async (req, res) => {
  let { email, password, firstname, lastname,mobile,dob,city,preference,language,skill, address,state,pincode,about} = req.body;
  let userpresent = await UserModel.findOne({ email });
  if (userpresent) {
    res.send({"msg":"email already exits try with another"});
  } else {
    try {
      bcrypt.hash(password, 5, async function (err, hash) {
        const userData = new UserModel({ email, password:hash,firstname, lastname,mobile,dob,city,preference,language,skill, address,state,pincode,about });
        await userData.save();
        res.send("user created successfull");
      });
    
    } catch (err) {
      console.log(err);
      res.send({"msg":"Something went wrong, pls try again later"});
    }
  }
});


studentUserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
try{
        let user = await UserModel.find({ email });
        if (user.length > 0) {
            const hashed_password = user[0].password;
            bcrypt.compare(password, hashed_password, function (err, result) {
            if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, `${process.env.KEY}`);
                        res.send({ msg: "Login successfull",data:user, token: token });
            } else {
                        res.send("authentication failed");
                    }
                });
        } else {
                res.send("authentication failed");
            }
    } catch (err) {
        res.send("somthing error in login");
       }
});




module.exports = {studentUserRouter}
