import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'
import Logo from '../images/LOGO.png'
import SocialIcon from '../images/social-icons.jpg'
import Fb from '../images/icons-footer/FACEBOOK-GRIS.webp'
import Ig from '../images/icons-footer/INSTAGRAM-GRIS.webp'
import Lk from '../images/icons-footer/LINKEDIN-GRIS.webp'
import Sp from '../images/icons-footer/spotify-icon-gris.webp'
import Tk from '../images/icons-footer/TIKTOK-GRIS.webp'
import Tw from '../images/icons-footer/TWITTER-GRIS.webp'
import Yt from '../images/icons-footer/YOUTUBE-GRIS.webp'
class Footer extends React.Component {
    render(){
      return<React.Fragment>
          <footer className="container-fluid footer-main">
            <div className="row father">
              <div className="col-12  espacio">
                <Link to= {{pathname: "https://wortev.com/"}} target="_self">
                  <img className="logo_1" src={Logo} alt=""/>
                </Link>
              </div>
              <div className="row">
                <div className=" col-md-4 border_left">
                  <h5>Contáctanos </h5>
                  <p>Teléfono: 55 6724 0778</p>
                  <p>E-mail: info@wortev.com</p>
                  <p>Puebla #237 piso 4 oficina 4004 - A.</p>
                  <p>Cuauhtémoc C.P. 06700, CDMX</p>
                </div>
                <div className=" col-md-4 border_left">
                  <h5>Consulta</h5>
                  <ul className="consulta">
                    <li><a className="footer-links" href="https://wortev.com/Aceleradora/">Aceleradora</a></li>
                    <li><a className="footer-links" href="https://wortev.com/media/">Media</a></li>
                    <li><a className="footer-links" href="https://wortev.com/eventos/">Eventos</a></li>
                    <li><a className="footer-links" href="https://wortev.com/aceleradora/#presenta-proyecto">Presenta tu proyecto</a></li>
                    <li><a className="footer-links" href="https://wortev.com/mentores/">Mentores</a></li>
                    <li><a className="footer-links" href="https://wortev.com/exploradores/">Exploradores</a></li>
                    <li><a className="footer-links" href="https://wortev.com/aviso-de-privacidad/">Aviso de privacidad</a></li>
                    <li><a className="footer-links" href="https://wortev.com/bolsa-de-trabajo/">Bolsa de trabajo</a></li>
                    <li><a className="footer-links" href="https://wortev.capital/">Inversionistas</a></li>
                    <li><a className="footer-links" href="https://wortev.com/contacto/">Contacto</a></li>                  
                  </ul> 
                </div>
                <div className=" col-md-4 border_left">
                  <h5>Síguenos</h5>
                  <div className="Row-fluid">
                  <div className="col-12-fluid">
                  <a  href="https://www.facebook.com/wortev/"> <img className="social_iconsf" src={Fb}  /> </a>
                  <a  href="https://www.instagram.com/wortev/"> <img className="social_iconsf" src={Ig}  /> </a>
                  <a  href="https://twitter.com/wortev"> <img className="social_iconsf" src={Tw}  /> </a>
                  <a  href="https://www.youtube.com/channel/UCXH-59xyHxaxJjfp4MrxZDg"> <img className="social_iconsf" src={Yt}  /> </a>
                  <a  href="https://www.linkedin.com/company/wortev"> <img className="social_iconsf" src={Lk}  /> </a>
                  <a  href="https://www.tiktok.com/@wortev?"> <img className="social_iconsf" src={Tk}  /> </a>
                  <a  href="https://open.spotify.com/show/5fXX7TVO5XHKHnajOr5rzs"> <img className="social_iconsf" src={Sp}  /> </a>



                  </div>

                  </div>
                
                  
                  <p className="subsp">Suscríbete a nuestro a Newsletter:</p>

                    <div className="Row">
                      <div className="col-12">

                      {/* <form className="form-footer" action="https://t7marketing52036.api-us1.com" method="post"> */}
                        {/* <input type="email" className="footerform" placeholder="E-mail"></input>
                        <p className="pfooterform">Escribe tu e-mail</p>
                        <Link to= {{pathname: "https://wortev.com/gracias-newsletter/"}} target="_self" className="btn btn-danger btn-form" type="submit">Quiero más noticias</Link> */}
                      {/* </form> */}

                      <form className="form-footer" action="https://wortev.com/gracias-newsletter/" method="">
                        <input type="email" className="footerform" placeholder="E-mail" required></input>
                        <p className="pfooterform">Escribe tu e-mail</p>
                        <button className="btn btn-danger btn-form" type="submit">Quiero más noticias</button>
                      </form>
{/* 
                      <input type="email" className="footerform" placeholder="E-mail"></input>
                      <p className="pfooterform">Escribe tu e-mail</p>
                        <Link
                          type="button"
                          className="btn btn-danger btn-form"
                          to='#'
                          onClick={(e) => {
                              window.location = "mailto:no-reply@example.com";
                              e.preventDefault();}}
                        >
                        Quiero más noticias
                        </Link> */}
                      </div>
                      
                    </div>
                  
                </div>
              </div >
            </div>
            <div className="row">
              <div className="col-md-12 leyenda">
                <p className="white">“Nuestra misión es evolucionar la economía apoyando a los emprendedores que están construyendo las empresas del futuro”.</p>
                <p className="white min">© 2020 WORTEV®. Todos los derechos reservados.  <a style={{color:'#f7f2f2'}} href="https://wortev.com/aviso-de-privacidad/">Aviso de Privacidad </a></p>                    
              </div>
            </div>
          </footer>
        </React.Fragment>
    }
}

export default Footer