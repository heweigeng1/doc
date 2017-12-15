import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export class Tom_DOM extends Component {
    constructor(props) {
        super(props)

    }
    //第一次渲染成功过后，组件对应的 DOM 已经添加到页面后调用.
    componentDidMount() {
        var dom = ReactDOM.findDOMNode(this);
        console.log(dom)
    }
    render() {
        return <h1 dataval='my dom'>测试dom</h1>
    }
}
export default Tom_DOM