import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import HoverLink from '../HoverLink/HoverLink';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Container className="container" fluid={true} justify={"start"} style={{padding: 0}}>6
                    <Row>
                        <Col xs={6}>
                            <a className="light">
                                © Piscatello Design Centre, 1997 - 2018
                            </a>
                            <a className="light">
                            <HoverLink grey-black="true">Download our Profile</HoverLink>
                            </a>
                        </Col>
                        <Col xs={6} style={{textAlign: "right"}}>
                            <a className="light"><HoverLink grey-black="true">Subscribe to our Newsletter</HoverLink></a>
                            <a className="light"><HoverLink grey-black="true">Careers</HoverLink></a>
                            <a className="light"><HoverLink grey-black="true">Contact</HoverLink></a>
                        </Col>
                    </Row>
                </Container>
                <div className="newsletter-input">
                    
                </div>
            </div>
        )
    }
}
export default Footer;