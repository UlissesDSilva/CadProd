import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import './App.css'
import React from 'react'
import Header from '../components/header/Header'
import Logo from '../components/logo/logo'
import Nav from '../components/nav/nav'
import Content from '../components/content/content'

export default (props) => {

    return(
        <div className='App'>
            <Logo/>
            <Header/>
            <Nav/>
            <Content/>
        </div>
    )
}