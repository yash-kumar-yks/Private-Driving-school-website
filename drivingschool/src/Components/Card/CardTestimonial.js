import React from 'react'
import './CardsTestimonial.css'
import { useState,useEffect } from 'react'
const CardTestimonial = ({data, handleMouseEnter, expanded,  handleMouseLeave}) => {
    const style = {
        height: expanded ? '300px' : '250px',
        border: expanded ? '1px solid #1718cf' : '1px solid #dbe2ea',
        backgroundColor: expanded ? '#f9f9f9' : '#ffffff',
        transition: 'all 0.3s ease',
        position: 'relative',
        transform: expanded ? 'translateY(-15px)' : 'translateY(0)'
    };
  return (
    <div className="Blog" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
    <div style={{ color: "#171c8f", fontSize: "1.25rem" }}>ADVANCE COURSE</div>
    <div className="Blog-Header" >{data.blog.title}</div>
    <p className='Blog-Body'> {data.blog.content}</p>
    <div style={{ color: "#171c8f", fontSize: "0.875rem" }}> {data.name} </div>
    <div style={{ color: "#000", fontSize: "0.875rem" }}> {data.address} </div>
    </div>
  )
}

export default CardTestimonial