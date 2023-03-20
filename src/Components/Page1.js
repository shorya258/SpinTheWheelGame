import React from "react";
import "../page1.css";
import wheel from "../images/well 2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Page1() {
  //   const handleClick = () => {
  //     <Link to="/page2"></Link>;
  //   };
  return (
    <>
      <div className="container">
        <div className="wheel">
          <img src={wheel} alt="spin-wheel"></img>
        </div>
        <div className="content">
          <h2>
            <span>This is how Engagebud looks like in action!</span>
          </h2>
          <form>
            <div className="email inps">
              <div>
                <FontAwesomeIcon icon={faEnvelope} size={"sm"} />
              </div>
              <div className="cntn">
                <span>Email</span>
                <input type={"email"} placeholder="Enter an email"></input>
              </div>
            </div>
            <div className="phonenum inps">
              <div>
                <FontAwesomeIcon icon={faPhone} size={"sm"} />
              </div>
              <div className="cntn">
                <span>Phone Number</span>
                <input
                  type={"phonenum"}
                  placeholder="Enter a phone number"
                ></input>
              </div>
            </div>
            <div className="agreement">
              <span>
                <input type={"checkbox"}></input>
              </span>
              <span>
                I agree to recieve recurring automated messages at the number I
                have provided.
              </span>
              <span>Consent is not a condition to purchase. </span>
            </div>

            {/* <Link to="/page2">btn</Link> */}
            <button>Try your luck</button>
          </form>
        </div>
      </div>
    </>
  );
}
