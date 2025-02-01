import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/common/navbar";
import Footer from "./components/common/footer";

import Home from "./pages/home";
import Projects from "./pages/projects";
import Education from "./pages/education";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";

import logo from "./assets/logo.png";

import "./App.css";
import Jobs from "./pages/jobs";
import { routes } from "./data/routes";
import { badges } from "./data/badges";
import { navLinks } from "./data/routes";

function App() {
  return (
    <Router>
      <NavBar navLinks={navLinks} logo={logo} />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.experience} element={<Jobs />} />
        <Route path={routes.projects} element={<Projects />} />
        <Route path={routes.education} element={<Education />} />
        <Route path={routes.blogs} element={<Blogs />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>
      <Footer badges={badges} />
    </Router>
  );
}

export default App;
