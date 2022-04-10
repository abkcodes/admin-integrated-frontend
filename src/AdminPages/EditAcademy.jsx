// import React, { Component } from 'react';
import "./EditAcademy.css"
import Header from'../Components/Header';
import Footer from'../Components/Footer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { padding } from '@mui/system';
import Add from '@mui/icons-material/Add';
import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";

import React, { useState } from 'react';
import { getListSubheaderUtilityClass } from "@mui/material";

function EditAcademy(props) {
const [user,setUser]=useState([])
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [mobileNumber,setMobile]=useState("")
const [password,setPassword]=useState("")
const [id,setId]=useState(null)






   return (
      <div>
         <Header/>
      <Grid container className="row" columnSpacing="3" item xs={12} sm={4} md={12}>
         <Grid className="row1">
         <input type="text" className="row1"
         value={name}
         placeholder="Enter Academy name" id="academyName"></input>
         </Grid>
         <Grid className='row1'>
         <input type="text" 
          value={email}
         className='row1' placeholder="Enter the contact number" id="contactNumber"></input>
         </Grid>
         
      </Grid> 


      <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
         <Grid className="row1">
         <input type="text" className='row1'
          value={mobileNumber}
         placeholder="Enter the academy image url" id="imageUrl"></input>
         </Grid>
         <Grid className='row1'>
         <input type="text" 
          value={password}
         className='row1' placeholder="Enter the academy email" id="emailId"></input>
         </Grid>
         
      </Grid> 



      <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
         <Grid className="row1">
         <input type="text" className='row1' placeholder="Enter academy location" id="academyLocation"></input>
         </Grid>
         <Grid className='row1'>
         
         <textarea className='row1' placeholder="Enter academy description" id="academyDescription"></textarea>
         </Grid>
         
      </Grid> 

      <div className='btnadd'>

<Button  variant="contained" style={{margin:"5px"}} startIcon={<Add />} color="primary">EditAcademy Academy </Button> 

</div>

</div>
   );
}

export default EditAcademy;

