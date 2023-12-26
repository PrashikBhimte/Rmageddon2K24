import React from 'react';
import "./loader.css";
import logo from "../../images/logo.png";

export default function Loader() {
  return (
    <div className='loader'>
        <div className='loader-circle' >
            <img src={logo} alt='logo' />
        </div>
    </div>
  )
}
