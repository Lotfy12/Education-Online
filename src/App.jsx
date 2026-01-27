import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Contact from "./Components/contact/contact";
import Pricing from "./Components/pricing/Pricing";
import Team from "./Components/team/Team";
import CoursesHome from "./Components/allcourses/CoursesHome";
import Blog from "./Components/blog/Blog";
import Header from "./Components/common/heading/Header";
import PageNotFound from "./Components/common/pageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="CoursesHome" element={<CoursesHome />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Header" element={<Header />} />
        <Route path="Team" element={<Team />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
