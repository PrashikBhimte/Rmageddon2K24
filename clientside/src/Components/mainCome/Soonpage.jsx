import React from "react";
import "./Soonpage.css";
import Timer from "../timer/timer";


function Soonpage() {
  return (
    <div className="come-page">
      <img alt="animage" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704622042/Rmageddon2K24/ComeingSoon.jpg" id="come-image" />
      <h1 className="come-heading">RMAGEDDON-2024</h1>
      <p className="come-box">DAYS LEFT...</p>
      <p className="timer1">
        <Timer date="January, 08, 2024" />
      </p>
      <h2 className="soon">COMING SOON</h2>
    </div>
  );
}
export default Soonpage;
