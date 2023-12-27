import React from 'react';
import "./herobottom.css";

export default function Herobottom() {
  return (
    <div className='herobottom'>
        <div className='rnxginfo'>
            <p>RNXG</p>
            <p>Members of the RNXG, regardless of their fields,
            collaborate as a team to generate multidisciplinary
            technical expertise. Robotics for Next Generation,
            or RNXG, is the greatest platform for working on 
            various issue statements and developing the best 
            solutions for them. Artificial Intelligence, Machine
            Learning, Deep Learning, Embedded Systems, IoT, VLSI,
            Robotics, and other emerging technologies are explored
            in RNXG.</p>
            <a href='https://www.rnxg.co.in/'><button>Explore</button></a>
        </div>
        <div className='clock' >
            {/* <p>Days left</p> */}
        </div>
        <div className='gameinfo' >
            <p><span>4+</span> <span>Games</span></p>
            <p><span>4+</span> <span>Themes</span></p>
            <p><span>25K+</span> <span>Cash Prize</span></p>
        </div>
    </div>
  )
}
