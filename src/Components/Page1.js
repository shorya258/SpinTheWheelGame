import React from "react";
import "../page1.css";
import wheel from "../images/well 2.png";
import mobilewheel from "../images/mobilewell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Page1 = () => {
  let history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <>
      <div className="container">
        <div className="wheel">
          {isDesktopOrLaptop && (
            <img src={wheel} className="bigWheel" alt="spin-wheel"></img>
          )}
        </div>
        <div className="mobilewheel">
          {isTabletOrMobile && (
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
            <div className="email inps">
              <div className="iconWrapper">
                <FontAwesomeIcon icon={faEnvelope} size={"xl"} />
              </div>
              <div className="cntn">
                <span>Email</span>
                <input type={"email"} placeholder="Enter an email"></input>
              </div>
            </div>
            <div className="phonenum inps">
              <div className="iconWrapper">
                <FontAwesomeIcon icon={faPhone} size={"xl"} />
              </div>
              <div className="cntn">
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
              <span>Consent is not a condition to purchase. </span>
            </div>
            {}
            {/* <Link to="/page2">btn</Link> */}
            <div className="luckBtn">
              <button onClick={() => history.push("/page2")}>
                Try your luck
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Page1;
