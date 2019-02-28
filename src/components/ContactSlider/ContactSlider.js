import React,  { Component } from "react";
import { useSpring, animated } from 'react-spring'

import "./ContactSlider.css";

const directions = Object.freeze({
    "LEFT": 1,
    "RIGHT": 2 
})

const ContactSlider = () => {
    const props = useSpring({ transform: 'translate(-50%)', from: { transform: 'translate(0%)' }});

    return(
        <div className="contact-slider" style={props}>
            <animated.div style={props} className="contact-slider-track" ref={elem => this.track = elem} >
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
                    <img src="https://s3.amazonaws.com/piscatello/Piscatello_DesignThinking_4_6.jpg" />
                </div>
                <div className="contact-slider-image-container">
                    <img src="https://s3.amazonaws.com/piscatello/Piscatello_digitalpencil2_4_6.jpg" />
                </div>
                <div className="contact-slider-image-container">
                    <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Rock-Shultz_Postcard-min.jpg" />
                </div>   
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
                            <img src="https://s3.amazonaws.com/piscatello/Piscatello_DesignThinking_4_6.jpg" />
                        </div>
                        <div className="contact-slider-image-container">
                            <img src="https://s3.amazonaws.com/piscatello/Piscatello_digitalpencil2_4_6.jpg" />
                        </div>
                        <div className="contact-slider-image-container">
                            <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Rock-Shultz_Postcard-min.jpg" />
                        </div>                                
                    </div>
                </div>          
            </animated.div>
        </div>
    )
}

export default ContactSlider;