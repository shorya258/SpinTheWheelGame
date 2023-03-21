import "../page2.css";
import Page3 from "./Page3";
import spinner from "../images/Group 801.png";
import spinSound from "../sounds/spinSound.mp3";
import React, { Component } from "react";
import Confetti from "react-confetti";
export class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wheel",
      links: ["30%", "buy 1", "free coffee", "buy 2", "free 50g", "hot choco"],
      audio: new Audio(spinSound),
      showConfetti: false,
    };
    console.log("page2", props);
  }

  //   const [play, { stop }] = useSound(spinSound);
  startRotation = () => {
    // this.setState({
    //   name: "wheel start-rotate",
    // });

    this.state.audio.play();
    const sectorDecider = Math.floor(Math.random() * 6 + 1);
    const turns = Math.floor(Math.random() * 10 + 1) + 0.16667 * sectorDecider;
    const res = 6 - sectorDecider;
    console.log(this.state.links[res]);
    // const degree = Math.floor(Math.random() * 360);
    // const finalTurnDegree = turns + degree;
    const image = document.getElementById("spinImage");
    image.style.transition = `all 3s`;
    image.style.transform = `rotate(${turns}turn)`;
    console.log(sectorDecider, turns);

    // setTimeout(() => {
    //   this.setState({
    //     name: "wheel stop-rotate",
    //   });
    // }, turns);
    // {
    //   console.log(turns / 360);
    // }
    setTimeout(() => {
      this.state.audio.pause();
      this.setState({ showConfetti: true });
      //   this.props.history.push("/page3");
    }, 3000);
    <Page3 result={this.state.links[res]} />;
  };
  render() {
    return (
      <div className="div-wrapper">
        <div className={this.state.name} id="spinImage">
          <img src={spinner} alt="spinner"></img>
        </div>
        <div className="btn">
          <button onClick={this.startRotation}>SPIN</button>
        </div>
        {this.state.showConfetti && <Confetti className="confetti" />}
      </div>
    );
  }
}

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
