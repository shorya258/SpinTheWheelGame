import React from "react";
import "../page2.css";
import spinner from "../images/Group 801.png";
export default function Page2() {
  return (
    <div className="container">
      <div className="wheel">
        <img src={spinner}></img>
      </div>
      <div className="btn">
        <button>SPIN</button>
      </div>
    </div>
  );
}
