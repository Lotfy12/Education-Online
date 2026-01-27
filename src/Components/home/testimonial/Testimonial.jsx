import Title from "../../common/title/Title";
import "./Testimonial.css";
import { testimonial } from "../../Dummydata";
import Zoom from "react-reveal/Zoom";

function Testimonial() {
  return (
    <>
      <section className="testimonial ">
        <div className="container">
          <Title subtitle="TESTIMONIAL" title="Our Successful Students" />

          <div className="content grid2">
            <Zoom>
              {testimonial.map((item) => (
                <div className="items" key={item.id}>
                  <div className="box flex">
                    <div className="img">
                      <img src={item.cover} alt={item.cover} />
                      <i className="fa fa-quote-left icon"></i>
                    </div>
                    <div className="name">
                      <h2>{item.name}</h2>
                      <span>{item.post}</span>
                    </div>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </Zoom>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
