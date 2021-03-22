 import React, { Component } from 'react'
 import axios from 'axios'
 import FormRegister from './Forms/FormRegister'
 
 const url = "http://localhost:3003/api/registerPro"

 export default class RegisterProd extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            price: '',
            amount: '',
            category: ''
        }
        this.cleanDisplay()

        this.addRegister = this.addRegister.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changePrice = this.changePrice.bind(this)
        this.changeAmount = this.changeAmount.bind(this)
        this.changeCategory = this.changeCategory.bind(this)
    }

    cleanDisplay(){
        this.setState({
            ...this.state,
            name: '',
            price: '',
            amount: '',
            category: ''
        })
    }
    
    addRegister(){
        const name = this.state.name
        const price = this.state.price
        const amount = this.state.amount || 10
        const category = this.state.category
        axios.post(url, {name, price, amount, category})
            .then(res => this.cleanDisplay())
    }

    changeName(evt){
        this.setState({
            ...this.state,
            name: evt.target.value,
        })
    }
    changePrice(evt){
        this.setState({
            ...this.state,
            price: evt.target.value,
        })
    }
    changeAmount(evt){
        this.setState({
            ...this.state,
            amount: evt.target.value,
        })
    }
    changeCategory(evt){
        this.setState({
            ...this.state,
            category: evt.target.value,
        })
    }

    render(){
        return(
            <FormRegister
                addRegister={this.addRegister}
                name={this.state.name}
                price={this.state.price}
                amount={this.state.amount}
                category={this.state.category}
                changeName={this.changeName}
                changePrice={this.changePrice}
                changeAmount={this.changeAmount}
                changeCategory={this.changeCategory}
            />
        )
    }
 }