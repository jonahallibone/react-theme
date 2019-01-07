import React, { Component } from 'react';

import './SwipeSlider.css';
import { toJS, computed } from 'mobx';

class SwipeSlider extends Component {
    constructor(props) {
        super(props);
        
        // Root slider element set by JSX ref
        this.slider = React.createRef();
        this.sliderTrack = React.createRef();

        //Check if mouse is clicked
        this.isClicked = false;
        this.raf = undefined;
        this.isLooping = false;
        this.isTransitioning = false;

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
        this.sliderTrack.current.addEventListener("mousemove", this.startDrag.bind(this))
        this.sliderTrack.current.addEventListener("mousedown", this.setUp.bind(this))
        this.sliderTrack.current.addEventListener("mouseup", this.endDrag)
        
        // Touch Events
        this.sliderTrack.current.addEventListener("touchmove", this.startDrag.bind(this))
        this.sliderTrack.current.addEventListener("touchstart", this.setUp.bind(this))
        this.sliderTrack.current.addEventListener("touchend", this.endDrag)

        //Fallback for testing
        this.sliderTrack.current.addEventListener("mouseleave", this.endDrag.bind(this))
    }

    setUp(e) {
        e.preventDefault();  
        e.stopImmediatePropagation();

        this.clickedXPos = e.pageX || e.touches[0].pageX;;
        this.isClicked = true;
        this.originalPosition = this.position
        this.slider.current.classList.add("dragging")
    }

    startDrag(e) {
        e.preventDefault();
        e.stopPropagation();
        
        this.slider.current.classList.add("active")

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

        //Disallow scrolling past first slide
        if(this.position > 0) {{
            this.position = 0;
        }}

        //Disallow scrolling past last slide
        let sliderWidth = this.slider.current.querySelector(".swipe-track").offsetWidth;
        if(Math.abs(this.position) > sliderWidth) {
            this.position = (sliderWidth * -1) + this.slider.current.offsetWidth;
        }

        let elem = this.slider.current.querySelector(".swipe-track");
        elem.style.transform = `translateX(${(this.position)}px)`

        this.slider.current.classList.remove("active")
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
            width = `${this.slider.current.offsetWidth}px`;
            rawWidth  = (this.slider.current.offsetWidth) + 28;
        }

        else {
            width = `${this.slider.current.offsetWidth / 4 - 21}px`;
            rawWidth = (this.slider.current.offsetWidth / 4)  + 7;
        }
        
        this.setState({rawWidth: rawWidth})
        this.setState({slideWidth: width});
    }

    slideLeft = () => {

        if(!this.isTransitioning && this.position + this.state.rawWidth <= 0) {
            this.isTransitioning = true;
            this.position += this.state.rawWidth;

            this.sliderTrack.current.style.transform = `translateX(${(this.position)}px)`

            setTimeout(()=> {
                this.isTransitioning = false;
            }, 345)

        }

    }

    slideRight = () => {
        
        if(!this.isTransitioning && this.position > (this.sliderTrack.current.offsetWidth - this.state.rawWidth) * -1) {
            this.isTransitioning = true;

            this.position = this.position - this.state.rawWidth;

            this.sliderTrack.current.style.transform = `translateX(${(this.position)}px)`
            setTimeout(()=> {
                this.isTransitioning = false;
            }, 345)
        }

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

        this.slider = null;
        this.sliderTrack = null;
    }

    render() {
        return(
            <div id="swipe-slider" ref={this.slider}>
                <div className="arrow-container">
                    <div className="slide-arrow-left" onClick={this.slideLeft}></div>
                    <div className="slide-arrow-right" onClick={this.slideRight}></div>
                </div>
                <div className="swipe-track" ref={this.sliderTrack}>
                    {this.getSlides()}
                </div>
            </div>
        )
    }
}

export default SwipeSlider;