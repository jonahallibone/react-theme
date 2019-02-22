import React,  { Component } from "react";


import "./ContactSlider.css";
import { Z_ASCII } from "zlib";

class ContactSlider extends Component {

    constructor(props) {
        super(props);

        this.track = React.createRef();
        this.position = 0;

        this.intervalId = null;

        // Defaults for easing beginning and ending

        this.duration = 1500;
        this.start = null;
        this.end = null;

        this.stop = false
    }
    
    startAnimRight = () => {
        let now = Date.now()
        if (now - this.start >= this.duration) this.stop = true;
        var p = (now - this.start) / this.duration;
        let val = this.inOutQuad(p);
        if(p >= 0.5) {
            cancelAnimationFrame(this.intervalId)
            this.intervalId = requestAnimationFrame(this.rAFRight);
            return;
        }
        var x = this.startx + ((this.startx + 300) - this.startx) * val;
        console.log(x);
        this.position = x;
        this.track.style.transform = `translateX(${x}px)`
        this.intervalId = requestAnimationFrame(this.startAnimRight);
    }

    startAnimLeft = () => {
        let now = Date.now()
        if (now - this.start >= this.duration) this.stop = true;
        var p = (now - this.start) / this.duration;
        let val = this.inOutQuad(p);
        if(p >= 0.5) {
            cancelAnimationFrame(this.intervalId)
            this.intervalId = requestAnimationFrame(this.rAFLeft);
            return;
        }
        var x = this.startx + ((this.startx - 300) - this.startx) * val;
        console.log(x);
        this.position = x;
        this.track.style.transform = `translateX(${x}px)`
        this.intervalId = requestAnimationFrame(this.startAnimLeft);
    }

    inOutQuad = (n) => {
        n *= 2;
        if (n < 1) return 0.5 * n * n;
        return - 0.5 * (--n * (n - 2) - 1);
    };

    rAFLeft = () => {
        this.track.style.transform = `translateX(${this.position}px)`
        this.position-=5;
        this.intervalId = requestAnimationFrame(this.rAFLeft);
    }

    rAFRight = () => {
        this.track.style.transform = `translateX(${this.position}px)`
        this.position+=5;
        this.intervalId = requestAnimationFrame(this.rAFRight);
    }

    translateLeft = () => {
        this.start = Date.now();
        this.end = this.start + this.duration;
        this.startx = this.position;

        this.startAnimLeft();
    }

    translateRight = () => {
        this.start = Date.now();
        this.end = this.start + this.duration;
        this.startx = this.position;

        this.startAnimRight();
    }
    
    slowDownAnimationRight = () => {
        if(this.stop) {
            cancelAnimationFrame(this.intervalId);
            return;
        }

        let now = Date.now()
        if (now - this.start >= this.duration) this.stop = true;
        var p = (now - this.start) / this.duration;
        let val = this.inOutQuad(p);
        var x = this.startx + ((this.startx - 300) - this.startx) * val;
        this.position = x;
        this.track.style.transform = `translateX(${x}px)`
        this.intervalId = requestAnimationFrame(this.slowDownAnimationRight);
    }

    slowDownAnimationLeft = () => {
        if(this.stop) {
            cancelAnimationFrame(this.intervalId);
            return;
        }

        let now = Date.now()
        if (now - this.start >= this.duration) this.stop = true;
        var p = (now - this.start) / this.duration;
        let val = this.inOutQuad(p);
        var x = this.startx + ((this.startx + 300) - this.startx) * val;
        this.position = x;
        this.track.style.transform = `translateX(${x}px)`
        this.intervalId = requestAnimationFrame(this.slowDownAnimationLeft);
    }

    cancelIntervalRight = () => {
        cancelAnimationFrame(this.intervalId);
        this.stop = false;
        this.start = Date.now();
        this.end = this.start + this.duration;
        this.startx = this.position;
        this.intervalId = requestAnimationFrame(this.slowDownAnimationRight);
    }

    cancelIntervalLeft = () => {
        cancelAnimationFrame(this.intervalId);
        this.stop = false;
        this.start = Date.now();
        this.end = this.start + this.duration;
        this.startx = this.position;
        this.intervalId = requestAnimationFrame(this.slowDownAnimationLeft);
    }

    render() {
        return(
            <div className="contact-slider">
                <div className="hover-zone left" onMouseEnter={this.translateLeft} onMouseLeave={this.cancelIntervalRight}></div>
                <div className="hover-zone right" onMouseEnter={this.translateRight} onMouseLeave={this.cancelIntervalLeft}></div>
                <div className="contact-slider-track" ref={elem => this.track = elem}>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/V2/Leandra_Hands.jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/V2/Intersection_01.jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Butterflies-min.jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Tape_Measures-min.jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/V2/Dots_02.jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Items_02-min.jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Rock-Shultz_Postcard-min.jpg" />
                    </div>                    
                </div>
            </div>
        )
    }
}

export default ContactSlider;