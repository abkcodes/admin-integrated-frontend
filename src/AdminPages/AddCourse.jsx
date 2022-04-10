import React, { Component ,useState} from 'react';


import "./AddAcademy.css"
import Header from'../Components/Header';
import Footer from'../Components/Footer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { padding } from '@mui/system';
import Add from '@mui/icons-material/Add';
import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";



function AddCourse(props) { 

   const[courseName,setname]=useState('')
   const[courseDescription,setdescription]=useState('')
   const[courseDuration,setduration]=useState('')
   
   const[courseTiming,settiming]=useState('')
   const[courseStudentCount,setcount]=useState('')
   const[courseAcademicYear,setyear]=useState('')
   const[courseRequiredPercentage,setpercentage]=useState('')
   const[instituteId,setinstituteid]=useState('')
   // const[motherName,setage]=useState('')
   // const[houseno,sethouseno]=useState('')
   // const[streetname,setstreetname]=useState('')
   // const[areaName,setareaname]=useState('')
   // const[pincode,setpin]=useState('')
   // const[state,setstate]=useState('')
   // const[nationality,setnationality]=useState('')

   
   
   
 
   const handleOnSubmit=(e)=>{
     e.preventDefault()
     const user={courseName,courseDescription,courseStudentCount,instituteId,courseDuration,courseTiming,courseRequiredPercentage,courseAcademicYear}
     console.log(user)
     fetch("http://localhost:8080/admin/addCourse",{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(user)
 
   }).then(()=>{
     window.location.href="/admin/ViewCourse"

   })
 }



    return (
        <div>
            <Header/>
        <Grid container className="row" columnSpacing="3" item xs={12} sm={4} md={12}>
          <Grid className="row1">
          <input type="text" className="row1"
           autoFocus
           value={courseName}
           onChange={(e)=>setname(e.target.value)}
          placeholder="Enter the course name" id="courseName"></input>
          </Grid>
          <Grid className='row1'>
          <input type="text"  className='row1'
           autoFocus
           value={courseStudentCount}
           onChange={(e)=>setcount(e.target.value)}
          placeholder="Enter no of student enrolled for the Courses" id="courseEnrolled"></input>
          </Grid>
          
       </Grid> 


       <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
          <Grid className="row1">
          <input type="text" className='row1'
           autoFocus
           value={courseDuration}
           onChange={(e)=>setduration(e.target.value)}
          placeholder="Enter the course duration" id="courseDuration"></input>
          </Grid>

          <Grid className='row1'>
          
          <input className='row1'
             autoFocus
             value={courseRequiredPercentage}
             onChange={(e)=>setpercentage(e.target.value)}
          placeholder="Enter the course percentage" id="courseRequiredpercentage"></input>
          </Grid>
         
          
       </Grid> 






       <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
          <Grid className="row1">
          <input type="text" className='row1'
           autoFocus
           value={courseAcademicYear}
           onChange={(e)=>setyear(e.target.value)}
          placeholder="Enter the course Year" id="courseYear"></input>
          </Grid>

         
          <Grid className="row1">
          <input type="text" className='row1'
           autoFocus
           value={courseTiming}
           onChange={(e)=>settiming(e.target.value)}
          placeholder="Enter the course timing" id="courseTiming"></input>
          </Grid> 
          
       </Grid> 







{/* 
       <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
        
          
         
       </Grid>  */}

       <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
          <Grid className="row1">
          <input type="text" className='row1'
           autoFocus
           value={instituteId}
           onChange={(e)=>setinstituteid(e.target.value)}
          placeholder="Enter the instituteId" id="instituteid"></input>
          </Grid>
          
         


          <Grid className='row1'>
          
          <textarea className='row1'
             autoFocus
             value={courseDescription}
             onChange={(e)=>setdescription(e.target.value)}
          placeholder="Enter the course description" id="courseDescription"></textarea>
          </Grid>
       </Grid> 

       <div className='btnadd'>

<Button  variant="contained"
 onClick={handleOnSubmit}
type="submit" 
style={{margin:"5px"}} id="addCourse" startIcon={<Add />} color="primary">Add Course </Button> 

</div>
<Outlet />
    </div>
    );
}

export default AddCourse;

