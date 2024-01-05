import React from 'react';
import "./HeroPage.css";
import Navbar from '../navbar/navbar';
import Heroinfo from '../heroinfo/heroinfo';
import Herobottom from '../herobottom/herobottom';

export default function HeroPage() {

    return (
        <div className='main'>
            <div className='heropagemain'>
                <img src="https://res.cloudinary.com/doiocpcni/image/upload/v1704270860/Rmageddon2K24/Slice_2_p4i4vl.png" alt='background' id='background' />
                <div className='heropage'>
                    <Navbar />
                    <Heroinfo />
                    <Herobottom />
                </div>
            </div>
        </div>
    )
}
