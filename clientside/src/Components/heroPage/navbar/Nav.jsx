import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="left bar" >
        <a href="#">RamegdonSymbol</a>
        <a href="#">Games</a>
        <a href="#">Organizer</a>
        <a href="#">Contact us</a>
      </div>
      <div className="middle bar ">
      <a href="#" >RNXG</a>
      </div>
      <div className="right bar">
        <div className="button">
      <a href="#" id="text" >Registration</a>
      </div>
      </div>
    </div>
  );
}
