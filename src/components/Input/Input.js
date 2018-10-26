import React, { Component } from 'react';

import '../../App.css';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.color = this.props.color || "";
    }

    constructStyles = () => {

    }

    render() {
        return (
            <input type="text" color={this.props.color} className={this.props.class || ""}/>
        );
    }
}

export default Input;