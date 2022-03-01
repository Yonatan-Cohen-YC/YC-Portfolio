import "./Projects.css";
import Project1IMG from "../../assets/ecomrace.jpg";
import Project2IMG from "../../assets/portfolio.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <h5>Here's My</h5>
      <h2>Projects</h2>

      <div className="container projects-container">
        <article className="projects-item">
          <div className="projects-item-image">
            <img src={Project1IMG} alt="project1" />
          </div>
          <h3>E Comrace Mern Webiste</h3>
          <small>Build with React, emailjs</small>

          <div className="project-item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://eco-space.netlify.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="projects-item">
          <div className="projects-item-image">
            <img src={Project2IMG} alt="project1" />
          </div>
          <h3>Portfolio React Website</h3>
          <small>Build with React, NodeJS, Express, MongoDB</small>
          <div className="project-item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
