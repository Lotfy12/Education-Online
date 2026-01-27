import Header from "../common/heading/Header";
import Back from "../common/back/Back";
import Footer from "../common/footer/Footer";

import "./Blog.css";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <>
      <Header />
      <Back title="Blog posts" />
      <BlogCard />
      <Footer />
    </>
  );
}

export default Blog;
