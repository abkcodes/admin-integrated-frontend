import React, { useState } from 'react'
//import { Redirect } from 'react-router-dom'
import './regis.css'
//import { useHistory } from 'react-router-dom';
import axios from 'axios'

 const labe={
  backgroundColor:'#F8EFF4',
  borderRadius:'20px',
  height:'30px',
  width:'250px',
  textAlign:'center',
  border:'1px solid black'
 }
  const p={
    fontSize: "10px",
    margin:"5px",
    
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
    height:"800px",
    
    
    
}

const Regis = ({history}) => {
 //let history=useHistory()
 

  const[usear,setUsear]=useState({
    use:"",email:"",name:"",mobile:"",passworld:"",cpassworld:""
});
  let name,value;
const handleInputs =(e) =>{
    console.log(e);
     name=e.target.name;
     value=e.target.value;

     setUsear({...usear,[name]:value}) 
}
 
  
    const re = async(event) => {
        event.preventDefault();
        const{use,email,name,mobile,passworld,cpassworld} =usear

      
       if(use && email && name &&mobile && passworld &&cpassworld &&(passworld===cpassworld) ){
       // history.push('/user/login')
       
       axios.post('http://localhost:9002/Register',usear)
         .then(res=>{
             alert(res.data.message)
           //  history.push('/Login')
           window.location.href="/Login"
         })
 
      
    }
    else alert('invalid input')

    }

  return (
    
      <div className='first' style={di} >
      <h1 style={heading}> PG Admission Registration </h1> <br></br>
      
      <form className='second'>
             <label  >
                 <input list="adminUsear" name='use' placeholder="Enter admin/user"  value={usear.use} onChange= {handleInputs} style={labe}/>
             </label>
             <datalist id="adminUsear" >
                 <option value="Admin" />
                  <option value="Usear"/>
             </datalist>
             <br></br>
             <input type="text" name='email' id="email" value={usear.email} onChange= {handleInputs}
             placeholder="Enter email" size="50px" width="100px"   required/><br></br>
             <input type="text" id="username" name='name' value={usear.name} onChange= {handleInputs}
             placeholder="Enter Usearname" size="50px" width="100px"   required/><br></br>
             <input type="text" id="mobileNumber" name='mobile' value={usear.mobile} onChange= {handleInputs}
              maxlength="10" placeholder="Enter mobileNumber" size="50px" width="100px"   required/><br></br>
             <input type="password" id="password" name='passworld' value={usear.passworld} onChange= {handleInputs}
             placeholder="Enter password" size="50px" width="100px"   required/><br></br>
             <input type="password" id="confirmPassword" name='cpassworld' value={usear.cpassworld} onChange= {handleInputs}
             placeholder="Confirm password" size="50px" width="100px"   required/><br></br>
             <input type="button" id="submitButton"  
              value="Submit" onClick={re} style={butt}/>
               
            <p style={p}>   Already a user?  </p>
            <a href="/Login" style={h1} id="signinLink" >Login</a> 
              
         </form>
      </div>
  )
}

export default Regis;