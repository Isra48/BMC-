import React from "react";
import Sectionf1 from "./footer/sectionf1";
import Sectionf2 from "./footer/sectionf2";
import Sectionf3 from "./footer/sectionf3";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Sectionf1 />
        <Sectionf2 />
        <Sectionf3 />
      </React.Fragment>
    );
  }
}

export default Footer;
