import React from 'react'
import './Custon.css'

export default (props) => {

    return(
        <div className="register">
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="prod">Produto</label>
                    <input  className="form-control" id="prod"/>
                <div className="form-group col-md-6">
                    <label htmlFor="price">Preço</label>
                    <input className="form-control" id="price"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="qtd">Quantidade</label>
                    <input className="form-control" id="qtd"/>
                </div>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Categoria</label>
                    <input className="form-control" id="category"/>
                </div>
            </div>
            <button className="btn btn-warning">
                <i className="fa fa-undo"></i>
            </button>
        </div>
    );
};