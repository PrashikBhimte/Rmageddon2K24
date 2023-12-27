import React from "react";
import "./Spons.css";
import background from "../../images/back1-removebg.png";

const Spons = () => {

  return (
    <div className="main">
      <div id="organisers" className="Main">
        <img src={background} alt="background2" id="background2"></img>
        <div className="Box">
          <div className="rinfo">
            <p>Rmageddon</p>
            <p id="Content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
              laborum modi deleniti. Excepturi odio ipsam enim, explicabo dolore
              perspiciatis nam natus voluptates sequi harum dolorem nisi,
              voluptatibus itaque cum omnis alias architecto officia distinctio
              neque cupiditate. Accusamus ex nam eum!
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