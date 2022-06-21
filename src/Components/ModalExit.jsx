import React from 'react'
import { Modal } from 'react-bootstrap'
import './styles/ModalAlert.css'

class ModalExit extends React.Component{
    render(){
        return  <Modal show={this.props.show} onHide={this.props.handleClose}>
            <div className="modal-alert-content text_center">
                <div>
                    <h5 className="modal-title modal-alert-text">¿Ya has guardado tus cambios?</h5>
                    <span style={{cursor: 'pointer', marginLeft:'30px'}} onClick={this.props.handleClose} className="btn-close"></span>
                    <p>Recuerda guardar tus cambios antes de salir</p>
                </div>

                <div className="alert-btn-container container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-12">
                            <button className="btn-alert-cancel" variant="secondary" onClick={this.props.handleConfirm}>
                                Salir igualmente
                            </button>
                            <button style={{marginLeft: '2em'}} className="btn-alert" variant="primary" onClick={this.props.handleClose}>
                                Quiero guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
      </Modal>
    }
}

export default ModalExit