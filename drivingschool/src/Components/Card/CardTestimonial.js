import React from 'react'
import './CardsTestimonial.css'
const CardTestimonial = ({data}) => {
  return (
    <div className="Blog">
    <div style={{ color: "#171c8f", fontSize: "1.25rem" }}>ADVANCE COURSE</div>
    <div className="Blog-Header" >{data.Heading}</div>
    <p className='Blog-Body'> {data.Body}</p>
    <div style={{ color: "#171c8f", fontSize: "0.875rem" }}> {data.User} </div>
    </div>
  )
}

export default CardTestimonial