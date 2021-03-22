import React, { Component } from 'react'
import axios from 'axios'

import FormProd from './Forms/FormProd'

const url = "http://localhost:3003/api/registerPro"

 export default class SearchProd extends Component {
    constructor(props){
        super(props)

        this.state= {
            name: '',
            price: '',
            amount: '',
            category: '',
            resultQuery: '',
            list: []
        }

        this.changeName = this.changeName.bind(this)
        this.changePrice = this.changePrice.bind(this)
        this.changeAmount = this.changeAmount.bind(this)
        this.changeCategory = this.changeCategory.bind(this)
        this.changeResultQuery = this.changeResultQuery.bind(this)
        this.queryProd = this.queryProd.bind(this)
        this.deleteProd = this.deleteProd.bind(this)
        this.updateProde = this.updateProde.bind(this)
    }

    search(query = ''){
        axios.get(`${url}?name__regex=/${query}/`)
            .then(res => this.setState({
                ...this.state,
                resultQuery: query,
                list: res.data
            }))
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

    queryProd(){
        this.search(this.state.resultQuery)
    }

    updateProde(el){
        axios.put(`${url}/${el.id}`, {
            ...el,
            name: this.state.name || el.name,
            price: this.state.price || el.price,
            amount: this.state.amount || el.amount,
            category: this.state.category || el.category
        })
        .then(res => this.cleanDisplay())
    }

    deleteProd(el){
        axios.delete(`${url}/${el.id}`)
            .then(res => this.search())
    }

    changeResultQuery(evt){
        this.setState({
            ...this.state,
            resultQuery: evt.target.value
        })
    }

    changeName(evt){
        this.setState({
            ...this.state,
            name: evt.target.value
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
            <div>
                <FormProd
                    changeName={this.changeName} 
                    queryProd={this.queryProd}
                    listProd={this.state.list}
                    changeResultQuery={this.changeResultQuery}
                    changePrice={this.changePrice}
                    changeAmount={this.changeAmount}
                    changeCategory={this.changeCategory}
                    deleteProd={this.deleteProd}
                    updateProde={this.updateProde}
                    name={this.state.name}                   
                    price={this.state.price}                   
                    amount={this.state.amount}                   
                    category={this.state.category}                   
                />
            </div>

        )
    }
 }