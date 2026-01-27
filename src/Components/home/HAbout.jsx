import React from "react";
import { coursesCard } from "../Dummydata";
import OnlineCourses from "../allcourses/OnlineCourses";
import Title from "../common/title/Title";
import Zoom from "react-reveal/Zoom";

function HAbout() {
  return (
    <>
      <section className="coursesCard ">
        <Title
          subtitle="OUR COURSES"
          title="Explore Our Popular Online Courses"
        />
        <div className="container grid2">
          <Zoom>
            {coursesCard.slice(0, 3).map((item) => (
              <div className="items" key={item.id}>
                <div className="content ">
                  <div className="left">
                    <div className="img">
                      <img src={item.cover} alt="courses-cover" />
                    </div>
                  </div>
                  <div className="right">
                    <h1>{item.coursesName}</h1>
                    <div className="rating">
                      <input
                        type="radio"
                        name={`rate-${item.id}`}
                        id={`star5-${item.id}`}
                        value="5"
                      />
                      <label
                        htmlFor={`star5-${item.id}`}
                        title="5 stars"
                      ></label>

                      <input
                        type="radio"
                        name={`rate-${item.id}`}
                        id={`star4-${item.id}`}
                        value="4"
                      />
                      <label
                        htmlFor={`star4-${item.id}`}
                        title="4 stars"
                      ></label>

                      <input
                        type="radio"
                        name={`rate-${item.id}`}
                        id={`star3-${item.id}`}
                        value="3"
                        checked
                      />
                      <label
                        htmlFor={`star3-${item.id}`}
                        title="3 stars"
                      ></label>

                      <input
                        type="radio"
                        name={`rate-${item.id}`}
                        id={`star2-${item.id}`}
                        value="2"
                      />
                      <label
                        htmlFor={`star2-${item.id}`}
                        title="2 stars"
                      ></label>

                      <input
                        type="radio"
                        name={`rate-${item.id}`}
                        id={`star1-${item.id}`}
                        value="1"
                      />
                      <label
                        htmlFor={`star1-${item.id}`}
                        title="1 star"
                      ></label>
                    </div>
                    <div className="details">
                      {item.courTeacher.map((details) => (
                        <div className="box" key={details.name}>
                          <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4 className="instructor-name">{details.name}</h4>
                          </div>
                        </div>
                      ))}
                      <div>
                        <span> {item.courTeacher.totalTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <h3>
                    {item.priceAll} / {item.pricePer}
                  </h3>
                </div>
                <button className="outline-btn">ENROLL NOW !</button>
              </div>
            ))}
          </Zoom>
        </div>
      </section>
      <OnlineCourses />
    </>
  );
}

export default HAbout;
