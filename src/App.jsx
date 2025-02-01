import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/common/navbar";
import Footer from "./components/common/footer";

import Home from "./pages/home";
import Projects from "./pages/projects";
import Education from "./pages/education";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Jobs from "./pages/jobs";

import logo from "./assets/logo.png";
import ProfileImage from "./assets/picofme.png";
import "./App.css";

import { routes } from "./data/routes";
import { badges } from "./data/badges";
import { navLinks } from "./data/routes";
import { jobs } from "./data/jobs";
import { projects } from "./data/projects";
import { education } from "./data/education";
import { certifications } from "./data/certifications";
import { techItems } from "./data/tech-items";

function App() {
  return (
    <Router>
      <NavBar navLinks={navLinks} logo={logo} />
      <Routes>
        <Route
          path={routes.home}
          element={
            <Home
              ProfileImage={ProfileImage}
              projects={projects}
              techItems={techItems}
            />
          }
        />
        <Route path={routes.experience} element={<Jobs jobs={jobs} />} />
        <Route
          path={routes.projects}
          element={<Projects projects={projects} />}
        />
        <Route
          path={routes.education}
          element={
            <Education education={education} certifications={certifications} />
          }
        />
        <Route path={routes.blogs} element={<Blogs />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>
      <Footer badges={badges} />
    </Router>
  );
}

export default App;
