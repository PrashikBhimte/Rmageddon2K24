import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <footer id='footer'>
        <div class="row">
            <div class="col">
                {/* <img src="/assets/logo.png" class="logo1" width="50" /> */}
                <a href="https://www.rnxg.co.in/" class="logo1">RNXG</a>
                <p>
                    RNXG that is Robotics for Next Generation provides the best platform to work on different problem statements and to create best solutions for them.
                </p>
            </div>
        </div>
        <hr />
        <p class="copyright">RMAGEDDON © 2024 - All Rights Reserved</p>
    </footer>
  )
}
