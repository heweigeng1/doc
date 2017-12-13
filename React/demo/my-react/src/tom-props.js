import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Tom_Props extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <label htmlFor="">{this.props.money}</label>
        )
    }
}