import React from 'react';
import "./loader.css";
// import logo from "../../images/logo.png";
import video from "../../videos/loader.mp4";

export default function Loader() {
  return (
    <div className='loader'>
      <video autoPlay muted typeof='mp4/video'>
        <source src={ video }></source>
      </video>
        {/* <div className='loader-circle' >
            <img src={logo} alt='logo' />
        </div> */}
    </div>
  )
}
