import { React, useEffect, useState } from "react";
import "./Info.css";
import Image from "../../images/back1-removebg.png";
import Img from "../../images/footerImg-removebg-preview.png";
import Glimpse from "./Glimpse";
function Info() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [srcImg, setSrcImg] = useState(Image);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 550) {
      setSrcImg(Img);
    } else {
      setSrcImg(Image);
    }
  }, [windowWidth]);
  return (
    <div className="main">
      <div className="parentdiv">
        <img src={srcImg} id="background" />
        <div className="maindiv">
          <div className="heading">
            <h2>Steps to confirm your seat in RMAGEDDON24</h2>
          </div>
          <div className="subheading">
            <ul>
              <li className="first">
                <h3 className="text1">Filling Up The Form</h3>

                <h4 className="content1">
                  Please complete the form provided below with accurate and
                  unique information before the registration deadline on
                  February 5th at 11:59 PM . Kindly make sure to submit the
                  required fee payment as well.
                </h4>
              </li>
              <li className="second">
                <h3 className="text2">Verifying Details</h3>

                <h4 className="content2">
                  Our team will conduct a thorough verification of the
                  information provided by you. If we encounter any issues during
                  the verification process, we will contact the relevant team
                  for resolution. If everything is in order, you can expect to
                  receive a confirmation email within 1-2 days.
                </h4>
              </li>
              <li className="third">
                <h3 className="text3">Create And Conquer</h3>

                <h4 class="content3">
                  Upon receipt of the confirmation email, please visit the RNXG
                  lab where you will receive the necessary components based on
                  your registration. We will then assist you in getting your bot
                  ready for the competition in the arena.
                </h4>
              </li>
            </ul>
          </div>
        </div>
        <Glimpse />
      </div>
    </div>
  );
}
export default Info;
