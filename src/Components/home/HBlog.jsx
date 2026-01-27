import { blog } from "../Dummydata";
import Title from "../common/title/Title";
import Zoom from "react-reveal/Zoom";

function HBlog() {
  return (
    <section className="blog">
      <Title subtitle="OUR BLOG" title="Recent From Blog" />
      <div className="container grid2">
        <Zoom>
          {blog.slice(0, 3).map((item) => (
            <div className="items">
              <div className="img ">
                <img src={item.cover} alt={item.title} />
              </div>
              <div className="text">
                <div className="flexSB">
                  <span>
                    <i class="fa fa-user"></i>
                    {item.type}
                  </span>
                  <span>
                    <i class="fa fa-calendar-alt"></i>
                    {item.date}
                  </span>
                  <span>
                    <i class="fa fa-comments"></i>
                    {item.com}
                  </span>
                </div>

                <h1 className="blogHeading">{item.title}</h1>
                <p className="blogDescription">{item.desc} </p>
              </div>
            </div>
          ))}
        </Zoom>
      </div>
    </section>
  );
}

export default HBlog;
