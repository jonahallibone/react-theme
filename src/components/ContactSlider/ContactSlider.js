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
                        <img src="https://s3.amazonaws.com/piscatello/Piscatello_notebook+(1).jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Items_02-min.jpg" />
                    </div>
                    <div className="contact-slider-image-container">
                        <img src="https://s3.amazonaws.com/piscatello/Piscatello_digitalpencil2.jpg" />
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
                                <img src="https://s3.amazonaws.com/piscatello/ContactPage_Images_Compressed/Items_02-min.jpg" />
                            </div>
                            <div className="contact-slider-image-container">
                                <img src="https://s3.amazonaws.com/piscatello/Piscatello_digitalpencil2.jpg" />
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