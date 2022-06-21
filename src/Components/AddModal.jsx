import React from 'react'
import { Modal } from 'react-bootstrap'
import './styles/Grid.css'

class AddModal extends React.Component{

    render(){
        return <Modal show={this.props.show} onHide={this.props.onClose} size="lg">
                <div className="">
                    <div className="">
                        <div className="modal-body">
                            <button type="button" className="btn-close" onClick={this.props.onClose}></button>
                            <div className="modal-head">
                                <span>{this.props.currentName}</span>
                                <div className="header-modal-img">
                                    <img src="icons/people.svg" alt=""/>
                                </div>
                                <div className="modal-date">{this.props.date}</div>  
                            </div>
                            <div className="modal-desc">{this.props.currentInfo}</div>
                            <textarea 
                                className="modal-t_area t-border" 
                                name="text"
                                rows="7" 
                                maxLength="250" 
                                onChange={this.props.onChange}
                                value={this.props.text}>
                            </textarea>
                            <div className="modal-btns">
                                <p>Máximo 250 caracteres</p>
                                <br />
                                <button type="button" onClick={this.props.onClick} className="btn-modal">Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
        </Modal>
    }
}

export default AddModal;