import './Custom.css'
import React from 'react'
import Button from './Button'

export default (props) => {
    const listForn = props.listForn || []
    const listAux = {
        company: '',
        followUP: ''
    }
    listForn.map(el =>{
        listAux.id = el._id
        listAux.company = el.company
        listAux.followUP = el.followUP
        
    })
    
    return(
        <div role="form" className="formForn">
            <div className="field">
                <input id="searchForn" placeholder="Pesquise pelo nome do Fornecedor"
                    onChange={props.changeResultQuery}
                />
                <Button style="primary" icon="search" onClick={props.queryFron}/>
            </div>
            <div className="field">
                <input id="fornecedor" placeholder="Nome do Fornecedor"
                    value={props.company || listAux.company} onChange={props.changeCompany}
                />
            </div>
            <div className="field">
                <input id="seguimento" placeholder="Seguimento"
                    value={props.followUP || listAux.followUP} onChange={props.changeFollowUP}
                />
                <Button style="warning" icon="undo" onClick={() => props.updateForn(listAux)}/>
                <Button style="danger" icon="trash-o" onClick={() => props.deleteForn(listAux)}/>
            </div>
        </div>
    );
};