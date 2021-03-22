import React, { Component } from 'react'
import axios from 'axios'

import FormForn from './Forms/FormForn'

const url = "http://localhost:3003/api/registerForn"

 export default class SearchProd extends Component {
    constructor(props){
        super(props)

        this.state= {
            company: '',
            followUP: '',
            resultQuery: '',
            list: []
        }

        this.changeCompany = this.changeCompany.bind(this)
        this.changeFollowUP = this.changeFollowUP.bind(this)
        this.changeResultQuery = this.changeResultQuery.bind(this)
        this.queryFron = this.queryFron.bind(this)
        this.deleteForn = this.deleteForn.bind(this)
        this.updateForn = this.updateForn.bind(this)
        
    }

    search(query = ''){
        axios.get(`${url}?company__regex=/${query}/`)
            .then(res => this.setState({
                ...this.state,
                resultQuery: query,
                list: res.data
            }))
    }
    cleanDisplay(){
        this.setState({
            ...this.state,
            company: '',
            followUP: '',
        })
    }

    queryFron(){
        this.search(this.state.resultQuery)
    }

    updateForn(el){
        axios.put(`${url}/${el.id}`, {
            ...el,
            company: this.state.company || el.company,
            followUP: this.state.followUP || el.followUP
        })
        .then(res => this.cleanDisplay())
    }

    deleteForn(el){
        axios.delete(`${url}/${el.id}`)
            .then(res => this.search())
    }

    changeResultQuery(evt){
        this.setState({
            ...this.state,
            resultQuery: evt.target.value
        })
    }

    changeCompany(evt){
        this.setState({
            ...this.state,
            company: evt.target.value,
        })
    }
    changeFollowUP(evt){
        this.setState({
            ...this.state,
            followUP: evt.target.value,
        })
    }

    render(){
        return(
            <div>
                <FormForn
                    company={this.state.company}                 
                    followUP={this.state.followUP}
                    listForn={this.state.list}
                    queryFron={this.queryFron}
                    changeCompany={this.changeCompany}
                    changeFollowUP={this.changeFollowUP}
                    changeResultQuery={this.changeResultQuery}
                    deleteForn={this.deleteForn}
                    updateForn={this.updateForn}
                />
            </div>

        )
    }
 }