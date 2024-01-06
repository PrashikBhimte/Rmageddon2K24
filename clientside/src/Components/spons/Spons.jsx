import React from "react";
import "./Spons.css";

const Spons = () => {

  return (
    <div className="main">
      <div id="organisers" className="Main">
        <img src="https://res.cloudinary.com/doiocpcni/image/upload/v1704271063/Rmageddon2K24/back1-removebg_kf9mxb.png" alt="background2" id="background"></img>
        <div className="Box">
          <div className="rinfo">
            <p>Rmageddon</p>
            <p id="Content">
            Unleash the full potential of your robotic 
            creations and showcase your skills to the 
            elite in the field of robotics. Compete 
            for recognition and prizes at Rmageddon 
            and be a part of the most exciting robotics
            event of the year!
            </p>
          </div>
          <div className="sponinfo">
            <p>Our Sponsers</p>
            <div className="Bada_Cards">
              <div className="Chota_card">
                <div className="Child_Box"></div>
                <h6>Sponser 1</h6>
              </div>
              <div className="Chota_card">
                <div className="Child_Box"></div>
                <h6>Sponser 2</h6>
              </div>
              <div className="Chota_card">
                <div className="Child_Box"></div>
                <h6>Sponser 3</h6>
              </div>
              <div className="Chota_card">
                <div className="Child_Box"></div>
                <h6>Sponser 4</h6>
              </div>
              <div className="Chota_card">
                <div className="Child_Box"></div>
                <h6>Sponser 5</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spons;