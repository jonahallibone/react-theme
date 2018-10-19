import React, { Component } from 'react';
import './FlickSlider.css';
import Flickity from 'react-flickity-component';

import { Container, Row, Col } from 'react-grid-system';

import LT from "./images/losttribe_gradient.jpg";
import GB from "./images/gray-bar.png";

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

    componentDidMount() {

    } 

    render() {
        return (
            <Container className="container slider" fluid={true} style={{padding: 0}}>
                <Flickity
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
                        <img src={GB}/>
                    </div>
                </Flickity>
                <div className="description">
                    <h2>Lorem Ipsum</h2>
                    <h2>Dolor sit amet</h2>
                </div>
                <div className="arrows left"></div>
                <div className="arrows right"></div>
            </Container>
        )
    }
}

export default FlickSlider