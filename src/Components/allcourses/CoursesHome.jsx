import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import Footer from "../common/footer/Footer";
import Header from "../common/heading/Header";
import "./Courses.css";

function CoursesHome() {
  return (
    <>
      <Header />
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />
      <Footer />
    </>
  );
}

export default CoursesHome;
