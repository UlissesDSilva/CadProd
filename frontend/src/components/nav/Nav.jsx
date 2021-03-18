import React from 'react'
import './Nav.css'

export default (props) => {

    return(
        <nav className='nav'>
            <ul>
                <li><a href="#/cadprod">Cadastrar</a></li>
                <li><a href="#/upprod">Atualizar</a></li>
                <li><a href="#/delprod">Excluir</a></li>
            </ul>
        </nav>
    )
};