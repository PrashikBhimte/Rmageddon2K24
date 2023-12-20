import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from "../../images/logo.png";

export default function Navbar() {

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
    if (windowWidth > 550) {
      document.getElementById("navbar").style.display = "flex";
    }
    else {
      document.getElementById("navbar").style.display = "none";
    }
  }, [windowWidth]);

  return (
    <>
      <div className='mobile'>
        <img src={logo} alt='logo' />
        <button onClick={handleClick}>Menu</button>
      </div>
      <nav id='navbar'>
        <ul>
          <li><a href='#abc'>Games</a></li>
          <li><a href='#abc'>Organiser</a></li>
          <li><a href='#abc'>Contact Us</a></li>
          <li><a href='#ds' onClick={handleClose}>Close</a></li>
        </ul>
        <div>
          <button>Register</button>
          <div className='circle' id='circle1'></div>
          <div className='circle' id='circle2'></div>
        </div>
      </nav>
    </>
  )
}