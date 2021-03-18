import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Register from '../components/content/actions/Register'
import Update from '../components/content/actions/Update'
import Delete from '../components/content/actions/Delete'
import Main from '../components/content/Main'

export default (props) => {

    return(
        <Router history={hashHistory}>
            <Route path="/cadprod" component={Register} />
            <Route path="/upprod" component={Update} />
            <Route path="/delprod" component={Delete} />
            <Route path="/" component={Main} />
            {/* <Redirect from="*" to="#"/> */}
        </Router>
    );
};