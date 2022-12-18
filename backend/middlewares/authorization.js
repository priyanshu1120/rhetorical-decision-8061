// import { CompanyModel } from "../model/Adminmodel/Company.model";

// const Authorization = (permittedrole) =>{
//     return async (req,res,next) =>{
//     const email = req.body.email;
//     const user = await CompanyModel.findOne({email : email});
//         const role = user.role;

//         if(permittedrole.includes(role)){
//             next();
//         }
//         else{
//             res.send("not authorized");
//         }
// }
// }

// module.exports= {Authorization}