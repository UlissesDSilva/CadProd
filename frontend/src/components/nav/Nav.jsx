import React from 'react'
import './Nav.css'

export default (props) => {

    return(
        <nav className='nav'>
            <ul>
                <li><a href="#/cadprod">Produtos</a></li>
                <li><a href="#/cadfor">Fornecedores</a></li>
            </ul>
        </nav>
    )
};