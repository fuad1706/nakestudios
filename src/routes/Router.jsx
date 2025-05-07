import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import News from "../pages/News";
import Icre8 from "../pages/Icre8";
import NewsDetail from "../pages/NewsDetail";
import NewsArchives from "../pages/NewsArchives";
import Motion from "../pages/Motion";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/icre8" element={<Icre8 />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/news/archives/:year/:month" element={<NewsArchives />} />
      <Route path="/news/archives" element={<NewsArchives />} />
      <Route path="/motion" element={<Motion />} />
    </Routes>
  );
};

export default Router;
