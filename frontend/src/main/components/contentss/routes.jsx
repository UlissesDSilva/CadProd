import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Prod from '../../../aplication/produto/Produto'
import Forn from '../../../aplication/fornecedor/Fornecedor'

export default (props) => {

    return(
        <Router history={hashHistory}>
            <Route path="/produto" component={Prod}/>
            <Route path="/fornecedor" component={Forn}/>
            {/* <Redirect from="*" to="/produto"/> */}
        </Router>
    );
};