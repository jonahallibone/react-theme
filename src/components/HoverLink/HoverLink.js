import React, {Component} from 'react';

import './HoverLink.css';

class HoverLink extends Component {
    constructor(props) {
        super(props)

        this.link = null;
    }

    componentDidMount() {
        this.link.addEventListener("mouseenter", this.applyAnimation)
    }

    applyAnimation = () => {
        this.link.classList.add("hover");
    }

    render() {
        return(
            <div ref={elem => this.link = elem} className="underline--container">
                {this.props.children}
            </div>
        )
    }
}

export default HoverLink;