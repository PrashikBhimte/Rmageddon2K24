import React, { useEffect, useState } from "react";
import "./Glimpse.css";
import img1 from "./linefollower.png";
import img2 from "./robosumo.png";
import img3 from "./picknplace.png";
import img4 from "./img4.jpeg";
import img5 from "./hackathon.jpeg";
function Glimpse() {
  const [currentImage, setcurrentImage] = useState(0);
  const [nextImage, setnextImage] = useState(1);
  const [prevImage, setprevImage] = useState(2);
  const [style, setstyle] = useState(1);

  useEffect(() => {
    const styletime = setInterval(() => {
      setstyle((i) => (i === 1 ? 1.07 : 1));
    }, 1500);
    return () => clearInterval(styletime);
  }, [style]);

  useEffect(() => {
    const time = setInterval(() => {
      setcurrentImage((i) => (i + 1) % Images.length);
      setnextImage((j) => (j + 1) % Images.length);
      setprevImage((k) => (k + 1) % Images.length);
    }, 2000);
    return () => clearInterval(time);
  }, [currentImage]);

  return (
    <div className="blackdiv">
      <p className="blackdiv-heading1">Glance of Rmageddon23...</p>
      <div className="blackdiv-inner">
        <div className="images-side">
          <img alt="images" src={Images[currentImage].url} className="image" />
        </div>
        <div className="images-main">
          <img alt="images" src={Images[nextImage].url} className="image1" />
        </div>
        <div className="images-side">
          <img alt="images" src={Images[prevImage].url} className="image2" />
        </div>
      </div>
    </div>
  );
}

// style={{ transform: `scale(${style})` }}

const Images = [
  { url: img2 },
  { url: img1 },
  { url: img3 },
  { url: img4 },
  { url: img5 },
];
export default Glimpse;
