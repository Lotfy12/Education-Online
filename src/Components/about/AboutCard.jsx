import React from "react"; // Import React if it's not already imported
import Title from "../common/title/Title";
import { homeAbout } from "../Dummydata";
import AWrapper from "./AWrapper";
import Fade from "react-reveal/Fade";

function AboutCard() {
  return (
    <>
      <div className="aboutSection">
        <div className="container flexSB">
          <Fade left>
            <div className="left-row">
              <img
                src="/images/about.webp"
                alt="Student"
                className="img-learner"
              />
            </div>
          </Fade>
          <Fade right>
            <div className="right-row">
              <Title
                subtitle="LEARN ANYTHING"
                title="Benefits About Online Learning Expertise"
              />
              <div className="items">
                {homeAbout.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="img">
                      <img src={item.cover} alt={item.title} />
                    </div>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <AWrapper />
    </>
  );
}

export default AboutCard;
