import React, { useState } from 'react';
import './CoursesCard.css';
import Learner from "../../assets/Learner Extended Track Course.png";
import Card from '../Card/Card';
import SlideShow from '../SlideShow';
function CoursesCard() {
    const datajson = [
        {
            "CourseHour": "21",
            "Amount": "5200",
            "CourseModule": "6"
        },
        {
            "CourseHour": "23",
            "Amount": "5800",
            "CourseModule": "7"
        },
        {
            "CourseHour": "25",
            "Amount": "6200",
            "CourseModule": "8"
        },
        {
            "CourseHour": "31",
            "Amount": "7200",
            "CourseModule": "10"
        }


    ];
    const [countcardsVisible, setCountcardsVisible] = useState(0);

    const cards = datajson.map((data, idx) => {
        if(idx===countcardsVisible || idx===countcardsVisible+1){
        return (
            <Card data={data}/>
        )
    }
    })

const handleLeftClick=()=>{
    countcardsVisible===0?setCountcardsVisible(datajson.length-1):setCountcardsVisible(countcardsVisible-1);
}
const handleRightClick=()=>{
    countcardsVisible===datajson.length-1?setCountcardsVisible(0):setCountcardsVisible(countcardsVisible+1);
}
  




const buttons=()=>{
    return(
        <div>
<button onClick={handleLeftClick}> left </button>
<button onClick={handleRightClick}> right </button>
</div>
    )
}

    return (
        <div>
        <div className='HeaderCourse'>
            <h1>CHOOSE YOUR COURSE TO DRIVE WITH CONFIDENCE ON THE ROAD</h1>
            <p style={{paddingRight: "100px"}}>
                Our meticulously designed courses help transform beginners into skilled
                and confident drivers. Choose your desired course from a range of driving training
                courses and master the skill of driving at Maruti Suzuki Driving School.
            </p>
        </div>
       <div  >
        <div>
                <SlideShow flowCard={cards} isAutomatic={true} buttons={buttons} />
                </div>
         </div>
        </div>
        );
}

export default CoursesCard