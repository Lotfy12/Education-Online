import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Testimonial from "./testimonial/Testimonial";

import Hero from "./hero/Hero";
import HBlog from "./HBlog";
import HPrice from "./HPrice";
import Footer from "../common/footer/Footer";
import Header from "../common/heading/Header";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
      <HBlog />
      <HPrice />
      <Footer />
    </>
  );
}

export default Home;
