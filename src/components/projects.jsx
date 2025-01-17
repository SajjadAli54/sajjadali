import React from "react";

const projects = [
  {
    name: "Country Charm",
    description:
      "It is a review site related to Food, Hotel and Tour sites. Developed as a web engineering semester project using React.js.",
    live: "https://sajjadali54.github.io/countrycharm/",
    href: "https://github.com/SajjadAli54/countrycharm",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HLuo6T3OsMCMOTovQy8Q8cccLTEuikxekcXiaxCJ&s",
  },
  {
    name: "Robo Friends",
    description: `Simple React and Redux based project. It contains the robots
    data from robohash api into cards. It also contains a
    searchfield to search the specific robots.`.trim(),
    live: "https://sajjadali54.github.io/robofriends/",
    href: "https://github.com/SajjadAli54/robofriends",
    src: "https://robohash.org/3?200x200",
  },
  {
    name: "Vidly",
    description: `Simple React app which is used to show movies.`,
    live: "https://sajjadali54.github.io/vidly/",
    href: "https://github.com/SajjadAli54/vidly",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLGbzwK8xGCsUQvhfEby57Qm5gULxckCI2Q&s",
  },
];

const Projects = () => {
  return (
    <section id="proj" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 col-sm-12 col-lg-4 mb-4">
              <div className="card project-card h-100 shadow-sm">
                <img
                  src={project.src}
                  className="card-img-top"
                  alt={`${project.name} Image`}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success me-2"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
