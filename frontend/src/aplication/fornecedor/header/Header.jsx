import './Header.css'
import React from 'react'

export default (props) => {

    return(
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#/cadforn">Cadastrar</a></li>
                    <li><a href="#/searchforn">Fornecedores</a></li>
                </ul>
            </nav>
        </header>
    );
};