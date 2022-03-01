import React from "react";
import HeaderButtons from "./HeaderButtons";
import ME from "../../assets/profile3.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Yonatan Cohen</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <HeaderButtons />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="profile" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
