import React, { Component ,useState} from 'react';
import "./AddAcademy.css"
import Header from'../Components/Header';
import Footer from'../Components/Footer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { padding } from '@mui/system';
import Add from '@mui/icons-material/Add';
import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";
import { BackspaceOutlined } from '@mui/icons-material';




function AddAcademy(props) {
   const[instituteName,setname]=useState('')
   const[instituteDescription,setdescription]=useState('')
   const[instituteState,setstate]=useState('')
   
   const[instituteCity,setcity]=useState('')
   const[instituteEmail,setemail]=useState('')
   const[instituteMobile,setmobilenumber]=useState('')
   const[nirfRank,setrank]=useState('')





 const handleOnSubmit=(e)=>{
   e.preventDefault()
   const user={instituteName,instituteDescription,instituteState,instituteCity,instituteEmail,instituteMobile,nirfRank}
   console.log(user)
   fetch("http://localhost:8080/admin/addInstitute",{
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(user)

 }).then(()=>{
   window.location.href="/admin/ViewInstitute"

 })
}



   return (
      <div>
         <Header/>
      <Grid container className="row" columnSpacing="3" item xs={12} sm={4} md={12}>
         <Grid className="row1">
         <input type="text" className="row1"
          autoFocus
          value={instituteName}
          onChange={(e)=>setname(e.target.value)}
         placeholder="Enter Academy name" id="academyName"></input>
         </Grid>
         <Grid className='row1'>
         <input type="text"  className='row1'
          autoFocus
          value={instituteMobile}
          onChange={(e)=>setmobilenumber(e.target.value)}
         placeholder="Enter the contact number" id="contactNumber"></input>
         </Grid>
         
      </Grid> 


      <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
         <Grid className="row1">
         <input type="text" className='row1'
          autoFocus
          value={instituteState}
          onChange={(e)=>setstate(e.target.value)}
         placeholder="Enter the academy image url" id="imageUrl"></input>
         </Grid>
         <Grid className='row1'>
         <input type="text" 
          autoFocus
          value={instituteEmail}
          onChange={(e)=>setemail(e.target.value)}
         className='row1' placeholder="Enter the academy email" id="emailId"></input>
         </Grid>
         
      </Grid> 



      <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
         <Grid className="row1">
         <input type="text" className='row1'
          autoFocus
          value={instituteCity}
          onChange={(e)=>setcity(e.target.value)}
         placeholder="Enter academy location" id="academyLocation"></input>
         </Grid>
         <Grid className='row1'>
         {/* <input type="text"  className='row1' placeholder="Enter academy description" id="academyDescription"></input> */}
         <textarea className='row1' 
         autoFocus
         value={instituteDescription}
         onChange={(e)=>setdescription(e.target.value)}
         placeholder="Enter academy description" id="academyDescription"></textarea>
         </Grid>
         
      </Grid> 

      <Grid>
      <Grid className='row1'>
         {/* <input type="text"  className='row1' placeholder="Enter academy description" id="academyDescription"></input> */}
         <input className='row1' 
         autoFocus
         value={nirfRank}
         onChange={(e)=>setrank(e.target.value)}
         placeholder="Enter academy rank" id="academyRank"></input>
         </Grid>
      </Grid>

      

      <div className='btnadd'>
      <span>
<Button 
 onClick={handleOnSubmit}
 type="submit" 
variant="contained" style={{margin:"5px"}} startIcon={<Add />} color="primary">Add Academy </Button> 
 </span>
{/* <span>
<Link   to="/admin/ViewInstitute" style={{color:"white",textDecoration:"none"}}  >

<Button 
 className="btn btn-submit"
//  onClick={getemail}
  type="submit"
variant="contained" style={{margin:"5px"}} startIcon={<BackspaceOutlined/>} color="primary">Back</Button> 
  </Link> 
  </span> */}
</div>
<Outlet />

</div>
   );
}

export default AddAcademy;

