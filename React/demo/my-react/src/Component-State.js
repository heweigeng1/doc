import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Component-State.css';

class Com_State extends React.Component {
    constructor(props){
        super(props)
        this.state={
            width:100,
            num:10,
            isAdd:true,
        }
        console.log(props);
    }
    updateWidth=()=> {
        this.addwidth()
    }
    addwidth=()=>{
        setInterval(()=>{
            if(this.state.isAdd){
                this.setState({
                    isAdd:this.state.width>=200?false:true,//这样写有个问题,会等于多赋值一次+10
                    width:this.state.width+10,
                })
            }else{
                this.setState({
                    isAdd:this.state.width<=100?true:false,//这样写有个问题,会等于多赋值一次-10
                    width:this.state.width-10,
                })
            }
            
        },50)
    }
    render() {
        console.log(this.state.width)
        return <span onClick={this.updateWidth} className='comspan' style={{'width':this.state.width+'px'}}>点击</span>
    }
}


export default Com_State;