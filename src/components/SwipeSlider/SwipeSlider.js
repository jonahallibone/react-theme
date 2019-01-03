import React, { Component } from 'react';

import './SwipeSlider.css';

class SwipeSlider extends Component {
    constructor(props) {
        super(props);
        this.slider = React.createRef();

        this.state = {
            slideWidth: undefined
        }
    }
    
    componentWillMount() {
        window.addEventListener("resize", this.calcWidth.bind(this))
    }

    componentDidMount() {
        this.calcWidth();
    }

    calcWidth() {
        let width = `calc(${this.slider.current.offsetWidth / 4}px - 21px)`;
        this.setState({slideWidth: width});
    }

    getSlides() {
        return this.props.children.map((el, i) => {
            return (
                <div className="swipe-slide" style={{minWidth: this.state.slideWidth}} key={i}>
                    {el}
                </div>
            )
        })
    }

    render() {
        return(
            <div id="swipe-slider" ref={this.slider}>
                <div className="swipe-track">
                    {this.getSlides()}
                </div>
            </div>
        )
    }
}

export default SwipeSlider;