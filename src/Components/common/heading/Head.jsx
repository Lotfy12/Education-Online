import { NavLink } from "react-router-dom";

function Head() {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <NavLink to="/" className="logo">
            <img
              src="../../../../public/Education.png"
              alt="Education Logo"
              className="logoo"
            />
          </NavLink>

          <div className="social">
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
            <i className="fab fa-facebook-f icon"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
