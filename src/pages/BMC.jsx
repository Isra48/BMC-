import React from 'react'
import axios from 'axios'
import PageLoading from '../Components/PageLoading'
import Dashboard from '../Components/Dashboard'
import pp from '../images/icons-sidebar/pp.svg'
import { urlsApi } from '../Services/Constantes';


class BMC extends React.Component{

    constructor(props) {
        super(props);
        if (localStorage.getItem('userID')!=null) {
            this.state = { 
                loading: true,
                error: null,
                form: {
                    nombre: '',
                    apellido: '',
                    userID: localStorage.getItem('userID'),
                    photo:'',
                }
            }
        }
        else{

        }
    }

    async componentDidMount() {
        await axios({
            url: `${urlsApi.leerusuario}`+this.state.form.userID,
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + urlsApi.token
            }
        }) 
        .then(response =>{
            if(response.data.data.id){
                this.setState({form: {
                    nombre: response.data.data.nickname,
                    userID: response.data.data.id,
                    photo: (response.data.data.profile_photo_path.length == 0) ? pp : response.data.data.profile_photo_path,
                    },
                    loading: false,
                });
                //console.log(this.state);
                localStorage.setItem('userID', response.data.data.id);
                localStorage.setItem('userName',  response.data.data.name);
                localStorage.setItem('email', response.data.data.email);
            }  
        })
        .catch(error => {
            this.setState({loading: false, error:error});
            console.log(error);
            alert(error);
            return error;
        })
    }

    render(){
        if(this.state.loading === true){
            return <PageLoading/>
        }
        return <React.Fragment>
            <Dashboard
            formValues={this.state.form}
            />
        </React.Fragment>
    }
}

export default BMC