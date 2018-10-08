import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from '../Button/Button';
import Slider from "react-slick";

import '../../App.css';
import './ProjectSlider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animFrame: null
        }
    }

    componentDidMount = () => {
        this.state.animFrame = this.growSlideShow();
    }

    growSlideShow = () => {
        if(window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".slick-slider").classList.add("grow")
        }

        else document.querySelector(".slick-slider").classList.remove("grow")
    
        this.state.animFrame = requestAnimationFrame(this.growSlideShow)
    }

    componentWillUnmount = () => {
        cancelAnimationFrame(this.state.animFrame);
    }



    render() {
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          dotsClass: "custom-dots"
        };

        return (
            <div className="project-slider">
                <Slider {...settings}>
                    <div className="slide">
                        <img src="http://piscatello.com/wp-content/uploads/2015/05/Riverside_Entrance.jpg"></img>
                    </div>
                    <div className="slide">
                        <img src="http://piscatello.com/wp-content/uploads/2018/09/NomadX-1.jpg"></img>
                    </div>
                    <div className="slide">
                        <img src="http://piscatello.com/wp-content/uploads/2014/04/NT_Colors.jpg"></img>
                    </div>
                </Slider>
            </div>
        );
      }
}

export default ProjectSlider;