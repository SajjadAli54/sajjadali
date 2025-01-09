import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Projects from "./pages/projects";
import Certifications from "./pages/certifications";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";

import "./App.css";
import Jobs from "./pages/jobs";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Jobs />} />
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
