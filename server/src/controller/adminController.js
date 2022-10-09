import registermodel from "../database/models/user.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"
// import"dotenv/config";


class AdminController{

  //admin register
 async userreg(req,res){
    try{
        if(req.body.Password){
       const pass=await bcrypt.hash(req.body.Password,10);
      
       
       
     const data=new registermodel({...req.body,Password:pass})
     const result= await data.save();
     res.json(result)}
     else{
        res.status(404).json({message:"password doesnot match",success:false})
     }
    }catch(e){
        res.status(404).json({message:e.message,success:false})
        console.log(e)
    }
  }


  //adminlogin
 async userlog(req,res){
try{
const email=req.body.Email;
const passw=req.body.Password;
const response=await  registermodel.findOne({Email:email})

console.log(response.isAdmin)
const  matching=bcrypt.compareSync(passw,response.Password)
console.log(matching)
if (matching){
  //jwt
  const token= jwt.sign({id:response._id,isAdmin:response.isAdmin,Name:response.Name,Email:response.Email,},process.env.JWT_SECRET,{
    expiresIn:"7d",
  })
  res.json({
    id:response._id,
    Name:response.Name,
    Email:response.Email,
    sucess:true,
    isAdmin:response.isAdmin,
    token,
  })
  console.log(response)
  
}else{
  res.json("loggin failled")
}

}catch(e){
    res.status(404).json({message:e.message,success:false,stack:e.stack})
}
 }


}

export default AdminController;
