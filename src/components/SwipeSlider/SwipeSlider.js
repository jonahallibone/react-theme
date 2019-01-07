import React, { Component } from 'react';

import './SwipeSlider.css';
import { toJS, computed } from 'mobx';

class SwipeSlider extends Component {
    constructor(props) {
        super(props);
        
        // Root slider element set by JSX ref
        this.slider = React.createRef();

        //Check if mouse is clicked
        this.isClicked = false;
        this.raf = undefined;
        this.isLooping = false;

        //Store mouse position over element
        this.clickedXPos = null;
        this.mousePos = {
            x: undefined,
            y: undefined
        }

        this.position = 0;


        this.state = {
            slideWidth: undefined,
            rawWidth: undefined
        }
    }
    
    componentWillMount() {
        window.addEventListener("resize", this.calcWidth)
    }

    componentDidMount() {
        this.calcWidth();
        this.slider.current.addEventListener("mousemove", this.startDrag.bind(this))
        this.slider.current.addEventListener("mousedown", this.setUp.bind(this))
        this.slider.current.addEventListener("mouseup", this.endDrag)
        
        // Touch Events
        this.slider.current.addEventListener("touchmove", this.startDrag.bind(this))
        this.slider.current.addEventListener("touchstart", this.setUp.bind(this))
        this.slider.current.addEventListener("touchend", this.endDrag)

        //Fallback for testing
        this.slider.current.addEventListener("mouseleave", this.endDrag.bind(this))
    }

    setUp(e) {
        e.preventDefault();  
        e.stopImmediatePropagation();
        
        console.log(e.currentTarget);
        
        this.clickedXPos = e.pageX || e.touches[0].pageX;;
        this.isClicked = true;
        this.originalPosition = this.position
        this.slider.current.classList.add("dragging")
    }

    startDrag(e) {
        e.preventDefault()
        this.mousePos.x = e.pageX || e.touches[0].pageX;
        
        if(this.isClicked && this.isLooping === false) {
            this.raf = requestAnimationFrame(this.animateDrag);
            this.isLooping = true
        }

        else if(this.isClicked) {
            // if( (this.mousePos.x - this.clickedXPos) + this.originalPosition > 0) return
            this.position = (this.mousePos.x - this.clickedXPos) + this.originalPosition;
        }
    }

    endDrag = (e) => {
        e.preventDefault();
        this.isLooping = false;
        this.isClicked = false;
        cancelAnimationFrame(this.raf);

        if(this.position > this.originalPosition) {
            this.position = Math.ceil(this.position / (this.state.rawWidth)) * (this.state.rawWidth);
        }
        else if(this.position < this.originalPosition) {
            this.position = Math.floor(this.position / (this.state.rawWidth)) * (this.state.rawWidth);
        }

        let elem = this.slider.current.querySelector(".swipe-track");
        elem.style.transform = `translateX(${(this.position)}px)`

        this.slider.current.classList.remove("dragging")
    }

    animateDrag = () => {
        let elem = this.slider.current.querySelector(".swipe-track");
        elem.style.transform = `translateX(${(this.position)}px)`
        this.raf = requestAnimationFrame(this.animateDrag);
    }

    calcWidth = () => {
        let width = 0;
        let rawWidth = 0;
        if (window.matchMedia("(max-width: 600px)").matches) {
            width = `calc(${this.slider.current.offsetWidth}px)`;
            rawWidth  = (this.slider.current.offsetWidth) + 28;
        }

        else {
            width = `calc(${this.slider.current.offsetWidth / 4}px - 21px)`;
            rawWidth = (this.slider.current.offsetWidth / 4)  + 7;
        }
        
        this.setState({rawWidth: rawWidth})
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

    componentWillUnmount() {
        window.cancelAnimationFrame(this.raf);
        window.removeEventListener("resize", this.calcWidth)

        this.slider.current.removeEventListener("mousemove", this.startDrag)
        this.slider.current.removeEventListener("mousedown", this.setUp)
        this.slider.current.removeEventListener("mouseup", this.endDrag)
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