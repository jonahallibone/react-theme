import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import HoverLink from '../HoverLink/HoverLink';

import { Container, Row, Col } from 'react-grid-system';
import "./Updates.css";

class Updates extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="updates-page">
                <div className="option-list text-red" style={{whiteSpace: "nowrap"}}>
                    <Container fluid={true} className="container" style={{padding: 0, display: "flex", alignItems: "center"}}>
                        <span className="filter-option">
                            <Link to={"/update/"}>
                                <HoverLink>All Updates</HoverLink>
                            </Link>
                        </span>
                        <span className="filter-option">
                            <Link to={"/update/"}>
                                <HoverLink>Awards</HoverLink>
                            </Link>
                        </span>
                        <span className="filter-option">
                            <Link to={"/update/"}>
                                <HoverLink>Events</HoverLink>
                            </Link>
                        </span>
                        <span className="filter-option">
                            <Link to={"/update/"}>
                                <HoverLink>Press</HoverLink>
                            </Link>
                        </span>
                        <span className="filter-option">
                            <Link to={"/update/"}>
                                <HoverLink>Thoughts</HoverLink>
                            </Link>
                        </span>
                        <div className="filter-option request-meeting" style={{marginRight: 0}}>
                        <Link to="/contact"><Button button-md arrow className="black-border">Contact Us</Button></Link>
                        </div>
                    </Container>
                </div>
                <Container fluid={true} className="container" style={{padding: 0}}>
                    <div style={{width: "100%"}}>
                        <h3 className="reg text-black" style={{paddingTop: "18rem"}}>Latest Updates</h3>
                    </div>
                    <div className="updates-quick-grid">
                        <div className="update-item">
                            <h3 className="reg">
                                <HoverLink black="true">23 February</HoverLink>
                            </h3>
                            <h5 className="light text-grey padding-top-175">Reflections on Ten Qualities of Design Exhibition at the University of New Haven Extended to Saturday, 23 February 2019.</h5>
                            <h5 className="text-red">Exhibition</h5>
                        </div>
                        <div className="update-item">
                            <h3 className="reg">
                                <HoverLink black="true">22 January</HoverLink>
                            </h3>
                            <h5 className="light text-grey padding-top-175">
                                Piscatello Design Centre completes comprehensive wayfinding and donor signage program for Saint David’s School.
                            </h5>
                            <h5 className="text-red">Exhibition</h5>
                        </div>
                        <div className="update-item">
                            <h3 className="reg">
                                <HoverLink black="true">15 December</HoverLink>
                            </h3>
                            <h5 className="light text-grey padding-top-175">Rocco Piscatello’s “Poster Works for FIT” publication Featured on Mohawk Connects.</h5>
                            <h5 className="text-red">Event</h5>
                        </div>
                        <div className="update-item">
                            <h3 className="reg">
                                <HoverLink black="true">12 November</HoverLink>
                            </h3>
                            <h5 className="light text-grey padding-top-175">Rocco Piscatello to lecture at the University of New Haven on Thursday, 12 November.</h5>
                            <h5 className="text-red">Exhibition</h5>
                        </div>
                    </div>
                </Container>
                <section className="update-section">
                    <Container fluid={true} className="container" style={{padding: 0, display: "flex", alignItems: "center"}}>
                        <div className="update-feed">
                            <div className="update-row">
                                <div className="update-des">
                                    <h3 className="reg">
                                        <HoverLink black="true">Celebrating Leonardo DaVinci</HoverLink>
                                    </h3>
                                    <h5 className="text-grey light padding-top-175">03 January 2019</h5>
                                    <h5 className="text-grey light padding-top-175">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Nam vitae odio porttitor, faucibus odio vel, suscipit nunc. 
                                        Mauris urna lacus, cursus at nulla eu, dignissim fermentum elit. 
                                        Etiam vel tincidunt tellus, vel elementum neque. Aliquam iaculis 
                                        volutpat lacus vitae commodo. Nulla facilisi.
                                    </h5>
                                </div>
                                <div className="update-img">
                                    <img src="https://s3.amazonaws.com/piscatello/PDC-Website_Updates_DaVinci-Thumbnail-05-05.jpg" />
                                </div>
                            </div>
                            <div className="update-row">
                                <div className="update-des">
                                    <h3 className="reg">
                                        <HoverLink black="true">100 Years of The Bauhaus</HoverLink>
                                    </h3>
                                    <h5 className="text-grey light padding-top-175">03 January 2019</h5>
                                    <h5 className="text-grey light padding-top-175">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Nam vitae odio porttitor, faucibus odio vel, suscipit nunc. 
                                        Mauris urna lacus, cursus at nulla eu, dignissim fermentum elit. 
                                        Etiam vel tincidunt tellus, vel elementum neque. Aliquam iaculis 
                                        volutpat lacus vitae commodo. Nulla facilisi.
                                    </h5>
                                </div>
                                <div className="update-img">
                                    <img src="https://s3.amazonaws.com/piscatello/PDC-Website_Updates_Bauhaus-Thumbnail-03.jpg" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </section>
        )
    }
}

export default Updates;