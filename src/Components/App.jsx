import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Landing from '../pages/Landing'
import BMC from '../pages/BMC' 
import MisDatosEmprendedor from '../pages/MisDatosEmprendedor'
import NotFound from '../Components/NotFound'
import ReactGA from 'react-ga'
function App(props){
    const loginState = props.loginState;
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render = {(props)=>(
            loginState === true
            ? <Component {...props}/>
            : <Redirect to='/' />
        )}/>
    ) 
    ReactGA.initialize('UA-2862046-55')
    ReactGA.pageview('/')
    return <BrowserRouter>
        <Switch>
            <Route 
            exact 
            path="/"
            component={Landing}/>
            <PrivateRoute 
            path="/confirm"
            component={MisDatosEmprendedor}/>
            <PrivateRoute
            path="/my-bmc"
            component={BMC}
            /> 
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
}

const mapStateToProps = state => {
    return{
        loginState: state.loginState,
    };
};

export default connect(mapStateToProps, null)(App);