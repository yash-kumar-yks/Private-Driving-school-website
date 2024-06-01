import React, { useState } from 'react';
import './CoursesCard.css';
import Learner from "../../assets/Learner Extended Track Course.png";
import Card from '../Card/Card';
function CoursesCard() {
    const [countCardAppear, setCountCardAppear] = useState(0);
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
       
        <div className='Cards'>
        {datajson&&datajson.map((data, idx) => {
           
            if(idx===countCardAppear || idx===countCardAppear+1){
                console.log(idx);
            return (

            <div>
                <Card data={data}/>
         </div>
        );
    }
    
    })}
    
        
        </div>
    </div>
    );
}

export default CoursesCard