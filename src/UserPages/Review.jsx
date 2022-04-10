import { useState,React,useEffect } from "react";
import HeaderStudent from '../Components/HeaderStudent';
import "./Review.css"



function Review(props) {
  
const [data,setData]=useState([]);

useEffect(()=>{
 getusers();
},[]);

function getusers(courseId){
  fetch(`http://localhost:8080/getReviewsByCourseId/`)
  .then((response)=>response.json())
  .then((p) => setData(p)
       
  );
}
    return (
        <div>
            <HeaderStudent/>
            {data.map(datas=>(
            <div 
            key={datas.courseId}
            className="card">
  {/* <img src="img_avatar.png"  style={{width:"100%"}}/> */}
 
  <div className="container">
    <h4><b>{datas.userId}</b></h4> 
    <p>{datas.message}</p> 
    <p>{datas.starRating}</p>
  </div>
</div>
             ))} 
        </div>
    );
}

export default Review;