import React from "react";

class Sectionf3 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="sectionf3">
          <div className="callwv">
            <a href="tel:55 6366 7505" className="tel1wv">
              {" "}
              Tel: 55 6366 7505{" "}
            </a>
            <a href="tel:800 1613  956" className="tel2wv">
              | Tel: 800 1613 956{" "}
            </a>
          </div>
          <div className="emailwv">
            <a href="mailto:info@wortev.com" className="mailtowv">
              {" "}
              Email: info@wortev.com{" "}
            </a>
          </div>
          <div className="direccionwv">
            {" "}
            Puebla #237 piso 4 oficina 4004 - A, Cuauhtémoc C.P.
            <br /> 06700, CDMX{" "}
          </div>
          <div className="containerf3p2">
            <a href="https://wortev.com/prensa/" className="linkprensa">
              {" "}
              Prensa{" "}
            </a>
            <a
              href="https://wortev.com/terminos-y-condiciones/"
              className="linkterminos"
            >
              Términos de uso{" "}
            </a>
            <a
              href="https://wortev.com/politica-privacidad/"
              className="linkpolitica"
            >
              Política de privacidad{" "}
            </a>
          </div>
          <p class="wortevr">© 2020 WORTEV®. Todos los derechos reservados.</p>
        </div>
      </React.Fragment>
    );
  }
}
export default Sectionf3;
