// import "./style/LoginUi.css"
// import profile from "./../images/a.png";
// import email from "./../images/email.jpg";
// import pass from "./../images/pass.png";
// import React,{useContext, useState} from 'react'
// import { Link,  useNavigate } from "react-router-dom";
// import api from "./service/api";

// //context 

// import {loginStart,loginsucess,loginfaliled} from "../context/authCont/authAction.js"
// import {Authcontext} from "../context/authCont/authContext.js"


// // const users={
// //   Email:"",
// //   Password:""
// // }


// const LoginUi = () => {

//   const {dispatch} = useContext(Authcontext);


//   const[user,setuser]=useState({

//   })
// const navigate=useNavigate()


//  const trigger=(e)=>{
//   setuser({...user,[e.target.name]:e.target.value})
//   console.log(user)
//  }




//  const log=async()=>{
//   dispatch(loginStart())
//   try{
//   const response= await api.post("/user/log",{...user})
//   console.log(response.data)
//   dispatch(loginsucess(response.data))
  
  
//   }catch(e){

//     dispatch(loginfaliled())
//   console.log("error while sending data from from login",e)
//   }
  
//  }
//   return (
//     <>
   
//     <div>
//       <div className="main">
//      <div className="sub-main">
//        <div>
//          <div className="imgs">
//            <div className="container-image">
//              <img src={profile} alt="profile" className="profile"/>
//            </div>
//          </div>
//          <div>
//            <h1>Login Page</h1>
//            <div>
//              <img src={email} alt="email" className="email"/>
//              <input type="text" onChange={trigger} name="Email"  placeholder="Email" className="name"/>
//            </div>
//            <div className="second-input">
//              <img src={pass} alt="pass" className="email"/>
//              <input type="text" onChange={trigger} name="Password" placeholder="password" className="name"/>
//            </div>
//           <div className="login-button">
//           <button onClick={log}>Login</button>
//           </div>
           
//             <p className="link">
//               <a href="#">Forgot password ?</a> Or <Link to={"/register"}>Sign Up</Link>
//             </p>
 
//          </div>
//        </div>
//      </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default LoginUi