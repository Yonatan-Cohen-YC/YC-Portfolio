import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { LoaderContainer } from "./LoaderStyle";

function Loader() {
  return (
    <LoaderContainer>
      <ClimbingBoxLoader color="#f16b51" size={10} />;
    </LoaderContainer>
  );
}

export default Loader;
