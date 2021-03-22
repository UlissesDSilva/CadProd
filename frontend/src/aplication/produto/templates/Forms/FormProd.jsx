import './Custom.css'
import React from 'react'
import Button from './Button'

export default (props) => {
    const listProd = props.listProd || []
    const listAux = {
        id: '',
        name: '',
        price: '',
        amount: '',
        category: ''
    }
    listProd.map(el =>{
        listAux.id = el._id
        listAux.name = el.name
        listAux.price = el.price
        listAux.amount = el.amount
        listAux.category = el.category
    })
    
    return(
        <div role="form" className="formProd">
            <div className="field">
                <input id="searchProd" placeholder="Pesquise pelo nome do produto"
                    onChange={props.changeResultQuery}
                />
                <Button style="primary" icon="search" onClick={props.queryProd}/>
            </div>
            <div className="field">
                <input id="name" placeholder="Nome do produto"
                    value={props.name || listAux.name} onChange={props.changeName}
                />
            </div>
            <div className="group">
                <div>
                    <input id="price" placeholder="Preço Ex: 9.99"
                        value={props.price || listAux.price} type="number" onChange={props.changePrice}
                    />
                </div>
                <div>
                    <input id="amount" placeholder="Qauntidade"
                        value={props.amount || listAux.amount} type="number" onChange={props.changeAmount}
                    />
                </div>
            </div>
            <div className="field">
                <input id="category" placeholder="Categoria"
                    value={props.category || listAux.category} onChange={props.changeCategory}
                />
                <Button style="warning" icon="undo" onClick={() => props.updateProde(listAux)}/>
                <Button style="danger" icon="trash-o" onClick={() => props.deleteProd(listAux)}/>
            </div>
        </div>
    );
};