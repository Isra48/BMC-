import React from 'react'
import axios from 'axios'
import '../Components/styles/NavBar.css'
import '../Components/styles/SideBar.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from '../Components/NavBar'
import PageLoading from './PageLoading'
import SideBar from '../Components/SideBar'
import Grid from '../Components/Grid'
import MisBMC from './MisBMC' 
import PaperBin from './PaperBin'
import './styles/Dashboard.css'
import NavBar2 from './NavBar2'
import Info from '../pages/intro'
import ModalExit from './ModalExit'
import { withRouter } from 'react-router-dom'
import { urlsApi } from '../Services/Constantes';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            aux: 0,
            loading: true,
            error: null,
            gActive: false,
            pActive: false,
            iActive: false,
            mActive: false,
            titleBMC: "Escribe aquí tu título",
            metaBMC: '',
            form: {
                nombre: props.formValues.nombre,
                userID: props.formValues.userID,
                photo: props.formValues.photo,
            },
            bmcdata: {
                listaBMC: '',
            },
            bmcdataPaper: {
                listaBMC: '',
            },
            gridData: {
                keyPartners: [

                ],
                keyActivities: [

                ],
                channels: [

                ],
                keyResources: [

                ],
                customerSegments: [

                ],
                customerRelationships: [

                ],
                valuePrepositions: [

                ],
                costStructure: [

                ],
                revenueStreams: [

                ],
            }
        }
        
    }

    async componentDidMount() {
        await axios ({
            url:  `${urlsApi.listarbmc}`+'?id_usuario='+this.state.form.userID,
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + urlsApi.token
            }
        })
        .then(response => {
            this.setState({bmcdata: {
                    listabmc: response.data,
                },
                loading: false,
            });
        }).catch(error => {
            this.setState({loading: false, error: error})
        })

        await axios ({
        url:  `${urlsApi.listarbmcpapelera}`+'?id_usuario='+this.state.form.userID,
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + urlsApi.token
            }
        })
        .then(response => {
            this.setState({bmcdataPaper: {
                    listabmc: response.data,
                },
                loading: false,
            });
        }).catch(error => {
            this.setState({loading: false, error: error})
        })
    }

    
    Salir = e => {
        this.setState({mActive: true, aux: 4});
      };

    handleSubmit = e => {
        this.setState({gActive: false, pActive: false, iActive:false})
        window.location.reload();
    }

    handleClickNew = e => {
        this.setState({gActive: true, pActive: false, iActive:false})
    }

    handleClick = e=> {
        this.setState({gActive: true, pActive: false, iActive:false})
    }
    
    handleClickPaper = e =>{
        if(this.state.gActive==true){
            this.setState({mActive: true, aux: 1});
        }
        else{
            this.setState({pActive: true, gActive: false, iActive: false});
        }
    }

    handleClickBmc = e => {
        if(this.state.gActive==true){
            this.setState({mActive: true, aux: 2});
        }
        else{
            this.setState({pActive: false, gActive: false, iActive: false});
        }
    }

    handleClickInfo = e =>{
        if(this.state.gActive==true){
            this.setState({mActive: true, aux: 3});
        }
        else{
            this.setState({pActive: false, gActive: false, iActive: true});
        }
    }

    handleClose = e => {
        this.setState({mActive: false});
    }
    handleConfirm = e => {
        this.setState({mActive: false});
        switch(this.state.aux){
            case 1:
                this.setState({pActive: true, gActive: false, iActive: false});
                break;
            case 2:
                this.setState({pActive: false, gActive: false, iActive: false});
                break;
            case 3:
                this.setState({pActive: false, gActive: false, iActive: true});
                break;
            case 4:
                localStorage.clear();
                this.props.history.push('/');
                break;
        }
    }

    irBmc = async (id, meta) => {
        this.setState({loading: true})
        console.log(id);
        var verTalBMC=urlsApi.verbmc + meta;
        console.log(verTalBMC);
        const datos=[];
        await axios({
            url: `${verTalBMC}`,
            method: 'GET',
            data: datos,
            headers:{
                'Authorization': 'Bearer ' + urlsApi.token
            }
        })
        .then(response =>{
            var resultado=JSON.parse(response.data.contenido);
            console.log("Resultado");
            console.log(resultado);
            this.setState({
                currentlyModified: '',
                currentName: '',
                error: null,
                editingBMC: true,
                editing: true,
                editingID: '',
                text: '',
                titleBMC: resultado.title,
                metaBMC: meta,
                gridData: {
                    keyPartners:  
                        resultado.data.keyPartners
                    ,
                    keyActivities:  
                        resultado.data.keyActivities
                    ,
                    channels: 
                        resultado.data.channels
                    ,
                    keyResources: 
                        resultado.data.keyResources
                    ,
                    customerSegments: 
                        resultado.data.customerSegments
                    ,
                    customerRelationships: 
                        resultado.data.customerRelationships
                    ,
                    valuePrepositions: 
                        resultado.data.valuePrepositions
                    ,
                    costStructure: 
                        resultado.data.costStructure
                    ,
                    revenueStreams: 
                        resultado.data.revenueStreams
                    ,
                },
                loading: false,
                pActive: false,
                iActive: false,
                gActive: true,                
            }) 
            var stateTotal=JSON.stringify(this.state);
            localStorage.setItem('elState', stateTotal);
            localStorage.setItem('idBMC', id);
            localStorage.setItem('idBMCmeta', meta);
        })
        .catch(error => {
                this.setState({loading: false, error:error});
                console.log(error);
                return error;
        }); 
    }

    render() {
        if(this.state.loading===true){
            return <PageLoading/>  
        }
        return <React.Fragment>
            {this.state.gActive ?  <NavBar 
            formValues={this.state.form} Salir={this.Salir}
            />: <NavBar2 formValues={this.state.form}
            />}
           
            <div className="main flex">

                <SideBar onClickPaper={this.handleClickPaper}
                onClickBmc={this.handleClickBmc}
                onClickInfo={this.handleClickInfo} />
                {this.state.mActive ? <ModalExit 
                show={this.state.mActive}
                handleClose={this.handleClose}
                handleConfirm={this.handleConfirm}/> : null}
                {this.state.gActive&!this.state.pActive&!this.state.iActive ? <Grid
                metaBMC={this.state.metaBMC}
                title={this.state.titleBMC}
                editingBMC={this.state.editingBMC}
                gridData={this.state.gridData}
                onSubmit={this.handleSubmit}
                /> : this.state.pActive&!this.state.gActive&!this.state.iActive ? <PaperBin
                bmcdata={this.state.bmcdataPaper}
                pActive={this.state.pActive}/>
                : this.state.iActive&!this.state.gActive&!this.state.pActive ? <Info/> : <MisBMC
                onClickNew={this.handleClickNew}
                onClick={this.handleClick}
                bmcdata={this.state.bmcdata}
                pActive={this.state.pActive}
                irBmc={this.irBmc}
                />}
            </div>
        </React.Fragment>
    }
}

export default withRouter(Dashboard);