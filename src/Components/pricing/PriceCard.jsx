import { price } from "../Dummydata";
import Zoom from "react-reveal/Zoom";

function PriceCard() {
  return (
    <>
      <Zoom>
        <div className="container grid ">
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
    </>
  );
}

export default PriceCard;
