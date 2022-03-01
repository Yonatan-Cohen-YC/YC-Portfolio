import * as Tag from "./NavbarStyle";
import { matchRoutes, NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navbar(props) {
  let id = useParams();
  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <Tag.NavbarContainer>
      <Tag.Logo>YC.</Tag.Logo>
      <Tag.List>
        <Tag.ListItem>
          <NavLink
            style={{ textDecoration: "none" }}
            className="navLink"
            to="/"
          >
            Home
          </NavLink>
        </Tag.ListItem>
        <Tag.ListItem>
          <Link className="navLink" to="/#about">
            About
          </Link>
        </Tag.ListItem>
        <Tag.ListItem>
          <NavLink className="navLink" to="/works">
            Projects
          </NavLink>
        </Tag.ListItem>
        <Tag.ListItem>
          <NavLink className="navLink" to="/skills">
            Skills
          </NavLink>
        </Tag.ListItem>
        <Tag.ListItem>
          <NavLink className="navLink" to="/contact">
            Contact
          </NavLink>
        </Tag.ListItem>
        {/* <Tag.ListItem>Projects</Tag.ListItem>
        <Tag.ListItem>Skills</Tag.ListItem>
        <Tag.ListItem>Contact</Tag.ListItem> */}
      </Tag.List>
    </Tag.NavbarContainer>
  );
}

export default Navbar;
