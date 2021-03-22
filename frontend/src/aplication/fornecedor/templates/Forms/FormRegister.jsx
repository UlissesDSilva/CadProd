import './Custom.css'
import React from 'react'
import Button from './Button'

export default (props) => {

    return(
        <div role="form" className="formRegister">
            <div className="field">
                <input id="fornecedor" placeholder="nome do Fornecedor" required
                    value={props.company} onChange={props.changeCompany}
                />
            </div>
            <div className="field">
                <input id="seguimento" placeholder="Seguimento"
                    value={props.followUP} onChange={props.changeFollowUP}
                />
                <Button style="success" icon="plus" onClick={props.addRegister}/>
            </div>
        </div>
    );
};