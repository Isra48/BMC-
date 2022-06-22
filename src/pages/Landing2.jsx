import React from "react";
import "../Components/styles/Landing2.css";
import Navbar from "../Components/Landing2/navbar";
import Section1 from "../Components/Landing2/section1";
import Section2 from "../Components/Landing2/section2";
import Section3 from "../Components/Landing2/section3";

class Landing2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
      </React.Fragment>
    );
  }
}

export default Landing2;