import React from 'react'
import { Modal } from 'react-bootstrap'
import './styles/ModalAlert.css'

class ModalAlert extends React.Component{
    render(){
        return  <Modal show={this.props.show} onHide={this.props.handleClose}>
            <div className="modal-alert-content text_center">
                <div>
                    <h5 className="modal-title modal-alert-text">{this.props.elim ? "¡Estás eliminando un BMC!" : "¡Estás vaciando tu papelera!"}</h5>
                    <span style={{cursor: 'pointer', marginLeft:'30px'}} onClick={this.props.handleClose} className="btn-close"></span>
                    <p>{this.props.elim ? "¿Estás seguro que deseas borrar este BMC?" : "¿Estás seguro que deseas borrar tu papapelera?"}</p>
                </div>

                <div className="alert-btn-container container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-12">
                            <button className="btn-alert-cancel" variant="secondary" onClick={this.props.handleClose}>
                                Cancelar
                            </button>
                            <button style={{marginLeft: '2em'}} className="btn-alert" variant="primary" onClick={this.props.handleConfirm}>
                                {this.props.elim ? "Quiero borrarlo" : "Quiero borrarlos"}
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
      </Modal>
    }
}

export default ModalAlert