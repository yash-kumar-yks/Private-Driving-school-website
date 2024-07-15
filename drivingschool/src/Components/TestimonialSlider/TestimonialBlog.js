// src/SliderComponent.js
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import "./TestimonialBlog.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import CardTestimonial from "../Card/CardTestimonial";
import SlideShow from "../../Utils/withSlideShow";
import Buttons from "../../UI/Buttons";

const SliderComponent = () => {
  const authState = useSelector((state) => state.auth); 
  const dispatch = useDispatch(); 
  const dataJson= authState.dataJson;
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 5;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        dispatch({ type: 'SET_DATA_JSON', payload: jsonData });
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
   
  }, []); 
  
    const [expanded, setExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const handleMouseEnter = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
};
const [blogsData, setBlogsData] = useState([]);
useEffect(() => {
const newBlogsData = [];

dataJson.forEach((data) => {
  data.blogs.forEach((blog) => {
    newBlogsData.push({ blog, name: data.name, address:data.address });
  });
});

setBlogsData(newBlogsData);
}, [dataJson]);


const handleLeftClick = () => {
  setVisibleStart((prev) => Math.max(prev - 1, 0));
};

const handleRightClick = () => {
  setVisibleStart((prev) => Math.min(prev + 1, blogsData.length - visibleCount));
};

const handleMouseLeave = () => {
  setExpandedId(null);
};


const buttons = 
<div>
<BsArrowLeftCircleFill onClick={handleLeftClick} className="leftHandClick" />
<BsArrowRightCircleFill
  onClick={handleRightClick}
  className="RightHandClick"
/>
 
</div>

; 
console.log(blogsData);


const cards = blogsData.slice(visibleStart, visibleStart + visibleCount).map((data, idx) => {
  return (
    <CardTestimonial 
      key={idx}
      data={data} 
      handleMouseEnter={() => handleMouseEnter(idx)} 
      expanded={expandedId === idx}
      handleMouseLeave={handleMouseLeave}
    />
  );
});

  return (
    <div className="TestimonialDiv">
    <div style={{display:"flex"}}>
      <h1 style={{margin:"20px"}}> They Advocate for us</h1>
      <div className="AddBlogButton" >
      {authState.isAuthenticated && (
      <Link to={`/Blogs`}>
      <Buttons backgroundColor="#171c8f" hoverColor="#ffffff">
      ADD BLOG
    </Buttons>
    </Link>)}
    </div>
    </div>
      <SlideShow
            flowCard={cards}
            isManual={true}
            buttons={buttons}
          />
    </div>
  );
};

export default SliderComponent;
