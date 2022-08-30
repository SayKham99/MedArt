import React from 'react'

import "./infoFile.scss"


import SmalPng from "../../../../assets/Operation.png";
import Arrow from "../../../../assets/arrow-right.svg";

const InfoFile = () => {
  return (
    <div className="BigDiv">
    <div className="MainDiv">
      <div className="LeftRightDiv">
        <div className="LeftDiv">
          <div>
            <p className="SmallAbout">About US</p>
            <p className="BigAbout">About Us</p>
            <img src={SmalPng} className="OperationImg" />
          </div>
        </div>

        <div className="RightDiv">
          <p className="titleInfo1">
            Historically, drugs were discovered through identifying the active
            ingredient from traditional remedies or by serendipitous
            discovery. Later chemical libraries of synthetic small molecules.
          </p>
          <p className="titleInfo2">
            Modern drug discovery involves the identification of screening
            hits, medicinal chemistry and optimization of those hits to
            increase the affinity, selectivity (to reduce the potential of
            side effects), efficacy/potency, metabolic stability (to increase
            the half-life), and oral bioavailability. Once a compound that
            fulfills all of these requirements
          </p>
          <div className="ButtonLearnMore">
            <button className="LearnMore">Learn More </button>
            <img src={Arrow} className="arrowImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InfoFile