import React, { useEffect } from "react";
import "./heroinfo.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Heroinfo() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-delay="300" className="heroinfo">
      <div className="hero-info-div">
        <p id="heading">RMAGEDDON-2024</p>
        <p id="tagline">Orbiting Innovation: Where Sci-Fi Meets Technical Minds</p>
        <p id="information">
          Unleash the full potential of your robotic creations and showcase your
          skills to the elite in the field of robotics. Compete for recognition
          and prizes at Rmageddon and be a part of the most exciting robotics
          event of the year!
        </p>
        <a href="#unlock">
          <button>Explore Now</button>
        </a>
      </div>
      <div className="logo-div">
        <img
          src="https://res.cloudinary.com/doiocpcni/image/upload/v1704270448/Rmageddon2K24/logo_i8trpb.png"
          alt="logo"
        />
      </div>
    </div>
  );
}
