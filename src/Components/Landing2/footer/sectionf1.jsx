import React from "react";
import whitelogo from "../../../images/image_36.png";

class Sectionf1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="blackfooter">
          <div className="containlogo-text">
            <img
              className="imagewortev"
              src={whitelogo}
              alt="Logo de Wortev Aceleradora"
            />
            <p className="blacktext">
              Nuestra misión es evolucionar la economía apoyando a los
              emprendedores que están construyendo las empresas del futuro.
              <br /> Con nuestra plataforma para el crecimiento de empresas,
              PyMes y startups, se genera un modelo de negocio de valor que va
              dirigido hacia los nuevos consumidores, mientras que los
              emprendedores se concentren en el desarrollo y venta de su
              producto.{" "}
            </p>
          </div>
          <div className="wortevsnblack">
            <p className="iconosswblack"> hola hola hola </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Sectionf1;
