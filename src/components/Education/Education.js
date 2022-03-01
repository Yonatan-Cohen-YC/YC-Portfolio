import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <h5>My Knowladge</h5>
      <h2>Education</h2>
      <div class="wrapper">
        <div class="center-line">
          <a href="#" class="scroll-icon">
            <i class="fas fa-caret-up"></i>
          </a>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">"John Bryce" collage</span>
              <span>2019 - 2020</span>
            </div>
            <p>
              #HTML, #CSS, #JavaScript, #Jquery, #Angular, #React, #NodeJS,
              #MySQL, #MongoDB
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>John Bryce</i>
            </div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-star"></i>
            <div class="details">
              <span class="title">Anthony Alicea</span>
              <span>2020 - 2021</span>
            </div>
            <p>
              "JavaScript understading the weird parts",
              <br />
              <small>
                An advanced JavaScript course. Scope, closures, prototypes,
                'this', build your own framework, and more.
              </small>
              <br />
              "Learn and understad NodeJS"
              <br />
              <small>
                Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN
                stack, core Javascript concepts, and more.
              </small>
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>Anthony Alicea</i>
            </div>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-rocket"></i>
            <div class="details">
              <span class="title">Mosh Hamedani</span>
              <span>2020 - 2022</span>
            </div>
            <p>
              "The Ultimate Git Mastery Course"
              <br />
              <small>
                Confidently use Git and GitHub, Collaborate with other
                developers, Use GitHub as an open portfolio for potential
                employers, Get involved in open-source development
              </small>
              <br />
              "Mastering React"
              <br />
              <small>
                Build and deploy fast and interactive React apps with
                confidence, Use cutting-edge E8 JavaScript, Distinguish between
                "good" and "bad" code
              </small>
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>Mosh Hamedani</i>
            </div>
          </section>
        </div>
        <div class="row row-2"></div>
        <div class="row row-1"></div>
      </div>
    </section>
  );
};

export default Education;
