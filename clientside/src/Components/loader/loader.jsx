import React from 'react';
import "./loader.css";

export default function Loader() {

  return (
    <div className='loader'>
      <video id='video' autoPlay muted typeof='mp4/video'>
        <source src="https://res.cloudinary.com/doiocpcni/video/upload/v1704270660/Rmageddon2K24/loader_kv2i23.mp4"></source>
      </video>
    </div>
  )
}
