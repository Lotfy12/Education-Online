import { online } from "../Dummydata.js";
import Title from "../common/title/Title.jsx";
import "./Courses.css";
import Zoom from "react-reveal/Zoom";

function OnlineCourses() {
  return (
    <section className="online componentSpace ">
      <Title subtitle="COURSES" title="Browse Our Online Courses" />

      <div className="container grid3">
        <Zoom>
          {online.map((item) => (
            <div className="box" key={item.course}>
              <div className="img">
                <img src={item.cover} alt="courseIcon" className="courseIcon" />
                <img src={item.hoverCover} alt="" className="show" />
              </div>
              <h1 className="courseName">{item.courseName}</h1>
              <span className="numberOfCourses">{item.course} </span>
            </div>
          ))}
        </Zoom>
      </div>
    </section>
  );
}

export default OnlineCourses;
