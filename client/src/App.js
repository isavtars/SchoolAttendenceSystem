import React, { useContext } from 'react';
//import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';



import Register from './components/Register';
import Userdetails from './components/Admin/Userdetails';       
// import Edit from './components/Edit';

import {Authcontext} from "./context/authCont/authContext"
import AdminLogin2 from './components/Admin/AdminLogin2/AdminLogin2';
function App() {

  const {user} = useContext(Authcontext)
  console.log(user)
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}> </Route>
    

        


        
        
          <Route path="/adminlogin" element={user ? <Navigate to="/admin" replace /> :  <AdminLogin2 />}  ></Route>
     <Route path="/admin" element={user==null ? <Navigate to="/adminlogin" replace /> :  <Userdetails />}  ></Route>
          

          {
            user&&(
            <Route path='/admin' element={<Userdetails/>}> </Route>
          
            )

          } 
          



        </Routes>
      </Router>

    </>
  );
}

export default App;
