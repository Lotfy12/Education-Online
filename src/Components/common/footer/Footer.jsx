import { blog } from "../../Dummydata";
import "./Footer.css";
import Fade from "react-reveal/Fade";

import "../heading/Header.css";
import { NavLink } from "react-router-dom";
function Footer() {
  const getFullYear = new Date().getFullYear();
  return (
    <>
      <section className="newLetter">
        <div className="container flexSB">
          <Fade left>
            <div className="left">
              <h1> Newsletter - Stay tune and get the latest update</h1>
              <p>Far far away, behind the word mountains</p>
            </div>
          </Fade>
          <Fade right>
            <div className="right row">
              <input type="email" placeholder="Enter email address"></input>
              <i class="fa fa-paper-plane"></i>
            </div>
          </Fade>
        </div>
      </section>
      <footer>
        <div className="container ">
          <Fade bottom cascade duration={2000}>
            <div className="link">
              <NavLink to="/">
                <img
                  src="/src/Components/common/heading/Education.png"
                  alt="Education Logo"
                  className="logoFooter"
                />
              </NavLink>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="flexSB">
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-facebook-f icon"></i>
              </div>
            </div>
            <div className="link">
              <h3>Explore</h3>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="link">
              <h3>Quick Links</h3>
              <ul>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
                <li>Feedbacks</li>
              </ul>
            </div>
            <div className="link">
              <h3>Recent Post</h3>
              {blog.slice(0, 3).map((item) => (
                <div className="flexSB" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt={item.title} />
                  </div>
                  <div className="text">
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{item.date}</label>
                    </span>
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{item.type}</label>
                    </span>
                    <h4>{item.title.slice(0, 40)}...</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="link">
              <h3>Have a Question?</h3>
              <ul>
                <li>
                  <i className="fa fa-map"></i>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </li>
                <li>
                  <i className="fa fa-phone-alt"></i>
                  +2 392 3929 210
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>
                  info@yourdomain.com
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </footer>
      <div className="legal">
        <Fade bottom>
          <p>
            Copyright {getFullYear} All rights reserved | This template is made
            with
            <i className="fa fa-heart"></i> by Mohamed Lotfy
          </p>
        </Fade>
      </div>
    </>
  );
}

export default Footer;
