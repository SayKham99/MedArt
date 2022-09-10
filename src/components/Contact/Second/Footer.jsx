import React from "react";

import "./footer.scss";

import CallSvg from "../../../assets/icons/call.svg";
import EmailSvg from "../../../assets/icons/email.svg";
import LocationSvg from "../../../assets/icons/location.svg";

const Contacts = [
  {
    id: 1,
    p: "Phone",
    img: CallSvg,
    title:
      "A wonderful serenity has taken possession of my entire soul,like these. ",
    url: "+998 97 234 34 07",
    type: "tel:+998972343407",
  },
  {
    id: 2,
    img: EmailSvg,
    p: "Email",
    title:
      "A wonderful serenity has taken possession of my entire soul,like these. ",
    url: "nomonovvv7@gmail.com",
    type: "mailto:nomonovvv7@gmail.com",
  },
  {
    id: 3,
    img: LocationSvg,
    p: "Location",
    title:
      "A wonderful serenity has taken possession of my entire soul,like these. ",
    url: "Andijon shahar, Ahmad Donish ko’chasi, 6-uy",
  },
];

const Footer = () => {
  return (
    <div className="BigFooterDiv">

        <div className="Left">
          {Contacts.map((type) => (
            <div className="WrapperMap" key={type.id}>
              <img className="mapImg" src={type.img} />
              <p className="phoneTitle">{type.p}</p>
              <p className="titleWonderful">{type.title}</p>
              <a href={type.type}>
                <p className="PhoneNmb">{type.url}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Footer;
