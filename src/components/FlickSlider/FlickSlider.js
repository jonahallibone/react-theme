import React, { Component } from 'react';
import './FlickSlider.css';
import Flickity from 'react-flickity-component';

import { Container, Row, Col } from 'react-grid-system';

import {observable,} from 'mobx';
import {observer} from 'mobx-react';

import LT from "./images/losttribe_gradient.jpg";
import GB from "./images/gray-bar.png";
import LLP from "./images/laguarda_laptop.jpg";

var flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    prevNextButtons: false,
    imagesLoaded: true,
    setGallerySize: false
}

@observer class FlickSlider extends Component {
    /* MobX before componentDidMount */
    @observable currentIndex = null;

    constructor(props, context) {
        super(props, context);

        this.currentIndex = 0;
        this.animation = null;

        this.slides = [];

        this.state = {
            currentIndex: 0
        }
    }

    componentDidMount = () => {
        this.currentIndex = this.flkty.selectedIndex;
        this.slides = document.querySelectorAll(".items");

        document.addEventListener("scroll", this.setUpScroll.bind(this))

        this.flkty.on('settle', () => {
            
        });
    }

    setUpScroll() {
        this.animation = requestAnimationFrame(this.reqAnimation.bind(this));
    }

    reqAnimation() {
        if(window.pageYOffset > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector(".description").classList.add("scrolled");
            this.animation = window.requestAnimationFrame(this.reqAnimation.bind(this));
            window.cancelAnimationFrame(this.animation);
        }


        else {
            document.querySelector(".description").classList.remove("scrolled");
            window.cancelAnimationFrame(this.animation);
        }

    }

    setSelectedIndex = (index) => {
        this.currentIndex = index;
        this.flkty.selectedIndex = index;
    }
     
    handleNext = () => {
        // You can use Flickity API
        // this.currentIndex++;
        this.flkty.next();
        this.setState({currentIndex: this.state.currentIndex++});
        // this.slides = document.querySelectorAll(".items");
        // let selected = document.querySelector(".items.is-selected");
        // // console.log(this.slides)
        // this.currentIndex = Array.prototype.indexOf.call(this.slides, selected);

    }

    handlePrev = () => {
        // You can use Flickity API
        this.flkty.previous()
    }

    getSlideLength = () => {
        return this.flkty.slides.length;
    }
    

    render() {
        return (
            <Container className="container slider" fluid={true} style={{padding: 0}}>
                <Flickity 
                    flickityRef={c => this.flkty = c}
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate={true} // default false
                >
                    <div className="items">
                        <img src={LT} />
                    </div>
                    <div className="items">
                        <img src={LLP}/>
                    </div>
                    <div className="items">
                        <img src={LT} />
                    </div>
                </Flickity>

                <div className="description">
                    <div className="">
                        <h2>Laguarda.Low Architects</h2>
                        <h2 className="light-white">Web Design, Development</h2>
                    </div>
                    <div style={{textAlign: "right"}}>
                        <h2>{this.state.currentIndex}</h2>
                    </div>
                </div>
                <div className="arrows left" onClick={this.handlePrev}></div>
                <div className="arrows right" onClick={this.handleNext}></div>
            </Container>
        )
    }
}

export default FlickSlider