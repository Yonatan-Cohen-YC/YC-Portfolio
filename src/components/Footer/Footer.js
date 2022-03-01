import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        YC.
      </a>

      <ul className="perma-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/yonatan-cohen-50b2871aa/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Yonatan-Cohen-YC" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/yonatan_cohen57/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://www.facebook.com/yonatan.cohen.969" target="_blank">
          <BsFacebook />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Copyright, YC. 2022 </small>
      </div>
    </footer>
  );
};

export default Footer;
