import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tom from './Tom';
import Com_State from './Component-State';
//import Com_State from './Component-State';
import registerServiceWorker from './registerServiceWorker';
import { Tom_Switch } from './tom-switch';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Com_State />,document.getElementById('my-state'));
ReactDOM.render(<Tom />,document.getElementById('tomdom'));
ReactDOM.render(<Tom_Switch />,document.getElementById('tom-switch'));
registerServiceWorker();
