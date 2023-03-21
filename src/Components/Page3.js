import React, { Component } from "react";
import wheel from "../images/well 2.png";
import mobilewheel from "../images/mobilewell.png";
export class Page3 extends Component {
  // constructor(props) {
  //   this.state{

  //   }
  //   console.log("page 3", props);
  // }
  componentDidMount() {
    // const isDesktopOrLaptop = useMediaQuery({
    //   query: "(min-width: 1224px)",
    // });
    // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  }
  render() {
    let { result } = this.props;
    return (
      <div className="container">
        {/* <div className="wheel">
          {isDesktopOrLaptop && <img src={wheel} alt="spin-wheel"></img>}
        </div>
        <div className="mobilewheel">
          {isTabletOrMobile && <img src={mobilewheel} alt="spin-wheel"></img>}
        </div> */}
        <div className="content">Congratulations! You've won {result}</div>
      </div>
    );
  }
}

export default Page3;
