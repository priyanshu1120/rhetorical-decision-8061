const jwt = require("jsonwebtoken")
 require('dotenv').config()

const studentauthentication = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1]
    if(token){
          var decoded = jwt.verify(token,`${process.env.KEY}`)
          if(decoded){
               const userID = decoded.userID
               req.body.userID = userID
               next()
          }else{
            res.send(" you are not authenticated login please...")
          }
    }else{
        res.send(" you are not authenticated  login please...")
    }

}

module.exports = {studentauthentication}