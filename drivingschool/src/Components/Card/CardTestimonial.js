import React from 'react'
import './CardsTestimonial.css'
import { useState } from 'react'
const CardTestimonial = ({data, handleClick, expanded }) => {
    const style = {
        height: expanded ? '300px' : '250px',
        border: expanded ? '1px solid #1718cf' : '1px solid #dbe2ea',
        backgroundColor: expanded ? '#f9f9f9' : '#ffffff',
        transition: 'all 0.3s ease',
        position: 'relative',
        transform: expanded ? 'translateY(-25px)' : 'translateY(0)'
    };
  
  return (
   
    <div className="Blog" onClick={handleClick} style={style}>
    <div style={{ color: "#171c8f", fontSize: "1.25rem" }}>ADVANCE COURSE</div>
    <div className="Blog-Header" >{data.Heading}</div>
    <p className='Blog-Body'> {data.Body}</p>
    <div style={{ color: "#171c8f", fontSize: "0.875rem" }}> {data.User} </div>
    </div>
  )
}

export default CardTestimonial