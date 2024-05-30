import React from 'react';
import './CoursesCard.css';
import Learner from "../../assets/Learner Extended Track Course.png";
import Card from '../Card';
function CoursesCard() {


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
           
            <div classname='All-Cards-Info'>
                <div className='Cards'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
             </div>

             <div>
                </div>
            </div>
        </div>
    );
}

export default CoursesCard