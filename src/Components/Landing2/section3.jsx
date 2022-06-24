import React from "react";
import ImageS3 from "../../images/Rectangle 213.png";
import ImageS31 from "../../images/Rectangle 214.png";
import ImageS32 from "../../images/Rectangle 215.png";
import ImageS33 from "../../images/Rectangle 216.png";
import ImageS34 from "../../images/Rectangle 217.png";
import ImageS35 from "../../images/Rectangle 218.png";
import ImageS36 from "../../images/Rectangle 219.png";

const Section3 = (props) => {
  return (
    <div className="section3">
      <div className="containers31">
        <h2 className="tituloS3">Con los beneficios de una aceleradora</h2>
        <p className="texts3">
          En <span className="textbold"> WORTEV </span>somos expertos en
          optimizar modelos de negocio <br /> para impulsar empresas de alto
          impacto.
        </p>
        <div className="btns3container">
          <a href className="btns3" onClick={props.click}>
            EMPIEZA AHORA
          </a>
        </div>
      </div>
      <div className="containers32">
        <div className="imgsm">
          <img className="images31" src={ImageS3} alt="section2 " />
        </div>
        <div className="imgsm">
          <img className="images32" src={ImageS31} alt="section3 " />
        </div>
        <div className="imgmd">
          <img className="images33" src={ImageS32} alt="section3 " />
        </div>
        <div className="imglg">
          <img className="images34" src={ImageS33} alt="section3 " />
        </div>
        <div className="imgmd">
          <img className="images33" src={ImageS34} alt="ection3 " />
        </div>
        <div className="imgsm">
          <img className="images32" src={ImageS35} alt="section3 " />
        </div>
        <div className="imgsm">
          <img className="images31" src={ImageS36} alt="section3 " />
        </div>
      </div>
    </div>
  );
};
export default Section3;
