import React from "react";
import "../modal/modalLogin.css";

const ModalLogin = (props) => {
  return (
    <div className="Modal_overlay">
      <div className="ModalContainer">
        <h1 className="textjeje">Hola Modal</h1>
        <p> </p>

        <button className="closebtn" onClick={props.click}>
          x
        </button>
      </div>
    </div>
  );
};
export default ModalLogin;
