import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Certifications from "./components/certifications";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container flex-grow-1 my-1">
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
