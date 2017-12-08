//类组件
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

class Tom extends React.Component{
    render(){
        return <p>{this.props.date.toLocaleTimeString()}</p>
    }
}

function tick() {
    ReactDOM.render(
      <Tom date={new Date()} />,//这里是属性
      document.getElementById('tomdom')
    );
}
setInterval(tick,1000)
export default Tom;