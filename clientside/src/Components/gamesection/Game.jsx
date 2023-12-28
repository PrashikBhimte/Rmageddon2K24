import { React, useState } from 'react'; 
import './Game.css';
import Image from '../../images/back1-removebg.png';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import useSound from 'use-sound';
import sound from "../../sounds/click.mp3";

function Game({slides}){

  const [play] = useSound(sound);

    // let count=0;
    const [currentslide,setcurrentslide]=useState(0);
    const [currentcontent,setcurrentcontent]=useState(0);
    const [currentheading,setcurrentheading]=useState(0);
    const prevslide=()=>{
        const isfirstslide=currentslide===0;
        const moveto=isfirstslide?slides.length-1:currentslide-1;
        setcurrentslide(moveto);
        setcurrentcontent(moveto);
        setcurrentheading(moveto);
    };
    const nextslide=()=>{
        const islastslide=currentslide===4;
        const move=islastslide?0:currentslide+1;
        setcurrentslide(move);
        setcurrentcontent(move);
        setcurrentheading(move);
    }
    return (
        <div className='games-parentdiv'>
          <img alt='background' src={Image} id='background'/>
          <div className='games-maindiv'>
            <p className='gameheading'>The Games</p>
           <div className='games-images'>
              <button className='btn' onClick={() => {play(); prevslide();}}><GrFormPrevious /></button>
              <img alt='anImage' src={slides[currentslide].url} className='games-image'/>
              <button className='btn' onClick={() => {play(); nextslide();}}><GrFormNext /></button>
           </div>
            <div className='games-bottom'>
              <div className='games-heading'>
                <p>{slides[currentheading].title}</p>
              </div>
              <div className='games-content'>
                <p>{slides[currentcontent].content}</p>
              </div>
           </div>
          </div>
        </div>

    )
}

export default Game;