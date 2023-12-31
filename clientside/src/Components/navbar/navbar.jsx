import React, { useState, useEffect } from 'react';
import './navbar.css';
import { HiMenuAlt1 } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

 
export default function Navbar() {

  useEffect(() => {
    AOS.init();
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => {
    document.getElementById("navbar").style.display = "flex";
  }

  const handleClose = () => {
    document.getElementById("navbar").style.display = "none";
  }

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
    if (windowWidth > 1200) {
      document.getElementById("navbar").style.display = "flex";
    }
    else {
      document.getElementById("navbar").style.display = "none";
    }
  }, [windowWidth]);

  return (
    <>
      <div data-aos="fade-down" className='mobile'>
        <img src="https://res.cloudinary.com/doiocpcni/image/upload/v1704270448/Rmageddon2K24/logo_i8trpb.png" alt='logo' />
        <button onClick={handleClick}><HiMenuAlt1 /></button>
      </div>
      <nav data-aos="fade-down" id='navbar'>
        <ul>
          <li><a href='#games'>Games</a></li>
          <li><a href='#organisers'>Sponsers</a></li>
          <li><a href='#footer'>Contact Us</a></li>
          <li><a href='#abc' onClick={handleClose}><AiOutlineCloseCircle /></a></li>
        </ul>
        <div>
          <a href='registre'><button>Register</button></a>
          <div className='circle' id='circle1'></div>
          <div className='circle' id='circle2'></div>
        </div>
      </nav>
    </>
  )
}
