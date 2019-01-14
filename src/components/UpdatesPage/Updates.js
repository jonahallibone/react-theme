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
                <div className="option-list text-red">
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
                                <HoverLink>Exhibitions</HoverLink>
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
                        <span className="filter-option">
                            <Link to={"/update/"}>
                                <HoverLink>Projects</HoverLink>
                            </Link>
                        </span>
                        <div className="filter-option request-meeting" style={{marginRight: 0}}>
                        <Link to="/contact"><Button button-md arrow className="black-border">Contact Us</Button></Link>
                        </div>
                    </Container>
                </div>
            </section>
        )
    }
}

export default Updates;