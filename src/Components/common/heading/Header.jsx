import Head from "./Head";
import "./Header.css";
import "../../../Components/home/hero/Hero.css";
import NavBar from "./NavBar";

import Fade from "react-reveal/Fade";

function Header() {
  return (
    <Fade top>
      <div>
        <Head />
        <NavBar />
      </div>
    </Fade>
  );
}

export default Header;
