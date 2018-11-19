import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProgressiveImage from 'react-progressive-image';
import Button from '../Button/Button';
import ClampLines from 'react-clamp-lines';

import './HomePageGrid.css';

class HomePageGrid extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="" style={{backgroundColor: "#fff"}}>
                <Container className="container" fluid={true} style={{padding: 0}}>
                    <div>
                        {/* <h4 className="text-black light reg" style={{margin: "0 0 1.25rem 0", color: "rgb(41, 53, 58)", fontSize: "1.5rem"}}>Feed  —  All Work  News  Events  Awards  Other </h4> */}
                    </div>
                    <div className="grid-container">
                        <div className="grid-container--side of-1">
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Large/Timeless_Entrance.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Timeless Massimo Vignelli</strong><br/>New York</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                        </div>
                        <div className="grid-container--side of-1">
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Equity Works</strong><br/>New York</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="grid-container--side of-1">
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Large/Nomadx-BC.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Douglass Winthrop</strong><br/>New York</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                        </div>
                        <div className="grid-container--side of-1">
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Large/Nomadx-BC.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Douglass Winthrop</strong><br/>New York</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="grid-container--side of-4">
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Small/CoffeeHouse_Banner.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>City Tower Building</strong><br/>Prague</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />                            
                                </div>
                            </div>
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Small/DW06.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Douglass Winthrop</strong><br/>New York</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Small/DesignAtWork_Horiz.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Piscatello Design Centre</strong><br/>New York</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Small/Lost-Tribe_Bus.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Lost Tribe Theatre</strong><br/>New York, London</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                        </div>
                        <div className="grid-container--side of-4">
                            <div className="item">
                                    <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Small/Nomadx-BC.jpg" placeholder="tiny-image.jpg">
                                        {(src, loading) => (
                                            <div className={ loading ? "img-container" : "img-container loaded" }>
                                                <img src={src} alt="an image" />
                                            </div>
                                        )}
                                    </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Douglass Winthrop</strong><br/>New York</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Small/Lost-Tribe_Rainbow.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Lost Tribe Theatre</strong><br/>London</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Small/CoffeeHouse_Banner.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Riverside Entrance</strong><br/>New York</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                            <div className="item">
                                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Small/DesignAtWork_Horiz.jpg" placeholder="tiny-image.jpg">
                                    {(src, loading) => (
                                        <div className={ loading ? "img-container" : "img-container loaded" }>
                                            <img src={src} alt="an image" />
                                        </div>
                                    )}
                                </ProgressiveImage>
                                <div className="contents">
                                    <h3 className="light"><strong>Design at Work Book</strong><br/>New York</h3>
                                    <ClampLines
                                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                                    lines="2"
                                    ellipsis="..."
                                    buttons={false}
                                    className="subtext" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign: "center"}} className="padding-btm-xl">
                        <h3 className="light text-center padding-btm-lg" style={{"border": "1px solid #909AA3", "padding": "1rem 2rem", "display": "inline-block"}}>Explore More Projects</h3>
                    </div>
                    {/* <Button button-md className="margin-btm-3 black">See More Work</Button> */}
                </Container>
            </div>
        )
    }
}

export default HomePageGrid;