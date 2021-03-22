import './Custom.css'
import React from 'react'
import Button from './Button'

export default (props) => {

    return(
        <div role="form" className="formRegister">
            <div className="field">
                <input id="name" placeholder="Nome do produto" required
                    value={props.name} onChange={props.changeName}
                />
            </div>
            <div className="group">
                <div>
                    <input id="price" placeholder="Preço Ex: 9.99" required
                        value={props.price} type="number" onChange={props.changePrice}
                    />
                </div>
                <div>
                    <input id="amount" placeholder="Qauntidade"
                        value={props.amount} type="number" onChange={props.changeAmount}
                    />
                </div>
            </div>
            <div className="field">
                <input id="category" placeholder="Categoria" required
                    value={props.category} onChange={props.changeCategory}
                />
                <Button style="success" icon="plus" onClick={props.addRegister}/>
            </div>
        </div>
    );
};