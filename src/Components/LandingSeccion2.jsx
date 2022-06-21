import React from 'react'
import './styles/LandingSeccion2.css'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import DownloadLink from "react-download-link";
import Pdf from "../Assets/guia.pdf"

class LandingSeccion2 extends React.Component {

    scrollTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }

    render() {
        return <React.Fragment>
            <div className="container-fluid">
            </div>
            <div className="row">
                <Fade button>
                <div className="col-sm-6 col-0 col1">
                    {/*aqui va la foto como background*/}
                </div>
                </Fade>
                
                <div className="col-sm-6 col-12 col2 fix_padding">
                
                <div className=" d1">
                    <Fade button>
                    <h3 className="bmc">BUSINESS MODEL CANVAS</h3>
                    </Fade>
                    
                    </div>

                
                    
                    <div className="d2">
                        <p className="pd2">Estás a un paso de alinear tu modelo de negocio con la herramienta visual más efectiva para emprender. Con nuestro Business Model Canvas le darás estructura a tu empresa en nueve pasos. Es tan sencilla de usar que al final podrás explicarle de forma clara tu modelo de negocio a cualquier persona.</p>
                        <Bounce>
                            <a href="https://wortev.com/ebook-business-model-canvas/" target='blank' className="btn-scroll"  style={{color:"#f2f2f2", textAlign:"center", marginlLeft:".5em"}}
 >Descargar e-book</a>
                        {/* <DownloadLink
                            label="Descargar E-book"
                             filename="guia.pdf"
                            
                               exportFile={()=>"hola potos"}
                               /> */}
                        </Bounce>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default LandingSeccion2;
