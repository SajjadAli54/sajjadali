import React from "react";

function TechStack() {
  const techItems = [
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
  ];

  return (
    <div className="mb-5">
      <h2 className="text-info mb-4 text-center">🛠️ My Tech Stack</h2>
      <div className="row">
        {techItems.map((tech, index) => (
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
  );
}

export default TechStack;
