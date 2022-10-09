import express from "express"
import validate  from "../middleware/tokenval.js"
import AdminController from "../controller/adminController.js"

//all admin routes
const admincontroller=new AdminController();
const route=express.Router()


//adminRegister
route.post("/register",admincontroller.userreg)

//admin login
route.post("/login",admincontroller.userlog)

export default route;