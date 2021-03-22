 import React, { Component } from 'react'
 import axios from 'axios'
 import FormRegister from './Forms/FormRegister'
 
 const url = "http://localhost:3003/api/registerForn"

 export default class RegisterProd extends Component {
    constructor(props){
        super(props)

        this.state = {
            company: '',
            followUP: ''
        }
        this.cleanDisplay()

        this.addRegister = this.addRegister.bind(this)
        this.changeCompany = this.changeCompany.bind(this)
        this.changeFollowUP = this.changeFollowUP.bind(this)
    }

    cleanDisplay(){
        this.setState({
            ...this.state,
            company: '',
            followUP: ''
        })
    }
    
    addRegister(){
        const company = this.state.company
        const followUP = this.state.followUP || "General"
        axios.post(url, {company, followUP})
            .then(res => this.cleanDisplay())
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
            <FormRegister
                addRegister={this.addRegister}
                company={this.state.company}
                followUP={this.state.followUP}
                changeCompany={this.changeCompany}
                changeFollowUP={this.changeFollowUP}
            />
        )
    }
 }