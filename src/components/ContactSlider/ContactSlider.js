import React from "react";
import ReactDOM from 'react-dom'
import { useSpring, animated, interpolate, config } from 'react-spring'
import { useGesture } from 'react-with-gesture'

import "./ContactSlider.css";


class ContactSlider extends React.Component {

    constructor(props) {
        super(props);

        this.position = 0;
        this.rAF = null;

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.animate = this.animate.bind(this);
        this.direction = "left";

    }

    componentDidMount() {
        let width = this.track.offsetWidth;
        this.position = (width / 3) * -1;
        this.track.style.transform = `translateX(${this.position}px)`;
        document.querySelector("header").classList.add("bg-black");
    }
    
    handleMouseMove(e) {
        let container = this.slider.offsetWidth;
        this.direction = e.pageX < container / 2 ? "left" : "right";
    }

    handleMouseEnter(e) {
        let width = this.track.offsetWidth;
        let container = this.slider.offsetWidth;
        this.rAF = requestAnimationFrame(() => this.animate(width));
    }

    handleMouseLeave(e) {
        cancelAnimationFrame(this.rAF);
        this.rAF = null;
    }

    animate(width) {
        this.rAF = requestAnimationFrame(() => this.animate(width));
        
        if(Math.abs(this.position) <= 0 || Math.abs(this.position) >= width * .666666) {
            this.position = (width / 3) * -1;
        }

        this.direction === "left" ? 
            this.track.style.transform = `translateX(${this.position -= 3}px)`
            : 
            this.track.style.transform = `translateX(${this.position += 3}px)` 
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
    }

    render() {
        return(
            <div className="contact-slider" 
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}
                onMouseMove={this.handleMouseMove}

                ref={elem => this.slider = elem}
            >
                <div
                    className="contact-slider-track" 
                    ref={elem => this.track = elem}
                >     
                     <div className="clones">
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
                                <img src="https://s3.amazonaws.com/piscatello/Piscatello_notebook+(1).jpg" />
                            </div>
                            <div className="contact-slider-image-container">
                                <img src="https://s3.amazonaws.com/piscatello/Piscatello_digitalpencil2_4_6.jpg" />
                            </div>
                            <div className="contact-slider-image-container">
                                <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Rock-Shultz_Postcard-min.jpg" />
                            </div>                                
                        </div>
                    </div>  
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
                        <img src="https://s3.amazonaws.com/piscatello/Piscatello_notebook+(1).jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/Piscatello_digitalpencil2_4_6.jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Rock-Shultz_Postcard-min.jpg" />
                    </div>   
                    <div className="clones" ref={elem => this.clones = elem}>
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
                                <img src="https://s3.amazonaws.com/piscatello/Piscatello_notebook+(1).jpg" />
                            </div>
                            <div className="contact-slider-image-container">
                                <img src="https://s3.amazonaws.com/piscatello/Piscatello_digitalpencil2_4_6.jpg" />
                            </div>
                            <div className="contact-slider-image-container">
                                <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Rock-Shultz_Postcard-min.jpg" />
                            </div>                                
                        </div>
                    </div>          
                </div>
            </div>
        )
    }
}

export default ContactSlider;