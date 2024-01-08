"use client";
import React from "react";
// import styles from "./customCarousel2.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./coursel.css";
// import Image from "next/image";

const CustomCarousel2 = (props) => {
  //   const logosData = props.data;
  const responsive = props.responsive;

  return (
    <>
      <Carousel
        responsive={responsive}
        arrows={false}
        // arrows={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        infinite={true}
        swipeable={true}
        partialVisible={false}
        rewind={true}
        rewindWithAnimation={true}
        renderButtonGroupOutside={true}
        className="coursel"
        draggable={true}
      >
        {/* {logosData.map((logos, index) => (
          <Image
            key={index}
            src={logos.image}
            width={220}
            height={160}
            alt={logos.alt}
          />,
            <img alt="animage" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704739675/Rmageddon2K24/img_0775_IwX8agFeIU_uoyb3a.avif" ></img>
        ))} */}
        <div className="Chota_card">
          <div className="Child_Box">
            <img
              alt="animage"
              src="https://res.cloudinary.com/doiocpcni/image/upload/v1704730490/Rmageddon2K24/SolidWorks_Logo.svg_vd7wp4.png"
            />
          </div>
          <h6>SOLIDWORKS</h6>
        </div>
        <div className="Chota_card">
          <div className="Child_Box">
            <img
              alt="animage"
              src="https://res.cloudinary.com/doiocpcni/image/upload/v1704731004/Rmageddon2K24/The_Robotics_India_jhtbfy.png"
            />
          </div>
          <h6>THE ROBOTICS INDIA</h6>
        </div>
        <div className="Chota_card">
          <div className="Child_Box">
            <img
              alt="animage"
              src="https://res.cloudinary.com/doiocpcni/image/upload/v1704731260/Rmageddon2K24/pcb-e-black_gqfqss.png"
            />
          </div>
          <h6>PCB POWER</h6>
        </div>
        <div className="Chota_card">
          <div className="Child_Box">
            <img
              alt="animage"
              src="https://res.cloudinary.com/doiocpcni/image/upload/v1704731404/Rmageddon2K24/Screenshot_2024-01-08-21-51-53-558-edit_com.whatsapp_ywl6v9.png"
            />
          </div>
          <h6>SKILL SPARK</h6>
        </div>
      </Carousel>
    </>
  );
};

export default CustomCarousel2;
