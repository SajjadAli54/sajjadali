import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Certifications from "./components/certifications";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
