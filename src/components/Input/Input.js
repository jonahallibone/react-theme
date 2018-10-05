import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

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