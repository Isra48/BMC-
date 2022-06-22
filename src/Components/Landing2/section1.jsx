import React from "react";
import logo from "../../images/mac_1.png";

class Section1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Section1">
          <div className="child1">
            <img
              className="mockmac"
              src={logo}
              alt="Logo de Wortev Aceleradora"
            />
          </div>
          <div className="child2">
            <h1 className="TituloPrincipal">BMC</h1>
            <p className="plight">Business Model Canvas</p>
            <p className="pnormal">Estructura y reinventa tu empresa</p>
            <div className="btnContainer">
              <a className="btnModal" href="jejej">
                Ingresar
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Section1;
