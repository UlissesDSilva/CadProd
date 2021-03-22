import './Header.css'
import React from 'react'

export default (props) => {

    return(
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#/cadprod">Cadastrar</a></li>
                    <li><a href="#/searchprod">Produtos</a></li>
                </ul>
            </nav>
        </header>
    );
};