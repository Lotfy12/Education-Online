import { Fade } from "react-reveal";
import Title from "../../common/title/Title";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <Fade left>
            <div className="row">
              <Title
                subtitle="WELCOME TO ACADEMIA "
                title="BEST ONLINE EDUCATION"
              />
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <quote class="learning-quote">
                "Live as if you were to die tomorrow. Learn as if you were to
                live forever." – Mahatma Gandhi
              </quote>

    
            </div>
          </Fade>
        </div>
      </section>
      <div className="marigin"></div>
    </div>
  );
}

export default Hero;
