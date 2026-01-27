import { NavLink } from "react-router-dom";
import { useState } from "react";
function NavBar() {
  const [click, setClick] = useState(false);

  return (
    <div>
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/CoursesHome">AllCourses</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/Pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/Blog">Journal</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
          <div className="start">
            <div className="button">get certificate</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
