//类组件
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import ChildCom from './ChildCom';


class Tom extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.date);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }
    onfather=(str)=>{
        console.log(str)
    }
    render() {
        return (
            <div>
                <ChildCom onfather={this.onfather} user={{name:'tom',age:20}} />
                <p>{this.state.date.toLocaleTimeString()}</p >
            </div>

        )
    }
}
export default Tom;