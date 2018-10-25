import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProgressiveImage from 'react-progressive-image';

import './HomePageGrid.css';

class HomePageGrid extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container className="container" fluid={true} style={{padding: 0}}>
                <div className="grid-container">
                    <div className="grid-container--side of-1">
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/DesignAtWork_Horiz.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">Design At Work Book</h3>
                        </div>
                    </div>
                    <div className="grid-container--side of-4">
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/AEA_EquityWorks.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">AEA Equality Works</h3>
                        </div>
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/CoffeeHouse_Banner.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">Coffee House Banner</h3>
                        </div>
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Lost-Tribe_Rainbow.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">LostTribe Theatre Company</h3>
                        </div>
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/DW06.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">Douglass Winthrop</h3>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-container--side of-4">
                        <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Lost-Tribe_Bus.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                            <h3 className="light">LostTribe Theatre Group</h3>
                        </div>
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Nomadx-BC.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">Nomadx</h3>
                        </div>
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Riverside_Entrance.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">Riverside Entrance</h3>
                        </div>
                        <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Salt-Lake_Kiosks.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                            <h3 className="light">The US Courthouse</h3>
                        </div>
                    </div>
                    <div className="grid-container--side of-1">
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Timeless_Entrance.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">Timeless Massimo Vignelli</h3>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-container--side of-1">
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/DesignAtWork_Horiz.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">Design At Work Book</h3>
                        </div>
                    </div>
                    <div className="grid-container--side of-4">
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/AEA_EquityWorks.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">AEA Equality Works</h3>
                        </div>
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/CoffeeHouse_Banner.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">Coffee House Banner</h3>
                        </div>
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Lost-Tribe_Rainbow.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">LostTribe Theatre Company</h3>
                        </div>
                        <div className="item">
                            <ProgressiveImage src="https://s3.amazonaws.com/piscatello/DW06.jpg" placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <div className={ loading ? "img-container" : "img-container loaded" }>
                                        <img src={src} alt="an image" />
                                    </div>
                                )}
                            </ProgressiveImage>
                            <h3 className="light">Douglass Winthrop</h3>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default HomePageGrid;