import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className=" container experience-conatiner">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">
                  <div className="scale">
                    <div className="inner-scale"></div>
                  </div>
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">
                  <small className="text-light">
                    <div className="scale">
                      <div className="inner-scale"></div>
                    </div>
                  </small>
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">
                  <small className="text-light">
                    <div className="scale">
                      <div className="inner-scale"></div>
                    </div>
                  </small>
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">
                  <small className="text-light">
                    <div className="scale">
                      <div className="inner-scale"></div>
                    </div>
                  </small>
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">
                  <small className="text-light">
                    <div className="scale">
                      <div className="inner-scale scale-length50"></div>
                    </div>
                  </small>
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">
                  <small className="text-light">
                    <div className="scale">
                      <div className="inner-scale scale-length80"></div>
                    </div>
                  </small>
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">
                  <div className="scale">
                    <div className="inner-scale "></div>
                  </div>
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">
                  <div className="scale">
                    <div className="inner-scale scale-length80"></div>
                  </div>
                </small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">
                  <div className="scale">
                    <div className="inner-scale scale-length50"></div>
                  </div>
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
