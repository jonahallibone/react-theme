import React, {Component} from 'react';


class HoverLink extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    handleHover = () => {

    }

    render() {
        return(
            <div className="underline--container">{...this.props}</div>
        )
    }
}

export default HoverLink;