import React, { Component } from 'react';
import './FlickSlider.css';
import Slider from "react-slick";
import CSSAnimate from "../CSSAnimate/CSSAnimate";
import { Link } from "react-router-dom";
import { Container } from 'react-grid-system';
import HoverLink from '../HoverLink/HoverLink';
import { withProjectsContext } from "../../ProjectsContext";




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
                    image: "https://s3.amazonaws.com/piscatello/NYU_FeatureWall3_Horiz-2000x1125.jpg",
                    title: "New York University",
                    location: "New York, NY",
                    link: "/work/nyu-advanced-research-institutes"
                },
                {
                    image: "https://api.piscatello.com/wp-content/uploads/2019/04/Phones_Grid_1920x1080_vinoly.mp4",
                    video: true,
                    title: "Rafael Viñoly Architects",
                    location: "New York, NY",
                    link: "/work/vinoly",
                    poster: "https://api.piscatello.com/wp-content/uploads/2019/04/Vinoly_still.jpg"
                },
                {
                    image: "https://api.piscatello.com/wp-content/uploads/2019/04/Lost_Tribe_gradient_final.mp4",
                    video: true,
                    title: "Lost Tribe",
                    location: "New York — London",
                    link: "/work/lost-tribe-theatre",
                    poster: "https://api.piscatello.com/wp-content/uploads/2019/04/lost_tribe_still.jpg"
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
                    <Link to={this.state.slides[this.state.activeSlide].link}>
                        {el.video ?
                                <video autoPlay={true} muted loop playsInline={true} controls={false} poster={el.poster}>
                                    <source src={el.image} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            : 
                            <img src={el.image} alt={el.title}/>
                        }
                    </Link>
                </div>
            )
        })
    }
    

    render() {
        const settings = {
            className: "",
            dots: false,
            fade: true,
            cssEase: "ease",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            speed: 1000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: (current, next) => setTimeout(() => {this.setState( {activeSlide: next }) }, 10),
            afterChange: (current) => this.setState({ activeSlide2: current })
        };

        return (
            <Container className="container slider" fluid={true} style={{padding: 0}}>

                {this.state.isVisible && [
                    <CSSAnimate key="i" delay="1250">
                        <div>
                            <Slider {...settings}>
                                {this.renderSlides()}
                            </Slider>
                            <div className="description">
                                <div className="">
                                    <h3 className="reg text-bold"><HoverLink grey="true">{this.state.slides[this.state.activeSlide].title}</HoverLink></h3>
                                </div>
                                <div className="text-right">
                                    <h3 className="reg text-bold">0{this.state.activeSlide + 1} &mdash; {this.state.slides.length < 10 ? `0${this.state.slides.length}` : this.state.slides.length}</h3>
                                </div>
                            </div>
                        </div>
                    </CSSAnimate>
                ]}
            </Container>
        )
    }
}

export default withProjectsContext(FlickSlider);