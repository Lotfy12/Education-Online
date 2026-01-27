import Back from "../common/back/Back";
import "./About.css";
import AboutCard from "./AboutCard";
import Footer from "../common/footer/Footer";
import Header from "../common/heading/Header";
function About() {
  return (
    <>
      <Header />
      <Back title="About us" />
      <AboutCard />
      <Footer />
    </>
  );
}

export default About;
