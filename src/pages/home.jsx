import React from "react";

import Jobs from "./jobs";
import EducationCard from "../components/edu-card";
import Education from "../components/education";

export default function Home() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* Introduction */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3 animate__animated animate__fadeIn">
            Hi, I'm Sajjad Ali 👋
          </h1>
          <p className="lead text-muted mb-4">
            Software Developer specializing in Web Development, Data Science,
            and Machine Learning. I enjoy creating seamless user experiences and
            solving challenging problems.
          </p>
        </div>

        <hr className="my-5" />

        {/* Tech Stack */}
        <div className="mb-5">
          <h2 className="text-info mb-4 text-center">🛠️ My Tech Stack</h2>
          <div className="row">
            {[
              {
                category: "Languages",
                items: "Python, JavaScript, Java, R, C++, Dart, Kotlin",
              },
              {
                category: "Web Frontend",
                items: "React, Next.js, Bootstrap, Chakra UI, Tailwind",
              },
              {
                category: "Web Backend",
                items: "Node.js, Express, Django, Flask, FastAPI",
              },
              {
                category: "Desktop Development",
                items: "PyQt, C#, Electron, JavaFX",
              },
              {
                category: "Data Science",
                items: "Pandas, NumPy, TensorFlow, PyTorch, OpenCV",
              },
              {
                category: "Databases",
                items: "MongoDB, MySQL, SQLite, PostgreSQL",
              },
              {
                category: "Mobile Development",
                items: "Flutter, React Native, Android Studio",
              },
              {
                category: "Hosting",
                items: "Firebase, Vercel, Heroku, Netlify",
              },
            ].map((tech, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card shadow-lg h-100 border-0 rounded-3">
                  <div className="card-header bg-info text-white">
                    <h5 className="card-title mb-0">{tech.category}</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted">{tech.items}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <Education />

        {/* Jobs */}
        <Jobs />
      </div>
    </section>
  );
}
