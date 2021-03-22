import './Nav.css'
import React from 'react'

export default (props) => {

    return(
        <div className="nav">
            <a href="#/produto">
                <h1>Produto</h1>
            </a>
            <a href="#/fornecedor">
                <h1>Fornecedor</h1>
            </a>
        </div>
    );
};