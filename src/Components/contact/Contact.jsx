import Header from "../common/heading/Header";
import Back from "../common/back/Back";
import Footer from "../common/footer/Footer";
import "./Contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const map = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d438354.7793179502!2d31.028994!3d30.868564699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1696949454185!5m2!1sar!2seg`;
  return (
    <>
      <Header />
      <Back title="Contact us " />
      <section className="contacts componentSpace ">
        <div className="container flexSB2">
          <Fade left>
            <div className="left row">
              <iframe src={map} title="Google Maps"></iframe>
            </div>
          </Fade>
          <Fade right>
            <div className="right row">
              <h1>Contact us</h1>
              <p>We're open for any suggestion or just to have a chat</p>

              <div className="items grid2">
                <div className="address">
                  <h4>ADDRESS:</h4>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="address">
                  <h4>EMAIL:</h4>
                  <p> info@yoursite.com</p>
                </div>
                <div className="address">
                  <h4>PHONE:</h4>
                  <p> + 1235 2355 98</p>
                </div>
              </div>

              <form action="">
                <div className="flexSB2">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea cols="30" rows="10">
                  Create a message here...
                </textarea>
                <button className="primary-btn">SEND MESSAGE</button>
              </form>

              <h3>Follow us here</h3>
              <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
          </Fade>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
