import React from 'react';
import "./hero.css";
import image from "../Images/carbon.png";

export default function HeroPage() {
  return (
    <div className='heropage'>
        <div className='heroleft'>
            <h1>RMAGEDDON</h1>
            <p>daf iahdiah asihdah iahid hidhaioh diahd iahdiaha
            dia hdiahipahdihaihiap dia hip apihpaihdoahdiahodhawd aww
            d ahdiw doiawhdohwaodhwiohdow id hwohdoiw doiawhdohwaodhwiohdow asihdah\
            a dijapdjawidj</p>
            <button>Register</button>
        </div>
        <div className='heroright'>
            <img src={image} alt='an image'></img> 
        </div>
    </div>
  )
}
