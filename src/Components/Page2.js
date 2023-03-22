import "../page2.css";
// import Page3 from "./Page3";
import spinner from "../images/Group 801.png";
import union from "../images/Union.png";
import spinSound from "../sounds/spinSound.mp3";
import React, { useState } from "react";
import Confetti from "react-confetti";
import { useHistory } from "react-router-dom";
const Page2 = (props) => {
  let history = useHistory();

  const links = [
    "30% SITEWIDE OFF",
    "BUY 1 GET 1 FREE",
    "FREE COFFEE MUG ON A PURCHASE OF 100+",
    "BUY 2 EFFERVESCENTS TABLETS & GET 1 FREE",
    "FREE 50G TEA ON PURCHASE OF 500",
    "HOT CHOCOLATE FREE WITH TEA",
  ];
  const codes = [
    "30OFF",
    "BUY1GET1",
    "FREE100",
    "EFFERV2",
    "50G500",
    "100CHOCO",
  ];
  const audio = new Audio(spinSound);
  const [showConfetti, setShowConfetti] = useState(false);

  const startRotation = () => {
    audio.play();
    const sectorDecider = Math.floor(Math.random() * 6 + 1);
    const turns = Math.floor(Math.random() * 10 + 1) + 0.16667 * sectorDecider;
    const res = 6 - sectorDecider;
    console.log(links[res]);
    const image = document.getElementById("spinImage");
    image.style.transition = `all 3s`;
    image.style.transform = `rotate(${turns}turn)`;
    console.log(sectorDecider, turns);

    setTimeout(() => {
      audio.pause();
      setShowConfetti(true);
      setTimeout(() => {
        console.log("sent props", links[res]);
        history.push({
          pathname: "/page3",
          state: { result: links[res], code: codes[res] },
        });
      }, 5000);
    }, 3000);
  };

  return (
    <div className="div-wrapper">
      <div className="wheel">
        <img className="union" src={union} alt="union"></img>
        <img
          className="spinner"
          id="spinImage"
          src={spinner}
          alt="spinner"
        ></img>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            startRotation();
          }}
        >
          SPIN
        </button>
      </div>
      {showConfetti && <Confetti className="confetti" />}
    </div>
  );
};

export default Page2;
// export default function Page2() {
//
//   return (
//     <div className="div-wrapper">
//       <div className="wheel">
//         <img src={spinner} alt="spinner"></img>
//       </div>
//       <div className="btn">
//         <button>SPIN</button>
//       </div>
//     </div>
//   );
// }
