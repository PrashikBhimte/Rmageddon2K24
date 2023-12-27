import React from 'react';
import "./HeroPage.css";
import background from "../../images/Slice 2.png";
import Navbar from '../navbar/navbar';
import Heroinfo from '../heroinfo/heroinfo';
import Herobottom from '../herobottom/herobottom';

export default function HeroPage() {

    return (
        <div className='main'>
            <div className='heropagemain'>
                <img src={background} alt='background' id='background' />
                <div className='heropage'>
                    <Navbar />
                    <Heroinfo />
                    <Herobottom />
                </div>
            </div>
        </div>
    )
}
