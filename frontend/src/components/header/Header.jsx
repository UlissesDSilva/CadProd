import React from 'react'
import './Header.css'

export default (props) => {

    return(
        <header>
            <nav className='header'>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>
            </nav>
        </header>
    )
}