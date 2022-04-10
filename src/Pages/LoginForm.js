import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
//import { Redirect } from 'react-router-dom'


const p={
    fontSize: "10px",
    marginTop:"5px",
    marginBottom:"0px",
    fontStyle:"italic",
    fontWeight: "bold",
    color:"black"
    
}
const h1={
    fontSize: "15px",
    color: "#a40865"
}
const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
} 
const butt={
    
    backgroundColor: "#a40865",
    color:"white",
    cursor:'pointer'
}
const di={
    height:"600px",
    width: "350px"
    
}


const LoginForm = ({history}) => {
 const[usear,setUsear]=useState({
        email:"",passworld:""
    })
   
     let name,value 
    const handleInputs =(e) =>{
        console.log(e);
         name=e.target.name;
         value=e.target.value;
    
         setUsear({...usear,[name]:value}) 
    }
        
     
    const re=async(event) =>{
       
        event.preventDefault();
        
     const{email,passworld} =usear 
       if(email && passworld){
            
       axios.post("http://localhost:9002/Login",usear)
        .then(
            res=>{ alert(res.data.message)
              //  let a=[]
              //  a =JSON.stringify(res.data.user)
               if(res.data.user.use==="Usear"){
                 //  auth.login(()=>{
                     //  history.push('user/HomepageStudent')
                     //<Navigate to="user/HomepageStudent" />
                   //  window.location.href="user/HomepageStudent"
                 //  })

                 localStorage.setItem('user','res.data.user')
                 window.location.href="user/HomepageStudent"
                }
                else if(res.data.user.use==="Admin") {
                   // auth.login(()=>{
                        //  history.push('user/HomepageStudent')
                       // <Navigate to="user/HomepageStudent" />
                    //    window.location.href="admin/DisplayUser"
                    //  })
                    localStorage.setItem('admin','res.data.user')
                    window.location.href="admin/ViewInstitute"

                }
                          
            }
        )
         

        }
        else
        {
            alert("Email or Passworld can't be empty"
            )
        }
         
    }
   
 
   

  return ( 
      
    <div className='first' style={di} >
         <h1 style={heading}> PG Admission  </h1>  
          <h1 style={heading}> Login </h1><br></br>
      <form className='second'>
         
          <input type="text" id="email" 
                placeholder="Enter email" name='email'  value={usear.email} onChange= {handleInputs}  autoComplete="off" required/>
                <br></br>
             < input type="password" name='passworld' value={usear.passworld} onChange= {handleInputs}  id="password" autoComplete='off'  placeholder="Enter passworld"  required/> 
          
            <br></br>
          
          <input type="button"  id="loginButton" onClick={re} value="Login" style={butt}/>
          <h1 style={p} >  New User/admin?</h1>
          <a href="/Register"  id="signupLink" style={h1} > Sign up</a>  
          
      </form>
    </div>
  
  )
}

export default  LoginForm