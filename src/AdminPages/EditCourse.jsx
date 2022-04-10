import { useState,React,useEffect } from "react";
import "./AddAcademy.css"
import Header from'../Components/Header';
import Footer from'../Components/Footer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { padding } from '@mui/system';
import Add from '@mui/icons-material/Add';
import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";
import { getListSubheaderUtilityClass } from '@mui/material';
import { SettingsSuggestRounded, SettingsSystemDaydreamRounded } from '@mui/icons-material';



function EditCourse(props) {
    const [users,setUsers]=useState([]);
    const [courseName,setname]=useState("");
    const [courseDescription,setdescription]=useState("");
    const [courseTiming,settiming]=useState("");
    const [courseStudentCount,setcount]=useState("");
    const [courseAcademicYear,setyear]=useState("");
    const [courseRequiredPercentage,setpercentage]=useState("");
    const [courseDuration,setduration]=useState("");
    const [courseId,setid]=useState("");
useEffect(()=>{
    getUsers();
},[])
function getUsers(){
    fetch("http://localhost:8080/admin/viewCourses").then((result)=>{
        result.json().then((resp)=>{
            setUsers(resp)
            setname(resp[0].courseName);
            setdescription(resp[0].courseDescription);
            settiming(resp[0].courseTiming);
            setcount(resp[0].courseStudentCount);
            setyear(resp[0].courseAcademicYear);
            setpercentage(resp[0].courseRequiredPercentage);
            setid(resp[0].courseId);
            setduration(resp[0].courseDuration);
        })
    })
}

// function selectUser(courseId)
// {
//   console.warn("function called");
// let item=data[courseId-1]
// setname(item.courseName);
// setdescription(item.courseDescription);
// settiming(item.courseTiming);
// setcount(item.courseStudentCount);
// setyear(item.courseAcademicYear);
// setpercentage(item.courseRequiredPercentage);
// setid(item.courseId);
// setduration(item.courseDuration);
// }
function updateCourse(){
    let item=(courseName,courseDuration,courseDescription,courseTiming,courseStudentCount,courseAcademicYear,courseRequiredPercentage)
    console.warn(item);
    fetch(`http://localhost:8080/admin/editCourse/${courseId}`,{
        method:'PUT',
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(item)
      }).then((result)=>{
        result.json().then((resp)=>{
        //   console.warn(resp)
        //   getUsers();
          window.location.href="/admin/ViewCourse"
        })
         
      
      })
}

    return (
        <div >
            <Header/>
                <Grid container className="row" columnSpacing="3" item xs={12} sm={4} md={12}>
                  <Grid className="row1">
                  <input type="text" className="row1"
                  value={courseName}
                  onChange={(e)=>{setname(e.target.value)}}
                  placeholder="Enter the course name" id="editCourseName"></input>
                  </Grid>
                  <Grid className='row1'>
                  <input type="text" 
                  value={courseStudentCount}
                  onChange={(e)=>{setcount(e.target.value)}}
                  className='row1' placeholder="Enter no of student enrolled for the Course" id="editCourseEnrolled"></input>
                  </Grid>
                  
               </Grid> 


               <Grid container className="row" columnSpacing="3" item xs={12} sm={4} md={12}>
                  <Grid className="row1">
                  <input type="text" className="row1"
                   value={courseAcademicYear}
                   onChange={(e)=>{setyear(e.target.value)}}
                  placeholder="Enter the course academic year" id="editCourseyear"></input>
                  </Grid>
                  <Grid className='row1'>
                  <input type="text"  className='row1'
                   value={courseRequiredPercentage}
                   onChange={(e)=>{setpercentage(e.target.value)}}
                  placeholder="Enter the course required percentage" id="editCoursepercentage"></input>
                  </Grid>
                  
               </Grid> 


               <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
                  <Grid className="row1">
                  <input type="text" className='row1' 
                   value={courseDuration}
                   onChange={(e)=>{setduration(e.target.value)}}
                  placeholder="Enter the course duration" id="editCourseDuration"></input>
                  </Grid>

                  <Grid className='row1'>
                  
                  <textarea className='row1'
                   value={courseDescription}
                   onChange={(e)=>{setdescription(e.target.value)}}
                  placeholder="Enter the course description" id="editCourseDescription"></textarea>
                  </Grid>
                 
                  
               </Grid> 



               <Grid container className='row' columnSpacing="3" item xs={12} sm={4} md={12}>
                  <Grid className="row1">
                  <input type="text" className='row1' 
                   value={courseTiming}
                   onChange={(e)=>{settiming(e.target.value)}}
                  placeholder="Enter the course timing" id="editCourseTiming"></input>
                  </Grid>
                  
                 
               </Grid> 

               <div className='btnadd'>

<Button  variant="contained" 
onClick={updateCourse}
style={{margin:"5px"}} id="updateCourse" startIcon={<Add />} color="primary">Edit Course </Button> 
 
  </div> 
            </div>
    );
}

export default EditCourse;

