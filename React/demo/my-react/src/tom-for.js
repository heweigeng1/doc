import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tom_Props } from './tom-props';

export class Tom_For extends Component {
    render() {
        var items = [1, 2, 3, 4, 5, 6, 7, 8]
        return (
            <div>
                {
                    items.map(function (item) {
                        return <span><Tom_Props money={item} />=></span>
                    })
                }
            </div>
        )
    }
}

export default Tom_For