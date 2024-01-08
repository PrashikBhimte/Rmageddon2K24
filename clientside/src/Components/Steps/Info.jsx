import { React } from "react";
import "./Info.css";
// import Glimpse from "./Glimpse";

function Info() {
  return (
    <div className="main">
      <div id="Steps" className="parentdiv">
        <img src="https://res.cloudinary.com/doiocpcni/image/upload/v1704271063/Rmageddon2K24/back1-removebg_kf9mxb.png" alt="background" id="background" />
        <div className="maindiv">
          <div className="heading">
            <p>Steps to confirm your seat in RMAGEDDON 24</p>
          </div>
          <div className="subheading">
            <ul>
              <li className="lis">
                <p>Filling Up the Form : </p>
                <p>
                Please visit the Register button given above 
                which will redirect you to UNSTOP. On visiting 
                UNSTOP you should fill all the required details 
                with accurate information before the registration 
                deadline. Kindly make sure to submit the required 
                fee payment as well.
                </p>
              </li>
              <li className="lis">
                <p>Verifying Details : </p>
                <p>
                Our team will conduct a thorough verification of 
                the information provided by you. If we encounter 
                any issues during the verification process, we will 
                contact the relevant team for resolution. If 
                everything is in order, you can expect to receive 
                a confirmation email within 1-2 days.
                </p>
              </li>
              <li className="lis">
                <p>Enter the cosmos of Robotics : </p>
                <p>
                Upon receipt of the confirmation email, be ready 
                to conquer the competition on Feb, 2024. We welcome 
                you all in the cosmos of robotics and wish you to 
                acquire the crown of victory.
                </p>
              </li>
            </ul>
          </div>
          {/* <Glimpse /> */}
        </div>
      </div>
    </div>
  );
}
export default Info;
