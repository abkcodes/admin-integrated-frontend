import "./Card.css";

import React from 'react';
import { Button } from "@mui/material";
import { Delete, Edit, Reviews, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

function UserCard(props) {
    return (
        <div>
           <div className="card">
  <img src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
   style={{width:"100%"}}/>
  <div className="container">
    <h4><b>R.k Institute of Technology</b></h4> 
    <p>Premier institute in engineering</p> 
  </div>
  <Link to="/user/Review"  style={{color:"white", textDecoration:"none"} } underline='none'>
  <div> <Button style={{marginLeft:"60px",marginBottom:"10px"}} startIcon={<Reviews/>}>Reviews</Button></div>
  </Link>
  {/* <div>
  <Link to="/admin/Edit"  style={{color:"white", textDecoration:"none"} } underline='none'>
      <Button startIcon={<Edit/>} variant="outlined">Edit</Button>
      </Link>
     
      <Button startIcon={<Delete/>} style={{marginLeft:"30px"}} variant="outlined">Delete</Button>
  </div> */}
</div>

           
        </div>
    );
}

export default UserCard;