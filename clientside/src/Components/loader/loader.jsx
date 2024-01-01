import React from 'react';
import "./loader.css";
import video from "../../videos/loader.mp4";

export default function Loader() {

  return (
    <div className='loader'>
      <video id='video' autoPlay muted typeof='mp4/video'>
        <source src={video}></source>
      </video>
    </div>
  )
}
