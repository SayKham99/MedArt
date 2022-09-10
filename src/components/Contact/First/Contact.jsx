import React from "react";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="BigContactDiv">
      <div className="wrapperP">
        <p className="cnt">Contact</p>
        <p className="detail">Detail about our Contact</p>
        <div className="MapDiv">
          <iframe
            className="mapGoogle"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8668.704785334361!2d72.36302950888773!3d40.74762868773742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced91ccce77f9%3A0xf07c16e5c23a5945!2sNavruz%20Mall!5e0!3m2!1sru!2s!4v1661940399762!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
