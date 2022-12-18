const express = require("express");
const app = express();

app.use(express.json())
const cors = require("cors")
app.use(cors({
    origin:"*"
}));

require('dotenv').config()
const {connect} = require("./config/db");
const { userInternshipRouter } = require("./routes/AdminRoute/home.internship.route");
const {studentUserRouter} = require("./routes/StudentRoute/user.route")
const {studentauthentication} = require("./middlewares/studentauthentication")
const {experienceRouter} = require("./routes/StudentRoute/experience.route");
const { companyController } = require("./routes/AdminRoute/company.route");
const { CompanyAuth } = require("./middlewares/company.auth");
const {educationRouter} = require("./routes/StudentRoute/education.route");
const { internShipRouter } = require("./routes/AdminRoute/internship.route");
const { profileRouter } = require("./routes/AdminRoute/profile.route");
const { Authorization } = require("./middlewares/authorization");

app.get("/",(req,res)=>{
    res.send("server run successfully")
})

app.use("/company",companyController);
app.use("/internships",userInternshipRouter);
// Authorization(["company"])
app.use("/profile-details",CompanyAuth,profileRouter);
app.use("/internship",CompanyAuth,internShipRouter);

app.use("/studentuser",studentUserRouter)
app.use("/studentexperience",studentauthentication,experienceRouter)
app.use("/studenteducation",studentauthentication,educationRouter)


app.listen(process.env.PORT,async () =>{
       try{
          await connect;
          console.log("DB is connected");
          console.log(`PORT is Listening at ${process.env.PORT}`)
       }catch(err){
        console.log("somthing error in server")
        console.log(err)
       }
})