const jwt = require("jsonwebtoken");
require("dotenv").config();

const CompanyAuth = (req, res, next) => {
    if(!req.headers.authorization){
        return res.send("Please login again");
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, `${process.env.KEY}`, function(err, decoded) {
            if(err){
                res.send({authErr : "Please login with the valid secret key"})
            }
            else{
                const email = decoded.email;
                req.body.email = email;
                console.log(email);
                
                const userID = decoded.userID
                req.body.userID = userID
                console.log(userID);

               next()
            }
        });
}

module.exports = {CompanyAuth};