import React from "react";
import logo from "../../images/LOGO.png";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="contenedorlogo">
          <img
            className="imagewortev"
            src={logo}
            alt="Logo de Wortev Aceleradora"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
