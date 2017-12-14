import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Tom_life extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "=>"
        }

    }
    //调用 render 方法前会被调用.
    componentWillMount() {
        console.log('componentWillMount[调用 render 方法前会被调用.]=>')
    }
    //第一次渲染成功过后，组件对应的 DOM 已经添加到页面后调用.
    componentDidMount() {
        console.log('componentDidMount[第一次渲染成功过后，组件对应的 DOM 已经添加到页面后调用.]=>')
    }
    //文档说该事件在组件即将被移除dom时会触发，主要用于进行一些清理工作.
    componentWillUnmount() {
        console.log('componentWillReceiveProps[文档说该事件在组件即将被移除dom时会触发，主要用于进行一些清理工作.]=>')
    }
    //当组件获取新属性的时候，第一次渲染不会调用
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps[当组件获取新属性的时候，第一次渲染不会调用]=>')
    }
    //接收到新属性或者新状态的时候在 render 前会被调用
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate[接收到新属性或者新状态的时候在 render 前会被调用]=>')
        return true
        
    }
    //当组件确定要更新，在 render 之前调用.这个时候可以确定一定会更新组件，可以执行更新前的操作.
    componentWillUpdate() {
        console.log('componentWillUpdate[当组件确定要更新，在 render 之前调用.这个时候可以确定一定会更新组件，可以执行更新前的操作.]=>')
    }
    //可以执行组件更新过后的操作
    componentDidUpdate() {
        console.log('componentDidUpdate[可以执行组件更新过后的操作]=>')
    }
    onUpdate = () => {
        console.log(this.state.msg+'未设置=>')
        this.setState({
            msg: "@"
        })
        console.log(this.state.msg+'设置后=>')
    }
    render() {
        return (
            <div>
                <label htmlFor="">初始化</label>
                <label onClick={this.onUpdate} htmlFor="">setState</label>
            </div>

        )
    }
}
export default Tom_life