import React from "react";

import JobCard from "../components/card";
import Jobs from "../components/jobs";

export default function Home() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center display-4 mb-5">Hi, I'm Sajjad Ali 👋</h1>
        <p className="text-center lead">
          Software Developer specializing in Web Development, Data Science, and
          Machine Learning. I enjoy creating seamless user experiences and
          solving challenging problems.
        </p>
        <hr className="my-5" />

        <Jobs />

        {/* Education */}
        <div className="mb-5">
          <h2 className="text-center text-warning mb-4">🎓 Education</h2>
          <div className="card shadow-sm p-4 border-0">
            <h4>Sukkur IBA University</h4>
            <p className="text-muted">Batch 2019-2023</p>
            <ul className="list-unstyled">
              <li>🏅 Silver Medalist | Second Highest CGPA.</li>
              <li>
                💼 Awarded multiple scholarships, including NORPART CONNECT
                Scholarship.
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h2 className="text-center text-info mb-4">🛠️ My Tech Stack</h2>
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
              <div className="col-md-6 col-lg-4 mb-3" key={index}>
                <div className="card shadow-sm h-100 border-0">
                  <div className="card-header bg-primary text-white">
                    <h5 className="card-title mb-0">{tech.category}</h5>
                  </div>
                  <div className="card-body">
                    <p>{tech.items}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
