import React from "react";
import logo from "../../images/mac2.png";

const Section1 = (props) => {
  return (
    <div className="mastersec1">
      <div className="seccion1-container">
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
              <button className="btnModal" onClick={props.click}>
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
