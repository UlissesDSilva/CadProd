import React from 'react'
import './Custon.css'

export default (props) => {

    return(
        <div className="register">
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="prod">Produto</label>
                    <input  className="form-control delete" id="prod"/>
                </div>
            </div>
            <button className="btn btn-danger delete">
                <i className="fa fa-trash-o"></i>
            </button>
        </div>
    );
};