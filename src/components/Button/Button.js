import React, { Component } from 'react';
import '../../App.css';

class Button extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <button>{this.props.children}</button>
        );
    }
}

export default Button;
