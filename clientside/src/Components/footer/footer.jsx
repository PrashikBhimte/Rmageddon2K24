import React from 'react';
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id='footer'>
      <div className="footer-row">
        <div className="footer-col">
          {/* <img src="/assets/logo.png" class="logo1" width="50" /> */}
          <a href="https://www.rnxg.co.in/" className="footer-logo">RNXG</a>
          <p>
            RNXG that is Robotics for Next Generation provides the best platform to work on different problem statements and to create best solutions for them.
          </p>
        </div>
        <ul className='footer-icons'>
          <li><a href='https://www.instagram.com/sggs_rnxg/'><FaInstagram /></a></li>
          <li><a href='https://www.facebook.com/rnxgsggs'><FaFacebookF /></a></li>
          <li><a href='https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A31238246&keywords=rnxg&origin=RICH_QUERY_SUGGESTION&position=0&searchId=d79dd991-69ab-4670-9543-5643e13efd28&sid=gg7'><FaLinkedinIn /></a></li>
          <li><a href='https://www.youtube.com/channel/UC9fFrYx9UEpxDjS9YO6t2FA'><FaYoutube /></a></li>
        </ul>
      </div>
      <hr />
      <div className='bottom-footer'>
        <p className="copyright">RMAGEDDON © 2024 - All Rights Reserved</p>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=rnxg@sggs.ac.in'>rnxg@sggs.ac.in</a>
      </div>
    </footer>
  )
}
