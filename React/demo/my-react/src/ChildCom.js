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
            console.log(this)
        }
    }
    render() {
        //因为父控件,每秒刷新,所以子控件也会每秒被执行.
        const { user,onfather } = this.props
        return (
            <div onClick={this.onclickchild}>子控件
                <label htmlFor="">{user.name}</label>
                <label htmlFor="">{user.age}</label>
            </div>
        )
    }
}