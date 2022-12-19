const { CompanyModel } = require("../model/Adminmodel/Company.model");


const Authorization = (permittedrole) =>{
    return async (req,res,next) =>{
    const email = req.body.email;
    const user = await CompanyModel.find({email : email});
        console.log(user);
        const role = user[0].role;
        console.log(role);
        if(permittedrole.includes(role)){
            next();
        }
        else{
            res.send("not authorized");
        }
}
}

module.exports= {Authorization}