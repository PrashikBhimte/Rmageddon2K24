import React, { useEffect, useState } from 'react';
import "./HeroPage.css";
import background1 from "../../images/Slice 2.png";
import background2 from "../../images/Section 1.png";
import Navbar from '../navbar/navbar';
import Heroinfo from '../heroinfo/heroinfo';
import Herobottom from '../herobottom/herobottom';

export default function HeroPage() {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ srcImg, setSrcImg ] = useState(background1);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (windowWidth < 550) {
            setSrcImg(background2);
        }
        else {
            setSrcImg(background1);
        }
    }, [windowWidth])
 
    return (
        <div className='heropagemain'>
            <img src={srcImg} alt='background' id='background' />
            <div className='heropage'>
                <Navbar />
                <Heroinfo />
                <Herobottom />
            </div>
        </div>
    )
}
