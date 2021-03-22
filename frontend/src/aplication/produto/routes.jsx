import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import RegisterProd from './templates/RegisterProd'
import SearchProd from './templates/SearchProd'

export default (props) => {

    return(
        <Router history={hashHistory}>
            <Route path="/cadprod" component={RegisterProd}/>
            <Route path="/searchprod" component={SearchProd}/>
            {/* <Redirect from='*' to="/cadprod"/> */}
        </Router>
    );
};