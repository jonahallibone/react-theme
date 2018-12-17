import React, { Component } from 'react';
import './FlickSlider.css';
import Slider from "react-slick";

import { Container } from 'react-grid-system';

export const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={"arrows left"} onClick={onClick}></div>
    )
}

export const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrows right" onClick={onClick}></div>
    )
}

class FlickSlider extends Component {


    constructor(props, context) {
        super(props, context);

        this.scrollListener = null; 

        this.state = {
            activeSlide: 0,
            activeSlide2: 0,
            slides: [
                {
                    image: "https://s3.amazonaws.com/piscatello/Nomadx-BC.jpg",
                    title: "Nomadx Solutions",
                    location: "New York, NY"
                },
                {
                    image: "https://s3.amazonaws.com/piscatello/Riverside_Entrance.jpg",
                    title: "New York Department of Health",
                    location: "New York, NY"
                },
                {
                    image: "https://s3.amazonaws.com/piscatello/DesignAtWork_Horiz.jpg",
                    title: "Design at Work",
                    location: "New York, NY"
                }
            ]
        }
    }

    componentDidMount = () => {

        this.scrollListener = this.setUpScroll.bind(this);
        document.addEventListener("scroll", this.scrollListener, { passive: true })

    }

    setUpScroll() {
        this.animation = requestAnimationFrame(this.reqAnimation.bind(this));
    }

    reqAnimation() {
        if(window.pageYOffset > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector(".description").classList.add("scrolled");
            this.animation = window.requestAnimationFrame(this.reqAnimation.bind(this));
            window.cancelAnimationFrame(this.animation);
            // console.log("scrolled");
        }


        else {
            document.querySelector(".description").classList.remove("scrolled");
            window.cancelAnimationFrame(this.animation);
        }

    }

    componentWillUnmount = () => {
        document.removeEventListener("scroll", this.scrollListener, { passive: true });
        this.scrollListener = null;
        window.cancelAnimationFrame(this.animation) ;
    }

    renderSlides() {
        return this.state.slides.map((el, i) => {
            return(
                <div key={i}>
                        <img src={el.image} alt={el.title}/>
                </div>
            )
        })
    }
    

    render() {
        const settings = {
            className: "",
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        };

        return (
            <Container className="container slider" fluid={true} style={{padding: 0}}>
                
                <Slider {...settings}>
                    {this.renderSlides()}
                </Slider>
                <div className="description">
                    <div className="">
                        <h2>{this.state.slides[this.state.activeSlide].title}</h2>
                        <h2 className="light-white">{this.state.slides[this.state.activeSlide].location}</h2>
                    </div>
                    <div style={{textAlign: "right"}}>
                        <h2>0{this.state.activeSlide + 1} &mdash; 05</h2>
                    </div>
                </div>
            </Container>
        )
    }
}

export default FlickSlider;