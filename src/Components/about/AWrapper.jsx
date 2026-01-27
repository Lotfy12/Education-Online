import { awrapper } from "../Dummydata";
import Zoom from "react-reveal/Zoom";

function AWrapper() {
  return (
    <>
      <section className="awrapper  graduation-background">
        <Zoom>
          <div className=" grid container">
            {awrapper.map((item) => (
              <div key={item.title} className="box flex">
                <div className="img">
                  <img src={item.cover} alt="graduation-img" />
                </div>
                <div className="text">
                  <h1>{item.data}</h1>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Zoom>
      </section>
    </>
  );
}

export default AWrapper;
