import Learner from "../../assets/Learner Extended Track Course.png";
import "./Card.css";
function Card({ data }) {
  return (
    <div className="Card">
      <img className="Card-image" src={Learner}></img>
      <div className="First-statement">
        <h1>Learner Standard Track Course</h1>
        <p>
          If you've never been behind the steering wheel, this course is for
          you. At the end of 21 days, you'll know the basic traffic rules and
          have a hands-on driving experience through...
        </p>
      </div>

      <div className="Second-statement">
        <div className="NumberofCourse" style={{ fontSize: "48px" }}>
          <span>{data.CourseModule}</span>
        </div>
        <div className="vl"></div>
        <div className="v2">
          <h3 style={{ padding: "5px" }}>Number of Modules</h3>
          <p>
            Get comprehensive understanding of driving through well designed
            modules.
          </p>
        </div>
      </div>

      <div className="Second-statement">
        <div className="NumberofCourse" style={{ fontSize: "48px" }}>
          {data.CourseHour}
        </div>
        <div className="vl"></div>
        <div className="v2">
          <h3 style={{ padding: "5px" }}>Number of Hours</h3>
          <p>
            Get acquainted with nunances of driving theory, practical and
            simulator sessions.
          </p>
        </div>
      </div>
      <div className="CourseInfo">
        <div className="Amount">₹{data.Amount}*</div>

        <p>(Starting course fee)</p>

        <button  className="ViewCourseButton"> VIEW COURSE</button>
      </div>
      
      <div className="CourseInfoParagraph">
        Price can vary from city to city. For accurate pricing, please check the
        course details page. (Prices are exclusive of 18% GST)
      </div>
    </div>
  );
}

export default Card;
