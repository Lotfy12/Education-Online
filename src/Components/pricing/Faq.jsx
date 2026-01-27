import { useState } from "react";
import Title from "../common/title/Title";
import { faq } from "../Dummydata";
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Title subtitle="FAQS" title="Frequently Asked Questions" />
      <section className="faq componentSpace">
        <div className="container">
          {faq.map((item, index) => (
            <div className="box" key={item.desc}>
              <button className="accordion" onClick={() => toggleItem(index)}>
                <h2>{item.title}</h2>
                <span>
                  {openIndex === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="text">
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Faq;
