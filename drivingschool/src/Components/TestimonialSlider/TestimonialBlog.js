// src/SliderComponent.js
import React, { useState } from "react";

import "./TestimonialBlog.css";
import CardTestimonial from "../Card/CardTestimonial";
import SlideShow from "../../Utils/withSlideShow";

const SliderComponent = () => {
  const datajson = [
    {
      Heading: "THis snsn sncsinc scniscn scniscnis scnisncis sc iscn",
      Body: " Training experts and advanced curriculum at Maruti Suzuki Driving School makes learning a very engaging and interesting process. Thank you for helping me master the skill of driving.",
      User: "Yash",
    },
    {
      Heading: "23",
      Body: "5800",
      User: "Yash",
    },
    {
      Heading: "25",
      Body: "6200",
      User: "Yash",
    },
    {
      Heading: "31",
      Body: "7200",
      User: "Yash",
    },
    {
      Heading: "31",
      Body: "7200",
      User: "Yash",
    },
    {
      Heading: "31",
      Body: "7200",
      User: "Yash",
    },
    {
      Heading: "31",
      Body: "7200",
      User: "Yash",
    },
  ];
  
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
      <h1 style={{margin:"20px"}}> They Advocate for us</h1>
      <SlideShow
            flowCard={cards}
            isAutomatic={true}
            buttons={buttons}
          />
    </div>
  );
};

export default SliderComponent;
