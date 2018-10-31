import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Input  from '../Input/Input';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Container className="container" fluid={true} justify={"start"} style={{padding: 0}}>
                    <Row>

                    </Row>
                    <Row>
                        <Col md={4} justify={"center"}>
                            <h4>About</h4>
                            <br/>
                            <br/>
                            <h4 className="light-white">
                            We are an independent New York based
                            strategic design consultancy.
                            </h4>
                            <br/>
                            <h4 className="light-white">
                            We welcome you to work with us to strengthen your brand, 
                            increase business, and create meaningful experiences.
                            </h4>
                            <br/>
                            <br/>
                            <Input color="black" arrow/>
                        </Col>
                        <Col md={2}>    
                            <h4>Work</h4>
                            <br/>
                            <br/>
                            <h4 className="light-white">Brand Identity</h4>
                            <h4 className="light-white">Digital Expiriences</h4>
                            <h4 className="light-white">Wayfinding & Signage</h4>
                            <h4 className="light-white">Advertising Communications</h4>
                        </Col>
                        <Col md={2}>
                            <h4>Expertise</h4>
                            <br/>
                            <br/>
                            <h4 className="light-white">Lorem Ipsum</h4>
                            <h4 className="light-white">Lorem Ipsum</h4>
                            <h4 className="light-white">Lorem Ipsum</h4>
                            <h4 className="light-white">Lorem Ipsum</h4>
                        </Col>
                        <Col md={2}>
                            <h4>Studio</h4>
                            <br/>
                            <br/>
                            <h4 className="light-white">History</h4>
                            <h4 className="light-white">Practice</h4>
                            <h4 className="light-white">People</h4>
                            <h4 className="light-white">Recognition</h4>
                        </Col>
                        <Col md={2}>
                            <h4>Contact</h4>
                            <br/>
                            <br/>
                            <h4 className="light-white">330 West 38th Street</h4>
                            <h4 className="light-white">New York, NY, 10028</h4>
                            <br/>
                            <h4 className="light-white">+1 212 502 4734</h4>
                        </Col>
                    </Row>
                </Container>
                <div className="sticky-bottom">
                    <span>
                        Copyright Piscatello Design Centre, 1999 - 2018
                    </span>
                </div>
            </div>
        )
    }
}
export default Footer;