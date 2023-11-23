import React from 'react';
import './my.css';
import Image from './rmageddon (1).png';
function Intro() {
    return (
        <div>
            <div className="introdiv">
                <div className="R1">
                    <h1>Rmageddon2K24</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt vero quia aperiam labore veritatis eius assumenda quos? Nam sequi odit, distinctio quae facere commodi, veniam praesentium, itaque dolorem possimus repudiandae!</p>
                </div>
                <div className="R2">
                    <img alt="an image" src={Image} />
                </div>
            </div>
            <div className="introdiv">
                <div className="R2">
                    <img alt="an image" src={Image} />
                </div>
                <div className="R1">
                    <h1>RNXG</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt vero quia aperiam labore veritatis eius assumenda quos? Nam sequi odit, distinctio quae facere commodi, veniam praesentium, itaque dolorem possimus repudiandae!</p>
                </div>
            </div>
        </div>

    )
}
export default Intro;