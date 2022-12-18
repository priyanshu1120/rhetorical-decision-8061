const {Router} = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const {CompanyModel} = require("../../model/Adminmodel/Company.model");

const companyController = Router();


companyController.post("/register",async (req, res) => {
    const {firstname,lastname,company_name,mob_number,email, password} = req.body;
    console.log(firstname,lastname,company_name,mob_number,email, password)
    const userexits = await CompanyModel.findOne({email})
    //TODO
    if(userexits?.email){
        res.send({"msg" : "Try loggin in, user already exist"})
    } else{
        bcrypt.hash(password, 5, async function(err, hash) {
            if(err){
                res.send("Something went wrong, plz try again later")
            }
            const user = new CompanyModel({
                firstname,
                lastname,
                company_name,
                mob_number,
                email,
                password : hash
            })
            try{
                await user.save()
                res.send(user)
            }
            catch(err){
                console.log(err)
                res.send("Something went wrong, plz try again")
            }
        });
    }

})

companyController.post("/login", async (req, res) => {
    const { email, password } = req.body;
  try{
          let user = await CompanyModel.find({ email });
          if (user.length > 0) {
              const hashed_password = user[0].password;
            //   console.log(hashed_password);
              bcrypt.compare(password, hashed_password, function (err, result) {
              if (result) {
                      const token = jwt.sign({ userID: user[0]._id , email : email }, `${process.env.KEY}`);
                          res.send({ msg: "Login successfull", token: token });
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

module.exports = {
    companyController
}