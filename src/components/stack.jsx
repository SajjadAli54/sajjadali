import React from "react";
import {
  FaPython,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaCogs,
  FaDesktop,
} from "react-icons/fa"; // Icons for each tech category
import Container from "./container";

function TechStack() {
  const techItems = [
    {
      category: "Languages",
      items: "Python, JavaScript, Java, Dart, Kotlin",
      icon: <FaPython />,
      color: "#306998", // Python Color
    },
    {
      category: "Web Frontend",
      items: "React and Next.js",
      icon: <FaHtml5 />,
      color: "#E34F26", // HTML5 Color
    },
    {
      category: "Web Backend",
      items: "Node.js, Django, FastAPI, MySQL, MongoDB",
      icon: <FaDatabase />,
      color: "#68A063", // Node.js Color
    },
    {
      category: "Desktop Development",
      items: "PyQt, PySide, Dotnet, Java Swing",
      icon: <FaDesktop />,
      color: "#1E1E1E", // Desktop Color
    },

    {
      category: "Data Science",
      items: "Pandas, Polars, NumPy, Matplotlib, Seaborn",
      icon: <FaCogs />,
      color: "#f5b842", // Data Science Yellow
    },
    // {
    //   category: "Databases",
    //   items: "MongoDB, MySQL, SQLite, PostgreSQL",
    //   icon: <FaDatabase />,
    //   color: "#006747", // Database Green
    // },
    {
      category: "Mobile Development",
      items: "Flutter, React Native, Android Studio",
      icon: <FaMobileAlt />,
      color: "#2196F3", // Mobile Color
    },
    // {
    //   category: "Hosting",
    //   items: "Firebase, Vercel, Heroku, Netlify",
    //   icon: <FaCloud />,
    //   color: "#FF9F00", // Cloud Color
    // },
  ];

  return (
    <Container>
      <div className="container">
        <h3 className="text-center text-primary mb-5">
          The technologies I work with to bring ideas to life
        </h3>
        <div className="row">
          {techItems.map((tech, index) => (
            <div className="col-sm-6 col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className="card shadow-sm rounded-3 p-4 text-center"
                style={{
                  background: `linear-gradient(145deg, ${tech.color} 30%, #fff)`,
                }}
              >
                <div
                  className="icon mb-3"
                  style={{
                    fontSize: "3rem",
                    color: "#fff",
                    backgroundColor: tech.color,
                    padding: "1rem",
                    borderRadius: "50%",
                  }}
                >
                  {tech.icon}
                </div>
                <h4 className="card-title mb-3">{tech.category}</h4>
                <p className="card-text text-muted">{tech.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default TechStack;
