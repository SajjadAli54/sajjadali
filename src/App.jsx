import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Projects from "./pages/projects";
import Education from "./pages/education";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";

import "./App.css";
import Jobs from "./pages/jobs";
import { routes } from "./data/routes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.experience} element={<Jobs />} />
        <Route path={routes.projects} element={<Projects />} />
        <Route path={routes.education} element={<Education />} />
        <Route path={routes.blogs} element={<Blogs />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
