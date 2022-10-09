import React,{useState,useEffect} from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell,Button} from "@mui/material"
import api from '../service/api'
import {Link, useNavigate } from "react-router-dom"



const Userdetails = () => {

  const navigate=useNavigate();
  

 const[users,setusers]=useState([])
 const [datatem, setdatatem] = useState([])

const [input, setinput] = useState('')



 useEffect(() => {
  const getuser=async()=>{
      try{
       const response=await api.get("/user/all")
       
       console.log(response.data)
       setusers(response.data.response)
       setdatatem(response.data.response)
    
      }catch(e){
          console.log("error while get data",e)
      }
     }
 getuser()
 
 console.log(users)
 }, [])


 useEffect(() => {

  const searchfilter=async()=>{
    try{

      const response =await api.get(`/user/searchfilter?search=${input}`)
      setusers(response.data)

      console.log(response.data.response)
      console.log(response.data)

    }catch(err){
      console.log(err)
    }


  }

  if(input) searchfilter();
  else{
    setusers(datatem)
  }

   
   
 }, [input])
 

  const styles={
  color:"white",
  fontWeight:"bold",
  size:"30px",
  backgroundColor:"black",
 
  
 }
 
 const search=(e)=>{
  setinput(e.target.value);
  console.log(input)
  
 }
 const deluser=async(id,idx)=>{
  try{

 if(window.confirm("Are u Sure to Delete the user?")){

  const response=await api.delete(`/admin/del/${id}`)
  if(response.data){
    const newuserlist = users.filter((filter,index)=>{
     return index !==idx; //
    })
    setusers(newuserlist)
    
  }else{
    console.log("unable to delete")
  }}
  }catch(e){
console.log(e)
  }
}

  return (
   
   
    <div>
    <TableContainer style={{"backgroundColor":""}}>
    <Table>
    <TableHead>
    <TableRow >
    <TableCell style={styles}> id</TableCell>
    <TableCell style={styles}> Name</TableCell>
    <TableCell style={styles}> Email</TableCell>
    <TableCell style={styles}> Phone</TableCell>
    <input onChange={search} style={{"borderRadius":"5px","textAlign":"center","height":"50px" ,"marginLeft":"10px"}} type="text" placeholder='search student....' />
    </TableRow>
  {users.length>0 ?users.map((data,index)=>{
    return<TableRow key={index}>
    <TableCell >{index}</TableCell>
    <TableCell>{data.Name}</TableCell>
    <TableCell>{data.Email}</TableCell>
    <TableCell>{data.Phone}</TableCell>
    <Button onClick={()=>deluser(data._id,index)} variant="contained" style={{"width":"100px","height" :"30px",  "marginLeft":"60px","marginRight":"30px","backgroundColor":"red"}}>Delete</Button>
   <Link style={{"textDecoration":"none"}} to={`/edituser/${data._id}`}> <Button variant="contained" style={{"width":"100px","backgroundColor":"yellowgreen","height" :"30px"}} >Edit</Button></Link>
      
    </TableRow>
  
    
   }):"user not found"}
  
  

  

    </TableHead>
    
    </Table>
    
   
    </TableContainer>
    
    
    </div>

 
  
  )
  
}

export default Userdetails


