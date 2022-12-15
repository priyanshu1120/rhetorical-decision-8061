const express = require("express");
const cors = require("cors");
const app = express()
app.use(cors());
app.use(express.json())

require('dotenv').config()
const {connect} = require("./config/db");
const {studentUserRouter} = require("./routes/StudentRoute/user.route")
const {studentauthentication} = require("./middlewares/studentauthentication")
const {experienceRouter} = require("./routes/StudentRoute/experience.route");
const { companyController } = require("./routes/AdminRoute/company.route");
const { CompanyAuth } = require("./middlewares/company.auth");
app.get("/",(req,res)=>{
    res.send("server run successfully")
})

app.use("/company",companyController);
app.use(CompanyAuth)

app.use("/studentuser",studentUserRouter)
app.use(studentauthentication)
app.use("/studentexperience",experienceRouter)

app.listen(8080,async(req,res)=>{
       try{
          await connect;
          console.log("DB is connected");
          console.log(`PORT is Listening at ${8080}`)
       }catch(err){
        console.log("somthing error in server")
        console.log(err)
       }
})