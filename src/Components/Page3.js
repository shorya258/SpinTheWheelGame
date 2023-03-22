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
        {isDesktopOrLaptop && <img src={wheel} alt="spin-wheel"></img>}
      </div>
      <div className="mobilewheel">
        {isTabletOrMobile && <img src={mobilewheel} alt="spin-wheel"></img>}
      </div>
      <div className="coupon">
        <div>Congrats you have won:</div>
        <h2> {location.state.result}</h2>
        <div className="couponCode">
          <div className="myCode">{myCode}</div>
          <div>
            <Button
              variant="contained"
              className="copyBtn"
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
          CLOSE PANEL AND COPY
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
