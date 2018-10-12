import React, { Component } from 'react';

import '../../App.css';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    constructStyles = () => {

    }

    render() {
        return (
            <input type="text" className={this.props.class || ""}/>
        );
    }
}

export default Input;