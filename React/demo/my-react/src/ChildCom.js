import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChilCom extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    onclickchild=()=>{
        if(this.props.onfather){
            this.props.onfather('father')
        }else{
            console.log('child')
        }
    }
    render() {
        const { user } = this.props
        return (
            <div onClick={this.onclickchild}>子控件
                <label htmlFor="">{user.name}</label>
                <label htmlFor="">{user.age}</label>
            </div>
        )
    }
}