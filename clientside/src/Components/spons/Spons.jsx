import React from "react";
import "./Spons.css";
import Glimpse from "./Glimpse";

const Spons = () => {

  return (
    <div className="main">
      <div id="organisers" className="Main">
        <img src="https://res.cloudinary.com/doiocpcni/image/upload/v1704271063/Rmageddon2K24/back1-removebg_kf9mxb.png" alt="background2" id="background"></img>
        <div className="Box">
          {/* <div className="rinfo">
            <p>Rmageddon</p>
            <p id="Content">
            Unleash the full potential of your robotic 
            creations and showcase your skills to the 
            elite in the field of robotics. Compete 
            for recognition and prizes at Rmageddon 
            and be a part of the most exciting robotics
            event of the year!
            </p>
          </div> */}
          <Glimpse />
          <div className="sponinfo">
            <p>Our Sponsers</p>
            <div className="Bada_Cards">
              <div className="Chota_card">
                <div className="Child_Box">
                <img alt="animage" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704730490/Rmageddon2K24/SolidWorks_Logo.svg_vd7wp4.png" />
                </div>
                <h6>SOLIDWORKS</h6>
              </div>
              <div className="Chota_card">
                <div className="Child_Box">
                  <img alt="animage" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704731004/Rmageddon2K24/The_Robotics_India_jhtbfy.png" />
                </div>
                <h6>THE ROBOTICS INDIA</h6>
              </div>
              <div className="Chota_card">
                <div className="Child_Box">
                  <img alt="animage" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704731260/Rmageddon2K24/pcb-e-black_gqfqss.png" />
                </div>
                <h6>PCB POWER</h6>
              </div>
              <div className="Chota_card">
                <div className="Child_Box">
                  <img alt="animage" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704731404/Rmageddon2K24/Screenshot_2024-01-08-21-51-53-558-edit_com.whatsapp_ywl6v9.png" />
                </div>
                <h6>SKILL SPARK</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spons;