import React from "react";
import { useMediaQuery } from "react-responsive";
import wheel from "../images/well 2.png";
import mobilewheel from "../images/mobilewell.png";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import "../page3.css";
const Page3 = (props) => {
  const location = useLocation();
  const myCode = location.state.code;
  // let { result } = props;
  // (props.location && props.location.state) || {};
  console.log("props pg3", location.state.code, location.state.result);

  const handleCopyText = () => {
    navigator.clipboard.writeText(myCode);
    console.log(myCode);
    window.alert("coupon copied!");
  };
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <div className="container box">
      <div className="wheel">
        {isDesktopOrLaptop && (
          <img src={wheel} className="bigWheel" alt="spin-wheel"></img>
        )}
      </div>
      <div className="mobilewheel">
        {isTabletOrMobile && (
          <img src={mobilewheel} className="smallWheel" alt="spin-wheel"></img>
        )}
      </div>
      <div className="coupon">
        <div>
          <p>Congrats you have won:</p>
        </div>
        <h2> {location.state.result}</h2>
        <div className="couponCode">
          <div className="myCode">
            <p>{myCode}</p>
          </div>
          <div className="myCopyBtn">
            <Button
              className="copyBtn"
              variant="contained"
              onClick={handleCopyText}
            >
              COPY
            </Button>
          </div>
        </div>
        <Button
          variant="contained"
          className="copyBtn close"
          onClick={handleCopyText}
        >
          Close panel and copy
        </Button>
        <div>
          <span>
            <i>* you can claim discount only for 10 minutes</i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Page3;
