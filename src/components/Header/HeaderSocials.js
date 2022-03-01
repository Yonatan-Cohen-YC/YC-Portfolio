import "./Header.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
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
  );
};

export default HeaderSocials;
