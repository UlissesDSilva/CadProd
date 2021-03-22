import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import RegisterForn from './templates/RegisterForn'
import SearchForn from './templates/SearchForn'

export default (props) => {
    return(
        <Router history={hashHistory}>
            <Route path="/cadforn" component={RegisterForn}/>
            <Route path="/searchforn" component={SearchForn}/>
            {/* <Redirect from='*' to="/cadprod"/> */}
        </Router>
    )
}
