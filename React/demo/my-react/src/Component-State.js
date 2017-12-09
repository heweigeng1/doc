import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Component-State.css';

var element = <span onclick={this.onAddWidth} className='comspan'></span>

class Com_State extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
        console.log(props);
    }
    render() {
        return element
    }
    onAddWidth=()=>{

    }
}
// function updateWidth() {
//     console.log(element);
//     ReactDOM.render(<Com_State />, document.getElementById('my-state'))
// }



// updateWidth()