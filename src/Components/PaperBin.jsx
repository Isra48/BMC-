import React from 'react'
import BMClist from './BMClist'
import './styles/MisBMC.css'
import del from '../images/delete.svg'
import axios from 'axios'
import ModalAlert from './ModalAlert'
import { urlsApi } from '../Services/Constantes';

class PaperBin extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            idaux: 0,
            elim: false,
            show: false,
            gActive: false,
            bmcdata: {
                listabmc: this.props.bmcdata.listabmc,
            },
            pActive: this.props.pActive,
        }
    }
    
    onClickVaciar = () => {
        const data = {
            id_usuario: localStorage.getItem('userID'),
        }
        axios ({
            url:  `${urlsApi.eliminarbmcusuario}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + urlsApi.token
            }
        })
        .then(response => {
            if(response.data.success === true){
                window.location="/my-bmc";
            }
            else{
                console.log(response);
            }
        }).catch(error => {
            this.setState({loading: false, error: error})
        })
    }

    handleClickDelete = (id) => {
        this.setState({show: true, elim: true, idaux: id});
    }
    
    handleClose = e => {
        this.setState({show:false})
    }
    handleShow = e => {
        this.setState({show:true})
    }
    handleConfirm = e => {
        this.setState({show:false})
        if(this.state.elim===true){
            const data = {
                id_bmc: this.state.idaux,
            }
            axios ({
                url:  `${urlsApi.eliminarbmc}`,
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
        else{
            this.onClickVaciar();
        }
    }

    render(){    
        console.log(this.state.bmcdata);   
        return <div className="container-fluid main-bmc">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="titulo">Papelera</h1>
                </div>
                <div className="col-md-3">
                    <p type="button" className="crear" onClick={this.handleShow}><img src={del} alt=""/> Vaciar Papelera</p>     
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                 {this.state.bmcdata.listabmc.map(function(d){
                    return (
                        <BMClist 
                        key={d.id_bmc}
                        id_bmc={d.id_bmc}
                        estatus={d.estatus}
                        id_bmc_meta={d.id_bmc_meta}
                        titulo={d.titulo}
                        pActive={this.state.pActive}
                        handleClickDelete={this.handleClickDelete}
                        />
                    )
                },this)} 
            </div>
            <div className="modal-alert"><ModalAlert elim={this.state.elim} show={this.state.show} handleConfirm={this.handleConfirm} handleClose={this.handleClose} handleShow={this.handleShow}></ModalAlert></div>
        </div>
    }
}

export default PaperBin