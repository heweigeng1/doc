import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tom from './Tom';
import Com_State from './Component-State';
//import Com_State from './Component-State';
import registerServiceWorker from './registerServiceWorker';
import { Tom_Switch } from './tom-switch';
import { Tom_Props } from './tom-props';
import { Tom_For } from './tom-for';
import { Tom_life } from './tom-life';
import { Tom_DOM } from './tom-reactdom';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Com_State />,document.getElementById('my-state'));
ReactDOM.render(<Tom />,document.getElementById('tomdom'));
ReactDOM.render(<Tom_Switch />,document.getElementById('tom-switch'));
ReactDOM.render(<Tom_Props money={10}/>,document.getElementById('tom-props'));
ReactDOM.render(<Tom_For/>,document.getElementById('tom-for'));
ReactDOM.render(<Tom_life/>,document.getElementById('tom-life'))
ReactDOM.render(<Tom_DOM/>,document.getElementById('tom-dom'))
registerServiceWorker();
