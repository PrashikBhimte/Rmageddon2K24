import React from "react";
import "./Spons.css";
import CustomCarousel2 from "../coursel/coursel";

const Spons = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide : 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide : 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide : 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide : 1,
    },
  };

  return (
    <div className="main">
      <div id="organisers" className="Main">
        <img src="https://res.cloudinary.com/doiocpcni/image/upload/v1704271063/Rmageddon2K24/back1-removebg_kf9mxb.png" alt="background2" id="background"></img>
        <div className="Box">
          <div className="spon-info-div">
            <p>kjasc s caksj k</p>
            <p>Unleash the full potential of your robotic creations and showcase your
          skills to the elite in the field of robotics. Compete for recognition
          and prizes at Rmageddon and be a part of the most exciting robotics
          event of the year!</p>
          </div>
          <div className="sponinfo">
            <p>Our Sponsers</p>
            <CustomCarousel2 responsive={responsive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spons;