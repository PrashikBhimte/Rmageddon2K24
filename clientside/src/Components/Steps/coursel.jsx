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
        className="coursel-g"
        draggable={true}
      >
        <div><img alt="an" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704390466/Rmageddon2K24/DSC_0751_zzj84m.jpg" /></div>
        <div><img alt="an" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704390483/Rmageddon2K24/DSC_0822_ggevzw.jpg" /></div>
        <div><img alt="an" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704390503/Rmageddon2K24/DSC_0994_lnt22z.jpg" /></div>
        <div><img alt="an" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704390524/Rmageddon2K24/DSC_1023_rujewn.jpg" /></div>
        <div><img alt="an" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704390543/Rmageddon2K24/DSC_1029_gfotcc.jpg" /></div>
        <div><img alt="an" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704390565/Rmageddon2K24/DSC_1043_pxt0eu.jpg" /></div>
        <div><img alt="an" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704390591/Rmageddon2K24/IMG_1797_e5x1hn.jpg" /></div>
        <div><img alt="an" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704390615/Rmageddon2K24/Screenshot_81_cmflzo.png" /></div>
        <div><img alt="an" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704390633/Rmageddon2K24/Screenshot_83_j881dj.png" /></div>
      </Carousel>
    </>
  );
};

export default CustomCarousel2;
