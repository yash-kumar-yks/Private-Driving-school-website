// src/SliderComponent.js
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import "./TestimonialBlog.css";
import CardTestimonial from "../Card/CardTestimonial";
import SlideShow from "../../Utils/withSlideShow";
import Buttons from "../../UI/Buttons";

const SliderComponent = () => {
  const authState = useSelector((state) => state.auth); 

  const datajson = authState.user?.blogs ?? [];
    const [expanded, setExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const handleClick = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
};
 



  const buttons=<div></div>;
  const [countcardsVisible, setCountcardsVisible] = useState(0);
  
  const cards = datajson.map((data, idx) => {
    return <CardTestimonial key={idx}
    data={data}   handleClick={() => handleClick(idx)}
    expanded={expandedId === idx}/>;
  });


  return (
    <div className="TestimonialDiv">
    <div style={{display:"flex"}}>
      <h1 style={{margin:"20px"}}> They Advocate for us</h1>
      <div className="AddBlogButton" >
      <Link to={`/Blogs`}>
      <Buttons backgroundColor="#171c8f" hoverColor="#ffffff">
      ADD BLOG
    </Buttons>
    </Link>
    </div>
    </div>
      <SlideShow
            flowCard={cards}
            isAutomatic={true}
            buttons={buttons}
          />
    </div>
  );
};

export default SliderComponent;
