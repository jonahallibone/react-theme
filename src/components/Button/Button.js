import React, { Component } from 'react';
import '../../App.css';

class Button extends Component {
    // constructor(props) {
    //     super(props);
    // }

    getClasses = () => {
        let classes = [];

        if(this.props["button-sm"] === true) {
            classes.push("button-sm");
        }

        else if(this.props["button-lg"] === true) {
            classes.push("button-lg");
        }

        if(this.props["black"]) {
            classes.push("black")
        }

        if(this.props.className) {
            classes.push(this.props.className);
        }
        
        return classes.join(" ")       
    }

    render() {
        return (
            <button className={this.getClasses()}>{this.props.children}</button>
        );
    }
}

export default Button;
