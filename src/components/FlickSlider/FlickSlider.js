import React, { Component } from 'react';
import './FlickSlider.css';
import Flickity from 'react-flickity-component';

import { Container, Row, Col } from 'react-grid-system';

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

class FlickSlider extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        // You can register events in componentDidMount hook
        this.flkty.on('settle', () => {
        //   console.log(`current index is ${this.flkty.selectedIndex}`)
        })
      }
     
    handleNext = () => {
        // You can use Flickity API
        this.flkty.next()
    }

    handlePrev = () => {
        // You can use Flickity API
        this.flkty.previous()
    }
    

    render() {
        return (
            <Container className="container slider" fluid={true} style={{padding: 0}}>
                <Flickity 
                    flickityRef={c => this.flkty = c}
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={true} // default false
                    reloadOnUpdate={true} // default false
                >
                    <div className="items">
                        <img src={LT} />
                    </div>
                    <div className="items">
                        <img src={LLP}/>
                    </div>
                </Flickity>
                <div className="description">
                    <h2>Lorem Ipsum</h2>
                    <h2>Dolor sit amet</h2>
                </div>
                <div className="arrows left" onClick={this.handlePrev}></div>
                <div className="arrows right" onClick={this.handleNext}></div>
            </Container>
        )
    }
}

export default FlickSlider