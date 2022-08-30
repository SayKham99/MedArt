import React from "react";

import "./about.scss";
import HeadDiv from "./Header/Header";
import InfoFile from "./InfoFolder/InfoFile";


const About = () => {
  return (
    <div className="BigWrapper">
      <HeadDiv />
      <InfoFile/>
    </div>
  );
};

export default About;
