import React from 'react'
import BMClist from './BMClist'
import ModalAlert from './ModalAlert'
import './styles/MisBMC.css'
import plus from '../images/icons-sidebar/plus.svg'
import axios from 'axios'
import { urlsApi } from '../Services/Constantes';

class MisBMC extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            idaux: 0,
            show: false,
            bmcdata: {
                listabmc: this.props.bmcdata.listabmc,
            },
            pActive:this.props.pActive,
        }
    }
    handleClickCopyBMC = (id, meta) => {
        const data = {
            id_bmc: id,
            id_bmc_meta: meta,
        }
        axios ({
            url:  `${urlsApi.copiarbmc}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + urlsApi.token
            }
        })
        .then(response => {
            if(response.data.success === true){
                window.location="/";
            }
            else{
                console.log(response);
            }
        }).catch(error => {
            this.setState({loading: false, error: error})
        })
    }
    handleConfirm = async () => {
        const data = {
            id_bmc: this.state.idaux,
        }
        await axios ({
            url:  `${urlsApi.papelerabmc}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + urlsApi.token
            }
        })
        .then(response => {
            if(response.data.success === true){
                window.location="/";
            }
            else{
                console.log(response);
            }
        }).catch(error => {
            this.setState({loading: false, error: error})
        })
    }

    handleClickDelete = (id) => {
        this.setState({show: true, idaux: id});
    }
    
    handleClose = e => {
        this.setState({show:false})
    }
    handleShow = e => {
        this.setState({show:true})
    }
    render(){     
        return <div className="container-fluid main-bmc">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="titulo">Mis BMC</h1>
                </div>
                <div className="col-md-3">
                    <p type="button" className="crear d-none d-sm-none d-md-block" style={{cursor: 'pointer'}} onClick={this.props.onClickNew}>+ Crear nuevo BMC</p>     
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div style={{cursor: 'pointer'}} className="card-body flex justify-content-around card-bmc" onClick={this.props.onClick}>
                        <div><img src={plus} alt=""/></div>
                        <h5 className="card-title">Crear nuevo BMC</h5>
                    </div>
                </div>
                 {this.state.bmcdata.listabmc.map(function(d){
                    return (
                        <BMClist 
                        key={d.id_bmc}
                        id_bmc={d.id_bmc}
                        estatus={d.estatus}
                        id_bmc_meta={d.id_bmc_meta}
                        titulo={d.titulo}
                        handleClickCopyBMC={this.handleClickCopyBMC}
                        handleClickMoveTrash={this.handleClickDelete}
                        pActive={this.state.pActive}
                        irBmc={this.props.irBmc}
                        />
                    )
                },this)} 
            </div>
            <div className="modal-alert"><ModalAlert elim={true} show={this.state.show} handleConfirm={this.handleConfirm} handleClose={this.handleClose} handleShow={this.handleShow}></ModalAlert></div>
        </div>
    }
}

export default MisBMC