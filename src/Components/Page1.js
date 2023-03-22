import React from "react";
import "../page1.css";
import wheel from "../images/well 2.png";
import tabletWheel from "../images/medWheel.png";
import mobilewheel from "../images/mobilewell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Page1 = () => {
  let history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 5554px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1180px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <>
      <div className="container">
        <div className="wheel">
          {isDesktopOrLaptop && (
            <img src={wheel} className="bigWheel" alt="spin-wheel"></img>
          )}
        </div>
        <div className="tabletWheel">
          {isTablet && (
            <img src={tabletWheel} className="medWheel" alt="spin-wheel"></img>
          )}
        </div>
        <div className="mobilewheel">
          {isMobile && (
            <img
              src={mobilewheel}
              className="smallWheel"
              alt="spin-wheel"
            ></img>
          )}
        </div>

        <div className="content">
          <h2>
            <span>This is how Engagebud looks like in action!</span>
          </h2>
          <form>
            <div className="email parameter">
              <div className="iconWrapper">
                <FontAwesomeIcon icon={faEnvelope} size={"xl"} />
              </div>
              <div className="contain-input">
                <span>Email</span>
                <input type={"email"} placeholder="Enter an email"></input>
              </div>
            </div>
            <div className="phonenum parameter">
              <div className="iconWrapper">
                <FontAwesomeIcon icon={faPhone} size={"xl"} />
              </div>
              <div className="contain-input">
                <span>Phone Number</span>
                <input placeholder="Enter a phone number"></input>
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
              <br />
              <span>Consent is not a condition to purchase. </span>
            </div>

            <div className="luckBtn">
              <button onClick={() => history.push("/page2")}>
                Try your luck
              </button>
            </div>
            <div>
              <p>
                <i>
                  *You can spin the wheel only once! *If you win, you can claim
                  your coupon only for 10 minutes.
                </i>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Page1;
