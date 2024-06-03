import React, { useState } from "react";
import "./CoursesCard.css";
import Learner from "../../assets/Learner Extended Track Course.png";
import Card from "../Card/Card";
import SlideShow from "../../Utils/withSlideShow";
import Dropdown from "../../UI/Dropdown.js";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import FindyourCity from "../Map/FindyourCity.js";

function CoursesCard() {
  const datajson = [
    {
      CourseHour: "21",
      Amount: "5200",
      CourseModule: "6",
    },
    {
      CourseHour: "23",
      Amount: "5800",
      CourseModule: "7",
    },
    {
      CourseHour: "25",
      Amount: "6200",
      CourseModule: "8",
    },
    {
      CourseHour: "31",
      Amount: "7200",
      CourseModule: "10",
    },
  ];
  const [countcardsVisible, setCountcardsVisible] = useState(0);
  let indexVar=0;
  const cards = datajson.map((data, idx) => {
    
    if(countcardsVisible===datajson.length-1 )
    indexVar=0;
    else
    indexVar=countcardsVisible + 1;

    if (idx === countcardsVisible || idx === indexVar) {
      return <Card data={data} />;
    }
  });


  const handleLeftClick = () => {
    countcardsVisible === 0
      ? setCountcardsVisible(datajson.length - 1)
      : setCountcardsVisible(countcardsVisible - 1);
  };
  const handleRightClick = () => {
    countcardsVisible === datajson.length - 1
      ? setCountcardsVisible(0)
      : setCountcardsVisible(countcardsVisible + 1);
  };

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const handleSelect = (selectedValue) => {
    alert(`Selected value: ${selectedValue}`);
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



  return (
    <div>
      <div className="HeaderCourse">
        <h1>CHOOSE YOUR COURSE TO DRIVE WITH CONFIDENCE ON THE ROAD</h1>
        <p style={{ paddingRight: "100px" }}>
          Our meticulously designed courses help transform beginners into
          skilled and confident drivers. Choose your desired course from a range
          of driving training courses and master the skill of driving at Maruti
          Suzuki Driving School.
        </p>
      </div>
      
        <div>
          <SlideShow
            flowCard={cards}
            isAutomatic={true}
            buttons={buttons}
          />
        </div>
     <div>
     <FindyourCity/>
     </div>
      
    </div>
  );
}

export default CoursesCard;
