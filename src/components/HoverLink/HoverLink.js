import React, {Component} from 'react';

import './HoverLink.css';

class HoverLink extends Component {
    constructor(props) {
        super(props)

        this.link = null;
    }

    getClass() {
        let classes = [];
        if(this.props.inverse) {
            classes.push("inverse");
        }

        if(this.props.grey) {
            classes.push("grey")
        }

        if(this.props.thick) {
            classes.push("thick")
        }

        if(this.props["solid-black"]) {
            classes.push("solid-black")
        }

        if(this.props["grey-black"]) {
            classes.push("grey-black")
        }

        if(this.props["grey-grey"]) {
            classes.push("grey-grey")
        }

        if(this.props.selected) {
            classes.push("selected")
        }

        return classes.join(" ")
    }

    render() {
        return(
            <div ref={elem => this.link = elem} className={"underline--container " + this.getClass()} {...this.props}>
                {this.props.children}
            </div>
        )
    }
}

export default HoverLink;