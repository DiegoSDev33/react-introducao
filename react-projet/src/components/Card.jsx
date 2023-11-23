import React from 'react'
import '../components/Card.css'
import { FaHeart } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { food } from "../data/food";

function card() {

return (
    <div className='card-flex'>
        {food.map((item) => {
    return (
  
        <>
       <div className='card'>
        <img src={item.image} alt="" />
        <h5>{item.title}</h5>
        <h6>{item.desc}</h6>
        <div className='icons-midia'>
        <FaHeart />
        <AiOutlineLike />
        <FaCommentDots />
        </div>
       </div>
       
    
    
    
        </>
      
      )
    }
    
)}
    </div>
)
}

export default card