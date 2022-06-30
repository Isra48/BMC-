import React from "react";
import "../modal/modalLogin.css";

const ModalLogin = (props) => {
  return (
    <div className="Modal_overlay">
      <div className="ModalContainer">
        <p className="headmodal">
          {" "}
          <span className="textbold"> Iniciar sesion </span>y avanza hacia la
          definición de tu<span className="textbold"> modelo de negocio.</span>
        </p>
        <p className="subhead">
          {" "}
          Sí ya tienes cuenta en wortev.com puedes usar tus mismos datos para
          acceder
        </p>

        <button className="closebtn" onClick={props.click}>
          x
        </button>
        <div className="emailbox">
          <div className="inputemailwv">
            <div className="correowv" for="emailAddress">
              Correo:
            </div>
            <input
              className="emailwvbox"
              type="email"
              size="32"
              minlength="3"
              maxlength="64"
            />
            <div className="passwordwv" for="password">
              Contraseña:
            </div>
            <input
              className="passbox"
              type="password"
              size="32"
              minlength="3"
              maxlength="64"
            />
            <div className="buttonlogin-forgetpass">
              <input
                className="btningresarmodal"
                type="submit"
                value="Ingresar"
              />
              <p type="button" className="forgetpassword">
                ¿Contraseña olvidada?{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalLogin;
