import "./AddUser.css"
import Header from'../Components/Header';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { padding } from '@mui/system';
import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";
import { useEffect, useState } from "react";

function EditUser(props){
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
        marginLeft:"24px"
    }

    let button={
        position:"relative",
        left:"587px",
        margin:"20px"
    }

//     const [data,setData]=useState([]);

//     useEffect(()=>{
//      getusers();
//     },[]);
    
//     function getusers(){
//       fetch("http://localhost:8080/UserModel")
//       .then((response)=>response.json())
//       .then((p) => setData(p)
           
//       );
//     }
    


//     function selectUser(id){
//         let item=
//         setName={data.name}

//     }

// function updateUser()
// {
//     let item={name,mobileNumber,email,password}
// }
const[data,setData]=useState('')
const[name,setName]=useState('')
const[mobileNumber,setMobile]=useState('')

const[password,setPassword]=useState('')
const[email,setEmail]=useState('')
const[id,setid]=useState('')
// function getUsers(){
//     fetch("http://localhost:8080/UserModel").then((result)=>{
//        result.json().then((resp)=>{
//           setUser(resp)
//           setName(rsep[0].name)
//           setEmail(rsep[0].email)
//           setMobile(rsep[0].mobileNumber)
//           setid(rsep[0].id)
//           setPassword(rsep[0].password)
//        })
//     })
//     }

//     function selectUser(id)
// {
// console.alert("function called",users[id-1])
// let item=users[id-1]
// setName(item.name)
// setEmail(item.email)
// setMobile(item.mobileNumber)
// setid(item.id)
// setPassword(item.password)
// }
console.warn("props",id)
useEffect(async()=>{
    let result=await fetch("http://localhost:8080/UserModel"+id)
    result=await result.json();
    setData(result)
    setName(result.name)
    setEmail(result.email)
    setMobile(result.mobileNumber)
    setPassword(result.password)
},[])

function editProduct(id)
{
   const formData=new FormData();
   formData.append('name',name)
   formData.append('email',email)
   formData.append('mobileNumber',mobileNumber)
   formData.append('password',password)
   let result= fetch("http://localhost:8080/UserModel"+id,{
       method:'POST',
       body:formData
   });
   alert("updated")

}

console.warn(this.props.match.params.id);


    return(
        <div>
          <Header/>
          <form action="" method="" >
              <Grid container style={row} columnSpacing="3" item xs={12} sm={4} md={12}>
                  <Grid style={row1} >
                  <input type="text" style={row1}
                  
                  onChange={(e)=>{setName(e.target.value)}}
                  defaultValue={data.name}
                  placeholder="enter your first name" id="firstName"></input>
                  </Grid>
                  <Grid style={row1}>
                  <input type="text"  style={row1}
                
                  onChange={(e)=>{setEmail(e.target.value)}}
                  defaultValue={data.email}

                  placeholder="enter your last name" id="lastName"></input>
                  </Grid>
                  <Grid style={row1}>
                  <input type="text" style={row1}
                  
                  onChange={(e)=>{setMobile(e.target.value)}}
                  defaultValue={mobileNumber}
                  placeholder="enter male or female" id="male/female"></input>
                  </Grid>
               </Grid>

              <Grid container style={row}   item xs={12} sm={4} md={12}>
                  <Grid style={row1}>
                  <input type="text" style={row1}
                
                  onChange={(e)=>{setPassword(e.target.value)}}
                  defaultValue={password}alue={password}
                  placeholder="enter your father name" id="fatherName"></input>
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
                  <Grid style={row1}> <input style={row1} type="text"  placeholder="enter your mother name" id="motherName"></input>  
                  </Grid>
                  <Grid style={row1}> <input style={row1} type="text"  placeholder="enter emailId" id="emailId"></input>  
                  </Grid>
                 <Grid style={emailagegrid} container  ><input style={emailage} type="text"  placeholder="enter your age" id="age"></input></Grid>
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
              <Link to="/admin/DisplayUser" style={{color:"Black",textDecoration:"none"}}  >  
              <Grid style={button} item xs={3} sm={1} md={1} ><Button 
               onClick={editProduct}
                variant="contained" color="inherit" >Edit user</Button></Grid>
              </Link>
              <Link to="/admin/DisplayUser" style={{color:"red",textDecoration:"none"}}  >  
              <Grid style={button} item xs={3} sm={1} md={1} ><Button variant="contained" color="inherit" >Cancel</Button></Grid>  
              </Link>
                  </Grid>

                  

               
 
               



              

              
          </form>
        </div>
    );

}

export default EditUser;