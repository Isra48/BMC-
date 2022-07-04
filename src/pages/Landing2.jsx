import React from "react";
import "../Components/styles/Landing2.css";
import Navbar from "../Components/Landing2/navbar";
import Section1 from "../Components/Landing2/section1";
import Section2 from "../Components/Landing2/section2";
import Section3 from "../Components/Landing2/section3";
import Sectionf1 from "../Components/Landing2/footer/sectionf1";
import Sectionf2 from "../Components/Landing2/footer/sectionf2";
import Sectionf3 from "../Components/Landing2/footer/sectionf3";
import Modal from "../Components/modal/modalLogin";
import Slider from "../Components/Landing2/Slider";

class Landing2 extends React.Component {
  state = {
    modalActive: false
  };

  handleClickOn = (e) => {
    this.setState({ modalActive: true });
  };

  handleClick = (e) => {
    this.setState({ modalActive: false });
  };

  render() {
    return (
      <div className="Landing2">
        <div className="Landing-container">
          <Navbar />
          {this.state.modalActive ? <Modal click={this.handleClick} /> : null}

          <Section1 click={this.handleClickOn} />
          <Section2 />
          <Section3 click={this.handleClickOn} />
          {/*<Slider />*/}
          <Sectionf1 />
          <Sectionf2 />
          <Sectionf3 />
        </div>
      </div>
    );
  }
}

export default Landing2;
