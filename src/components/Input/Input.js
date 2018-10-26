import React, { Component } from 'react';

import '../../App.css';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.color = this.props.color || "";
        this.state = {
            hasInput: false
        }
    } 

    handleChange = (event) => {
        if(event.target.value.length) this.setState({hasInput: true});
        else this.setState({hasInput: false})
        console.log(this.state.hasInput);
    }
 
    render() {
        return (
            <div color={this.props.color} className={this.state.hasInput === true ? "input-container has-value" : "input-container"}>
                <input type="text" onBlur={this.handleChange} />
                <div className="placeholder">Subscribe to our newsletter</div>
                <input type="submit" value="Join the list" />
            </div>
        );
    }
}

export default Input;