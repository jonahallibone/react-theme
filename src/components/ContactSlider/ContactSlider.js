import React from "react";
import "./ContactSlider.css";
import {ProjectsContext} from "../../ProjectsContext";



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

    renderImages(images) {
        if(images.length) {
            console.log(images[0].acf)
            return images[0].acf.slider_images.map(image => (
                <div className="contact-slider-image-container" key={image.slider_image}>
                    <img src={image.slider_image} />
                </div>
            ));
        }
    }

    render() {
        return(
            <ProjectsContext.Consumer>
                {({ contact_images }) => (
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
                                        {this.renderImages(contact_images)}
                                </div>
                            </div>  
                            {this.renderImages(contact_images)}   
                            <div className="clones" ref={elem => this.clones = elem}>
                                <div className="contact-slider-track" ref={elem => this.track = elem}>
                                    {this.renderImages(contact_images)}                                   
                                </div>
                            </div>          
                        </div>
                    </div>
                )}
            </ProjectsContext.Consumer>
        )
    }
}

export default ContactSlider;