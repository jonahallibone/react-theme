import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import HoverLink from '../HoverLink/HoverLink';

import Icon from 'react-icons-kit';
import {arrows_slim_right} from 'react-icons-kit/linea/arrows_slim_right'
import { Container, Row, Col } from 'react-grid-system';
import "./Updates.css";

class Updates extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.styleWhite();
    }

    styleWhite = () => {
        document.querySelector("header").classList.remove("black-bg");
        document.querySelector("header").classList.add("white-bg");
    }

    render() {
        return(
            <section className="updates-page" style={{paddingTop: "70px"}}>
                <Container fluid={true} className="container" style={{padding: 0}}>
                    <div className="updates-heading">
                        <h1 className="text-grey reg lighter">Stay Updated.</h1>
                        <div className="update-input-container">
                            <input type="text" className="update-input" placeholder="example@example.com"/>
                            <div className="signup-button">
                                <div style={{ color: '#999' }}>
                                    <Icon size={50} icon={arrows_slim_right}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="light padding-btm-lg">
                        Showing – &nbsp;
                        <span className="text-black" style={{borderBottom: "1px solid #999"}}>All</span>&nbsp;&nbsp;
                    </h2>
                </Container>
                <section className="update-section">
                    <Container fluid={true} className="container" style={{padding: 0, display: "flex", alignItems: "center"}}>
                        <div className="update-feed">
                            <div className="update-row">
                                <div className="update-des">
                                    <h3 className="reg light">
                                        <HoverLink black="true">Celebrating Leonardo DaVinci</HoverLink>
                                    </h3>
                                    <p className="text-grey light padding-top-175">03 January 2019</p>
                                    <p className="text-grey light padding-top-175">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Nam vitae odio porttitor, faucibus odio vel, suscipit nunc. 
                                        Mauris urna lacus, cursus at nulla eu, dignissim fermentum elit. 
                                        Etiam vel tincidunt tellus, vel elementum neque. Aliquam iaculis 
                                        volutpat lacus vitae commodo. Nulla facilisi.
                                    </p>
                                </div>
                                <div className="update-img">
                                    <img src="https://s3.amazonaws.com/piscatello/PDC-Website_Updates_DaVinci-Thumbnail-05-05.jpg" />
                                </div>
                            </div>
                            <div className="update-row">
                                <div className="update-des">
                                    <h3 className="reg light">
                                        <HoverLink black="true">100 Years of The Bauhaus</HoverLink>
                                    </h3>
                                    <p className="text-grey light padding-top-175">03 January 2019</p>
                                    <p className="text-grey light padding-top-175">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Nam vitae odio porttitor, faucibus odio vel, suscipit nunc. 
                                        Mauris urna lacus, cursus at nulla eu, dignissim fermentum elit. 
                                        Etiam vel tincidunt tellus, vel elementum neque. Aliquam iaculis 
                                        volutpat lacus vitae commodo. Nulla facilisi.
                                    </p>
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