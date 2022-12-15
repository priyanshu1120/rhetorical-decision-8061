const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors({
    origin:"*"
}))
require('dotenv').config()
const {connect} = require("./config/db")
const {studentUserRouter} = require("./routes/StudentRoute/user.route")
const {studentauthentication} = require("./middlewares/studentauthentication")
const {experienceRouter} = require("./routes/StudentRoute/experience.route")
const {educationRouter} = require("./routes/StudentRoute/education.route")

app.get("/",(req,res)=>{
    res.send("server run successfully")
})

app.use("/studentuser",studentUserRouter)

app.use(studentauthentication)
app.use("/studentexperience",experienceRouter)
app.use("/studenteducation",educationRouter)


app.listen(process.env.PORT,async(req,res)=>{
       try{
          await connect
          console.log(`server run http://localhost:${process.env.PORT}`)
       }catch(err){
        console.log("somthing error in server")
        console.log(err)
       }
})