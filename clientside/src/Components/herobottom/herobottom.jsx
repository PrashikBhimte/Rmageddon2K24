import React, { useEffect } from 'react';
import "./herobottom.css";
import Timer from '../timer/timer';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Herobottom() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="500" className='herobottom'>
        <div className='rnxginfo'>
            <p>RNXG</p>
            <p>Members of the RNXG, regardless of their fields,
            collaborate as a team to generate multidisciplinary
            technical expertise. Robotics for Next Generation,
            or RNXG, is the greatest platform for working on 
            various issue statements and developing the best 
            solutions for them.
            </p>
            <a href='https://www.rnxg.co.in/'><button>Explore</button></a>
        </div>
        <div className='clock' >
            <p>Days left</p>
            <Timer date="February, 09, 2024"/>
        </div>
        <div className='gameinfo' > 
            <p><span>4+</span> <span>Games</span></p>
            <p><span>4+</span> <span>Themes</span></p>
            <p><span>25K+</span> <span>Cash Prize</span></p>
        </div>
    </div>
  )
}
