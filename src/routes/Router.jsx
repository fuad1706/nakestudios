import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
