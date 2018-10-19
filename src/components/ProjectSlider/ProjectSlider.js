import React, { Component } from 'react';
import Slider from "react-slick";
import Tilty from "../Tilty/Tilty";

import '../../App.css';
import './ProjectSlider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Vinoly from "./images/vinoly.jpg" 
import SLC from "./images/slc.jpg";
import NYU from "./images/nyu.jpg";
import LT from "./images/losttribe_gradient.jpg";
import Nomadx from "./images/nomadx.jpg";
import Anim from "./animation.mp4";
import GB from "./images/gray-bar.png";

class ProjectSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animFrame: null
        }
    }

    componentDidMount = () => {
        this.setState({"animFrame": this.growSlideShow()});
    }

    growSlideShow = () => {
        if(window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".slick-slider").classList.add("grow")
        }

        else document.querySelector(".slick-slider").classList.remove("grow")
    
        this.setState({"animFrame": requestAnimationFrame(this.growSlideShow)});
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
                        <video src={Anim} autoPlay loop></video>
                        <div className="project-slider--caption">
                            <h2 className="text-white">Chrismas Card</h2>
                            <h2 className="text-white">Happy Holidays!</h2>
                        </div>
                    </div>
                    <div className="slide colors">
                        {/* <img src={LLA}></img> */}
                        <div className="project-image--centered">
                            <Tilty settings={{max: 8, reverse: false, scale: 1.03}}>
                                <img src={GB} />
                            </Tilty>
                        </div>
                        <div className="project-slider--caption">
                            <h2>Laguarda.Low Architects</h2>
                            <h2>Strategic design and development</h2>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={Vinoly}></img>
                        <div className="project-slider--caption">
                            <h2>Vinoly</h2>
                            <h2>Web Design and Development</h2>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={LT}></img>
                        <div className="project-slider--caption">
                            <h2>Lost Tribe Theatre</h2>
                            <h2>Branding Identity Development</h2>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={NYU}></img>
                        <div className="project-slider--caption">
                            <h2>NYU Advanced Research Institutes</h2>
                            <h2>Comminicating a global network</h2>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={SLC}></img>
                        <div className="project-slider--caption">
                            <h2>United States Courthouse</h2>
                            <h2>Navigating a complex environment</h2>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={Nomadx}></img>
                        <div className="project-slider--caption">
                            <h2>Nomadx</h2>
                            <h2>Identifying a new start up</h2>
                        </div>
                    </div>
                </Slider>
            </div>
        );
      }
}

export default ProjectSlider;