import { blog } from "../Dummydata";
import Zoom from "react-reveal/Zoom";

function BlogCard() {
  return (
    <section className="blog">
      <div className="container grid2 componentSpace">
        <Zoom>
          {blog.map((item) => (
            <div className="items" key={item.id}>
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

export default BlogCard;
