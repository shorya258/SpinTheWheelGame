import React from "react";
import { useMediaQuery } from "react-responsive";
import wheel from "../images/well 2.png";
import tabletWheel from "../images/medWheel.png";
import mobilewheel from "../images/mobilewell.png";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import "../page3.css";

const Page3 = (props) => {
  const location = useLocation();

  const myCode = location.state.code;
  console.log("props pg3", location.state.code, location.state.result);

  const handleCopyText = () => {
    // copy discount code to the clipboard
    navigator.clipboard.writeText(myCode);
    window.alert("coupon copied!");
  };
  // assigning different screen widths to different variables to display respective image for respective device later
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 5524px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1180px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <div className="container box">
      <div className="wheel">
        {/* checks if device is laptop and if yes then show image for laptop */}
        {isDesktopOrLaptop && (
          <img src={wheel} className="bigWheel" alt="spin-wheel"></img>
        )}
      </div>

      {/* checks if device is tablet and if yes then show image for tablet */}
      <div className="tabletWheel">
        {isTablet && (
          <img src={tabletWheel} className="medWheel" alt="spin-wheel"></img>
        )}
      </div>

      {/* checks if device is mobile and if yes then show image for mobile */}
      <div className="mobilewheel">
        {isMobile && (
          <img src={mobilewheel} className="smallWheel" alt="spin-wheel"></img>
        )}
      </div>
      <div className="coupon">
        <div className="congoMsg">
          <p>Congrats you have won:</p>
        </div>
        {/* result of the spin wheel sent as a prop from second page */}
        <h2 className="heading"> {location.state.result}</h2>
        <div className="couponCode">
          <div className="myCode">
            {/* discount code from the result of the spin wheel game */}
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
        <div className="claimDiscount">
          <p>
            <i>* you can claim discount only for 10 minutes</i>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page3;
