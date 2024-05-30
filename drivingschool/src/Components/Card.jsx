import Learner from "../assets/Learner Extended Track Course.png";
import './Card.css'
function Card() {
    return (
        <div className="Card">
            <img className="Card-image" src={Learner}></img>
            <div className="First-statement">
                <h1>Learner Standard Track Course</h1>
                <p>If you've never been behind the steering wheel, this course is for you.
                    At the end of 21 days, you'll know the basic traffic rules and have a hands-on driving experience through...</p>
            </div>

            <div className="Second-statement">
            <h1 className="NumberofCourse" style={{ fontSize: "48px"}}> 6</h1>
            <div class="vl"></div>
            <div className="v2">
                <h3 style={{ padding: "5px" }}>Number of Modules</h3>
                <p>Get comprehensive understanding of driving through well designed modules.</p></div>
                
            </div>

        </div>
    );
}

export default Card