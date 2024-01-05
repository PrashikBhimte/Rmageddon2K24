import React from 'react';
import "./heroinfo.css";
import useSound from 'use-sound';
import sound from "../../sounds/click.mp3";

export default function Heroinfo() {

  const [play] = useSound(sound);

  return (
    <div className='heroinfo'>
        <p id='heading'>RMAGEDDON - 2024</p>
        <p id='tagline'>Become an Early Adapter</p>
        <p id='information'>
        Unleash the full potential of your robotic
        creations and showcase your skills to the 
        elite in the field of robotics. Compete for 
        recognition and prizes at Rmageddon and be 
        a part of the most exciting robotics event
        of the year!
        </p>
        <a href='#unlock'><button onClick={play}>Explore Now</button></a>
    </div>
  )
}
