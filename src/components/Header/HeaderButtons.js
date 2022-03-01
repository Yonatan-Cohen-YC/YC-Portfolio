import React from "react";
import CV from "../../assets/YonatanCohenResume (3).pdf";
import "./Header.css";

const HeaderButtons = () => {
  return (
    <div>
      <div className="cta">
        <a className="btn" href={CV} download>
          Download CV
        </a>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default HeaderButtons;
