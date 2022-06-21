import React from 'react'
import del from '../images/delete.svg'
import edit from '../images/edit.svg'
import copy from '../images/copy.svg'
import undo from '../images/undo.svg'
import ModalAlert from './ModalAlert'
import './styles/BMClist.css'
import axios from 'axios'
import { urlsApi } from '../Services/Constantes';
import { Redirect } from "react-router-dom";
class BMClist extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            pActive:this.props.pActive,
            redirect: null,
        }
    }
    handleclickrestorebmc(id){
        const data = {
            id_bmc: id,
        }
        axios ({
            url:  `${urlsApi.restaurarbmc}`,
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
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        const isPaper=this.state.pActive;
        return <div className="col" >
                    <div className="card-body card-bmc" id_bmc={this.props.id_bmc} id_bmc_meta={this.props.id_bmc_meta}>
                         <h5 className="card-title break-word title-bmc">{this.props.titulo}</h5>                                
                            {isPaper ?
                                <div className="card-text icons flex justify-content-end">
                                    <button className="svg-icons card-text" onClick={()=>this.handleclickrestorebmc(this.props.id_bmc)}><img className="undo" src={undo} alt=""/></button>
                                    <button className="svg-icons card-text" onClick={()=>this.props.handleClickDelete(this.props.id_bmc)}><img src={del} alt=""/></button>
                                </div>
                                
                            : 
                                <div className="card-text icons flex justify-content-end">
                                    <button className="svg-icons card-text" onClick={()=>this.props.irBmc(this.props.id_bmc, this.props.id_bmc_meta)}><img style={{height:'20px'}} src={edit} alt=""/></button>
                                    <button className="svg-icons card-text" onClick={()=>this.props.handleClickCopyBMC(this.props.id_bmc, this.props.id_bmc_meta)}><img style={{height:'20px'}}  src={copy} alt=""/></button>
                                    <button className="svg-icons card-text" onClick={()=>this.props.handleClickMoveTrash(this.props.id_bmc)}><img style={{height:'17px'}} src={del} alt=""/></button>
                                </div>
                            }
                                
                                
                    </div>
                 </div>
        
    }
        
}
export default BMClist