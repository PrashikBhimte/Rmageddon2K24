import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><a href='#abc'>Games</a></li>
            <li><a href='#abc'>Organiser</a></li>
            <li><a href='#abc'>Contact Us</a></li>
        </ul>
        <div>
            <button>Register</button>
            <div className='circle' id='circle1'></div>
            <div className='circle' id='circle2'></div>
        </div>
    </nav>
  )
}
