import React from "react";
import "../page1.css";
import wheel from "../images/well 2.png";
import mobilewheel from "../images/mobilewell.png";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default function Page1() {
  let history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  //   var MediaQuery = require("react-responsive");
  //   handleClick = () => {};
  //   const [email, setEmail] = useState("");
  //   const [phonenum, setPhonenum] = useState("");
  //   handlePhone = (event) => {
  //     setPhonenum(event.target.value);
  //   };
  //   handleEmail = (event) => {
  //     setEmail(event.target.value);
  //   };
  return (
    <>
      <div className="container">
        <div className="wheel">
          {isDesktopOrLaptop && <img src={wheel} alt="spin-wheel"></img>}
        </div>
        <div className="mobilewheel">
          {isTabletOrMobile && <img src={mobilewheel} alt="spin-wheel"></img>}
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
              <a onClick={() => history.push("/page2")}>Try your luck</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
