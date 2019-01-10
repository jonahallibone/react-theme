import React, { Component } from 'react';
import './FlickSlider.css';
import Slider from "react-slick";
import posed, { PoseGroup } from 'react-pose';

import { Container } from 'react-grid-system';
import HoverLink from '../HoverLink/HoverLink';


const MovedSlider = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        transition: { 
            default: {
                duration: 600
            } 
        },
        ease: 'easeIn',
        delay: 1000
    },
    exit: {
        y: 30,
        opacity: 0,
        transition: { duration: 600 },
        ease: 'easeIn',
        delay: 1000
    }
});



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
                    image: "https://s3.amazonaws.com/piscatello/Nomadx_Animation_1.10.19.mp4",
                    title: "Nomadx Solutions",
                    location: "New York, NY",
                    video: true
                },
                {
                    image: "https://s3.amazonaws.com/piscatello/irish-hunger-placeholder.jpg",
                    title: "Irish Hunger Memorial",
                    location: "New York, NY"
                },
                {
                    image: "https://s3.amazonaws.com/piscatello/NYU_FeatureWall3_Horiz-2000x1125.jpg",
                    title: "New York University - Advanced Research Institutes",
                    location: "New York, NY"
                },
                {
                    image: "https://s3.amazonaws.com/piscatello/SaltLake_KioskRender3-2000x1125.jpg",
                    title: "United States Courthouse - Salt Lake City",
                    location: "New York, NY"
                },
                {
                    image: "https://s3.amazonaws.com/piscatello/Laguarda-Mockup_01_v7.jpg",
                    title: "Laguarda Low Architects",
                    location: "New York, NY"
                }
            ],
            isVisible: false
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({isVisible: !this.state.isVisible})
        }, 1);

        this.scrollListener = this.setUpScroll.bind(this);
        document.addEventListener("scroll", this.scrollListener, { passive: true })

    }

    setUpScroll() {
        this.animation = requestAnimationFrame(this.reqAnimation.bind(this));
    }

    reqAnimation() {
        if(window.pageYOffset > 50 || document.documentElement.scrollTop > 50) {
            let elem = document.querySelector(".description");
            if(elem) {
                elem.classList.add("scrolled");
            }
            this.animation = window.requestAnimationFrame(this.reqAnimation.bind(this));
            window.cancelAnimationFrame(this.animation);
            // console.log("scrolled");
        }


        else {
            let elem = document.querySelector(".description");
            if(elem){
                document.querySelector(".description").classList.remove("scrolled");
            }
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
                        {el.video ?
                                <video autoPlay={true} muted loop controls={false}>
                                    <source src={el.image} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            : 
                            <img src={el.image} alt={el.title}/>
                        }
                        
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
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        };

        return (
            <Container className="container slider" fluid={true} style={{padding: 0}}>

                <PoseGroup>
                    {this.state.isVisible && [
                        <MovedSlider key="i">
                            <Slider {...settings}>
                                {this.renderSlides()}
                            </Slider>
                            <div className="description">
                                <div className="">
                                    <h3 className="reg"><HoverLink grey="true">{this.state.slides[this.state.activeSlide].title}</HoverLink></h3>
                                </div>
                                <div style={{textAlign: "right"}}>
                                    <h3 className="reg">0{this.state.activeSlide + 1} &mdash; 05</h3>
                                </div>
                            </div>
                        </MovedSlider>
                    ]}
                </PoseGroup>
            </Container>
        )
    }
}

export default FlickSlider;