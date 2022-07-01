import React from "react";
import ImageS2 from "../../images/image 40.png";

class Section2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="section2-container">
          <div className="section2">
            <div className="encabezadoss2">
              <p className="ecabezados2">INICIA TU CAMINO</p>
              <h2 className="subecabezados2"> HACIA EL EMPRENDIMIENTO</h2>
            </div>
            <div className="padre2s2">
              <div className="column1s2">
                <img className="imagens2" src={ImageS2} alt="image section2 " />
              </div>

              <div className="column2s2">
                <p className="texts2">
                  {" "}
                  Estás a un paso de alinear tu modelo de negocio con la
                  herramienta visual más efectiva para emprender{" "}
                </p>
                <p className="subtext">
                  Con nuestro{" "}
                  <span className="textbold"> Business Model Canvas </span>le
                  darás estructura a tu empresa en nueve pasos. <br /> Es tan
                  sencilla de usar que al final podrás explicarle de forma clara
                  tu <span className="textbold"> modelo de negocio </span> a
                  cualquier persona.
                </p>
                <a href className="conocemaswv">
                  {" "}
                  Conoce mas
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Section2;
