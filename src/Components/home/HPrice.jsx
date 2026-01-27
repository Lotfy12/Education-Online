import { price } from "../Dummydata";
import Title from "../common/title/Title";
import "../pricing/Price.css";
import Zoom from "react-reveal/Zoom";

function HPrice() {
  return (
    <>
      <section className="pricing componentSpace">
        <Title subtitle="OUR PRICING" title="Pricing & Packages" />
        <Zoom>
          <div className="container grid4">
            {price.map((item) => (
              <div className="items">
                <h4>{item.name}</h4>

                <h1 className="pricingHeader">
                  <span>$</span>
                  {item.price}
                </h1>
                <p className="pricingParagraph">{item.desc}</p>
                <button className="outline-btn">GET STARTED</button>
              </div>
            ))}
          </div>
        </Zoom>
      </section>
    </>
  );
}

export default HPrice;
