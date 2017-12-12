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
            date: new Date(),
            user:{
                name:'tom',
                age:60,
            },
            adress:"我在北京"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }
    onfather=(str)=>{
        console.log(str)
        
        this.setState({
           user:{
               name:'lili',
               age:20,
           }
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <ChildCom onfather={this.onfather} user={this.state.user} />
                <p>{this.state.date.toLocaleTimeString()}</p >
            </div>

        )
    }
}
export default Tom;