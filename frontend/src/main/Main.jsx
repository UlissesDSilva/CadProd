import './Main.css'

import React from 'react'
import Logo from './components/logo/Logo'
import Nav from './components/nav/Nav'
import Content from './components/contentss/Content'


export default (props) => {

    return(
        <div className="main">
            <Logo/>
            <Nav/>
            <Content/>
        </div>
    );
};