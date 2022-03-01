import React, { useEffect, useState } from "react";
import * as Tag from "../../GlobalStyle";
import Loader from "../Loader/Loader";
import profile from "../../assets/profile_pic.png";
import Compoents from "../index";
function Header() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <Tag.Section>
        <Tag.LeftSide></Tag.LeftSide>
        <Tag.RightSide></Tag.RightSide>
      </Tag.Section>
      <Tag.Section id="about"></Tag.Section>
    </React.Fragment>
  );
}

export default Header;
