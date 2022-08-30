import React, { useState } from "react";

import "./header.scss";

const SelectInfo = [
  { id: 1, title: "Hospital Introduction", p: "See Video Introduction" },
  { id: 2, title: "Hospital Introduction", p: "See Video Introduction" },
  { id: 3, title: "Hospital Introduction", p: "See Video Introduction" },
  { id: 4, title: "Hospital Introduction", p: "See Video Introduction" },
];

const Header = () => {
  const [colorBtn, setcolorBtn] = useState("");
  return (
    <div className="wrapperHeader">
      {SelectInfo.map((type) => (
        <div
          onClick={() => setcolorBtn(type.id)}
          style={{
            backgroundColor: colorBtn === type.id ? "#1f2b6c" : "",
            color: colorBtn === type.id ? "white" : "",
          }}
          className="ChooseUS"
        >
          <p className="animation1">
            <hr
              style={{
                borderColor: colorBtn === type.id ? "white" : "black",
              }}
              className="minusHead"
            />
            {type.title}
          </p>
          <p className="titleSee">{type.p}</p>
        </div>
      ))}
    </div>
  );
};

export default Header;
