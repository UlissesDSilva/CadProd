import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Prod from '../../../aplication/produto/Produto'
import Forn from '../../../aplication/fornecedor/Fornecedor'
import Home from './Home'

export default (props) => {

    return(
        <Router history={hashHistory}>
            <Route path="/produto" component={Prod}/>
            <Route path="/fornecedor" component={Forn}/>
            <Route path="/" component={Home}/>
            {/* <Redirect from="*" to="/produto"/> */}
        </Router>
    );
};