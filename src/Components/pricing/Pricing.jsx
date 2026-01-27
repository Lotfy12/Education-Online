import Header from "../common/heading/Header";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import Faq from "./Faq";
import "./Price.css";
import Footer from "../common/footer/Footer";

function Pricing() {
  return (
    <>
      <section className="pricing">
        <Header />
        <Back title="Chose the right plan" />
        <PriceCard />
        <Faq />
        <Footer />
      </section>
    </>
  );
}

export default Pricing;
