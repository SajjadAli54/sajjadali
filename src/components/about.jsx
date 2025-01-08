export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-4">About Me</h2>
        <p className="text-center lead">
          I’m a passionate developer with expertise in Web Development and Data
          Science. I enjoy creating innovative solutions and building
          applications that make a difference.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">Skills</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>React.js, NextJS, Python, and Java</li>
                  <li>Machine Learning with Python and R</li>
                  <li>PyQt for Desktop Apps</li>
                  <li>HTML, CSS, JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header bg-success text-white">
                <h5 className="card-title mb-0">Tools & Frameworks</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>TensorFlow, Keras</li>
                  <li>Node.js, Express</li>
                  <li>Git, Docker</li>
                  <li>Plotly, ApexCharts for Dashboards</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header bg-warning text-white">
                <h5 className="card-title mb-0">Achievements</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Silver Medalist in Computer Science</li>
                  <li>Fellowship at NTNU, Norway</li>
                  <li>Multiple Scholarships Awarded</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
