import { FaAward, FaBookOpen } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import AbotMeImg from "../../assets/about.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={AbotMeImg} alt="About Image" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3 Months Volenteer</small>
            </article>
            <article className="about-card">
              <FaBookOpen className="about-icon" />
              <h5>Learning</h5>
              <small>three.js</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>
          <p>
            Development is one of my greatest passions. I love to learn new
            technologies and implement them. Understand the systems completley
            in order to make it better. I am responsible, hard-working
            professional with the ability to work under pressure. hightly
            motivated and a great team worker.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
