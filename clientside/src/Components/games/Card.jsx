import { React, useEffect, useState } from 'react';
import './Card.css';
import Image from '../../images/back1-removebg.png';
import Img from '../../images/Slice_1-removebg-preview.png';

function Card() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [srcImg, setSrcImg] = useState(Image);

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
      setSrcImg(Img);

    }
    else {
      setSrcImg(Image);
    }
  }, [windowWidth]);

  return (
    <div className='main'>
      <div className='parentdiv'>
        <img alt='abc' src={srcImg} id='background' />
        <div className='maindiv'>
          <div className='card1'>
            <div className='text'>
              <h2>ROBOSUMO</h2>
              <hr className='hr' />
              <p>This is the first game of the Rmageddon.
                The name is ROBOSUMO.
                In this game the two bots fight to win the game.
                Hope you all will participate.</p>
            </div>
            <div className='button'>
              <button className='button1'>REGISTER</button>
              <button className='button2'>EXPLORE</button>
            </div>
          </div>
          <div className='smallcards'>
            <div className='card card2'>
              <div className='part1'></div>
              <div className='heading'>
                <h3>LINE FOLLOWER</h3>
              </div>
              <hr />
              {/* <img src={Image1}/> */}
              <div className='image2'></div>
              <h4>PRIZE POOL: INR 5000RS</h4>
              <button className='button3'>REGISTER</button>
              <button className='button4'>EXPLORE</button>
            </div>
            <div className='card card3'>
              <div className='part2'></div>
              <div className='heading'>
                <h3>ROBORACE</h3>
              </div>

              <hr />
              {/* <img src={Image2}/> */}
              <div className='image3'></div>
              <h4>PRIZE POOL: INR 5000RS</h4>
              <button className='button3'>REGISTER</button>
              <button className='button4'>EXPLORE</button>
            </div>
            <div className='card card4'>
              <div className='part3'></div>
              <div className='heading'>
                <h3>PICK N PLACE</h3>
              </div>
              <hr />
              {/* <img src={Image3}/> */}
              <div className='image4'></div>
              <h4>PRIZE POOL: INR 5000RS</h4>
              <button className='button3'>REGISTER</button>
              <button className='button4'>EXPLORE</button>
            </div>
            <div className='card card5'>
              <div className='part4 '></div>
              <div className='heading'>
                <h3>HACKATHON</h3>
              </div>
              <hr />
              {/* <img src={Image4}/> */}
              <div className='image5'></div>
              <h4>PRIZE POOL: INR 5000RS</h4>
              <button className='button3'>REGISTER</button>
              <button className='button4'>EXPLORE</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card;