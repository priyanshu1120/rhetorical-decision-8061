const express = require("express")
const app = express()
app.use(express.json())

require('dotenv').config()
const {connect} = require("./config/db")
const {studentUserRouter} = require("./routes/StudentRoute/user.route")
const {studentauthentication} = require("./middlewares/studentauthentication")
const {experienceRouter} = require("./routes/StudentRoute/experience.route")
app.get("/",(req,res)=>{
    res.send("server run successfully")
})

app.use("/studentuser",studentUserRouter)

app.use(studentauthentication)
app.use("/studentexperience",experienceRouter)

app.listen(process.env.PORT,async(req,res)=>{
       try{
          await connect
          console.log(`server run http://localhost:${process.env.PORT}`)
       }catch(err){
        console.log("somthing error in server")
        console.log(err)
       }
})