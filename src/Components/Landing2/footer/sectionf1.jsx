import React from "react";
import whitelogo from "../../../images/image_36.png";
import fblogo from "../../../images/fblogo.png";
import instalogo from "../../../images/instalogo.png";
import twitterlogo from "../../../images/twitterlogo.png";
import spotifylogo from "../../../images/spotifylogo.png";
import youtubelogo from "../../../images/youtubelogo.png";
import linkedinlogo from "../../../images/linkedinlogo.png";
import tiktoklogo from "../../../images/tiktoklogo.png";
import pinterestlogo from "../../../images/pinterestlogo.png";

class Sectionf1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="section1blackfooter">
          <div className="blackfooter">
            <div className="blackfootercontainer">
              <div className="containlogo-text">
                <div className="Whitewvlogo">
                  {" "}
                  <img
                    className="whitewortev"
                    src={whitelogo}
                    alt="Logo de Wortev Aceleradora"
                    width="233"
                    height="69"
                  />{" "}
                </div>
                <p className="blacktext">
                  Nuestra misión es evolucionar la economía apoyando a los
                  emprendedores que están construyendo las empresas del futuro.
                  <br /> <br />
                  Con nuestra plataforma para el crecimiento de empresas, PyMes
                  y startups, se genera un modelo de negocio de valor que va
                  dirigido hacia los nuevos consumidores, mientras que los
                  emprendedores se concentren en el desarrollo y venta de su
                  producto.{" "}
                </p>
              </div>
              <div className="wortevsnblack">
                <p className="sntext">Síguenos en nuestras redes</p>
                <div className="iconossnblack">
                  <a href="https://www.facebook.com/wortev">
                    <img
                      className="fblogo"
                      src={fblogo}
                      alt="Logo de facebook"
                    />{" "}
                  </a>
                  <a href="https://www.instagram.com/wortev/?hl=es">
                    <img
                      className="instalogo"
                      src={instalogo}
                      alt="Logo de instagram"
                    />{" "}
                  </a>
                  <a href="https://twitter.com/wortev?lang=es">
                    <img
                      className="twitterlogo"
                      src={twitterlogo}
                      alt="Logo de twitter"
                    />{" "}
                  </a>
                  <a href="https://open.spotify.com/show/5fXX7TVO5XHKHnajOr5rzs">
                    <img
                      className="spotifylogo"
                      src={spotifylogo}
                      alt="Logo de spotify"
                    />{" "}
                  </a>
                  <a href="https://www.youtube.com/channel/UCXH-59xyHxaxJjfp4MrxZDg">
                    <img
                      className="youtubelogo"
                      src={youtubelogo}
                      alt="Logo de youtube"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/wortev">
                    <img
                      className="linkedinlogo"
                      src={linkedinlogo}
                      alt="Logo de Linkedin"
                    />
                  </a>
                  <a href="https://www.tiktok.com/@wortev">
                    <img
                      className="tiktoklogo"
                      src={tiktoklogo}
                      alt="Logo de TikTok"
                    />
                  </a>
                  <a href="https://www.pinterest.com.mx/wortev/">
                    <img
                      className="pinterestlogo"
                      src={pinterestlogo}
                      alt="Logo de Pinterest"
                    />
                  </a>
                </div>
                <p className="sntext">Suscríbete a nuestro newsletter</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Sectionf1;
