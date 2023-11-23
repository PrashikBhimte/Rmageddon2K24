import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <div className="all">
    <div className="footer">
        <a href="#About ">About</a>
        <a href="#Privacy">Privacy</a>
        <a href="#T&C">T&C</a>
        <div className="main">
            <a href="#RNXG"><b><h1>RNXG</h1></b></a></div>
        <a href="#Events">Events</a>
        <a href="#Projects">Projects</a>
        <a href="#Walloflove">Wall of love</a>
    </div>
    <div className="icons">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-solid fa-arrow-up"></i>
    </div>
    <div className="email">
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=rnxg@sggs.ac.in&tf=cm">rnxg@sggs.ac.in</a>
    </div>
    <div className="container3">
        <a title="img" href="https://www.sggs.ac.in/"><img rel="preload" width="120" src="https://ik.imagekit.io/wqweoudym/sggsBlack_w3lWNe4AS.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1651499476996" alt=""></img></a>
        <p id="copyright">© 2022, Rnxg . All Rights Reserved.</p>
    </div>
    </div>
  )
}
