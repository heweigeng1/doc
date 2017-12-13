import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './switch.css'

export class Tom_Switch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: 1,//1 on 0 off
            btn: 'on',
            style:'switch_left'
        }
    }
    onChange = () => {
        if (this.state.isOn === 1) {
            this.setState({
                isOn: 0,
                btn: 'off',
                style:'switch_right'
            })
        } else {
            this.setState({
                isOn: 1,
                btn: 'on',
                style:'switch_left'
            })
        }
    }
    render() {
        return (
            <div className='switchdiv'>
                <span onClick={this.onChange} className={this.state.style}>{this.state.btn}</span>
            </div>
        )
    }
}

export default Tom_Switch