import React from "react";
import img from "../images/sa.jpg";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container p-2">
        <div className="logo__image" style={{ float: "left" }}>
          <img src={img} alt="S Loves A" style={{ width: "100%" }} />
        </div>
        <div className="p-4" style={{ float: "right" }}>
          <div style={{ display: "none" }}>
            <div style={{ marginRight: "1rem" }}>HOME</div>
            <div style={{ marginRight: "1rem" }}>COUPLE</div>
            <div style={{ marginRight: "1rem" }}>STORY</div>
            <div style={{ marginRight: "1rem" }}>EVENTS</div>
            <div style={{ marginRight: "1rem" }}>PEOPLE</div>
            <div style={{ marginRight: "1rem" }}>GALLERY</div>
            <div>BLOG</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
