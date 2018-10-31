import React, { Component } from 'react';

import './Button.css';
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

    getArrow = () => {
        if(this.props.arrow) {
            return <div className="button-arrow"></div>
        }
        return "";
    }

    render() {
        return (
            <button className={this.getClasses()}>
                {this.props.children}
                {this.getArrow()}
            </button>
        );
    }
}

export default Button;
