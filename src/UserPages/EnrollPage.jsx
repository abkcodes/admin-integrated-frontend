import "./EnrollPage.css"
// import Header from'../Components/Header';
// import Footer from'../Components/Footer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { padding } from '@mui/system';
import Add from '@mui/icons-material/Add';
import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";
import HeaderStudent from "../Components/HeaderStudent";

function EnrollPage(){
    let row1={
        marginTop:"15px",
        padding:"10px",
        marginRight:"90px",
        width:"350px",
        marginLeft:"30px"
    };
    let row={
        margintop:"10px",
        width:"100%"
    }
    let emailage={
        width:"500px",
        marginTop:"15px",
        padding:"10px",
        marginRight:"90px",
        marginLeft:"30px"
    };
    let emailagegrid={
        width:"500px",
        marginTop:"15px",
        padding:"3px",
        // marginRight:"90px",
        
        marginLeft:"30px"
    };

    let addrinfo={
        marginTop:"15px",
        padding:"10px",
        marginLeft:"120px",
        width:"815px",
        height:"290px",
        marginLeft:"14px"
    }

    let button={
        position:"relative",
        left:"750px",
        margin:"20px"
    }
    return(
        <div>
          <HeaderStudent/>
          <form action="" method="">
              <Grid container style={row} columnSpacing="3" item xs={12} sm={4} md={12}>
                  <Grid style={row1} >
                  <input type="text" style={row1} placeholder="enter your first name" id="firstName"></input>
                  </Grid>
                  <Grid style={row1}>
                  <input type="text"  style={row1} placeholder="enter your last name" id="lastName"></input>
                  </Grid>
                  <Grid style={row1}>
                  <input type="text" style={row1} placeholder="enter male or female" id="male/female"></input>
                  </Grid>
               </Grid>

              <Grid container style={row}   item xs={12} sm={4} md={12}>
                  <Grid style={row1}>
                  <input type="text" style={row1} placeholder="enter your father name" id="fatherName"></input>
                  </Grid>
                  <Grid style={row1}>
                  <input type="text" style={row1} placeholder="enter phone number" id="phoneNumber1"></input>
                  </Grid >
                  <Grid style={row1}>
                  <input type="text" style={row1} placeholder="enter alternate no" id="phoneNumber2"></input>
                  </Grid>
               </Grid>

               <Grid container style={row} item xs={12} sm={4} md={12}>
              
              <Grid >
                  <Grid style={row1}> <input style={row1} type="text"  placeholder="enter your mother name" id="motherName"></input> </Grid>
                  <Grid style={row1}> <input style={row1} type="text"  placeholder="enter emailId" id="emailId"></input>   </Grid>
                 <Grid style={emailagegrid} container  ><input style={emailage} type="text"  placeholder="enter your age" id="age"></input></Grid>
                  <Grid style={emailagegrid} container  ><input style={emailage} type="text"  placeholder="enter SSLC/HSC marks" id="HSCMarks"></input></Grid>
                  
                  </Grid>
                 
                  <Grid >
               <fieldset style={addrinfo} className="addressinfo">
                  <legend>Address Information</legend>
                  <label for="houseNo">House No   :</label>
                  <input className="element" type="text" id="houseNo" name="houseNo"></input> <br></br>
                  <label for="streetName">Street Name :</label>
                  <input className="element" type="text" id="streetName" name="streetName"></input><br></br>

                  <label for="areaName">Area Name   :</label>
                  <input className="element" type="text" id="areaName" name="areaName"></input>

                  <label for="pincode">Pincode     :</label>
                  <input  type="text" id="pincode" name="pincode"></input> <br></br>

                  <label for="state">State       :</label>
                  <input className="element" type="text" id="state" name="state"></input>
                  
                  <label  for="nationality">Nationality :</label>
                  <input  type="text" id="nationality" name="nationality"></input>
                  
              </fieldset>
              </Grid>
              <Grid style={button} item xs={3} sm={1} md={1} >
                  {/* <Link to="/admin/adduser/" style={{color:"white",textDecoration:"none"}}  target={"_blank"}> */}
                      <Button variant="contained" color="inherit" id="enrolNowButton" >Enroll Now</Button>
                      {/* </Link> */}
                      </Grid>  
                  </Grid>
                        
          </form>
          {/* <Footer /> */}
        <Outlet />

        </div>
    );

}

export default EnrollPage;