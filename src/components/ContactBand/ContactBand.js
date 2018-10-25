import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from '../Button/Button';

import '../../App.css';
import './ContactBand.css';

function ContactBand() {
    return (
        <div id="contact-band" className="padding-top-6 padding-btm-6">
            <Container className="container" fluid={true} style={{padding: "0"}}>
                <Row justify={"start"}>
                    <Col xs={12} sm={6} className="text-left">
                        <h2 className="reg text-white margin-btm-3">The experience is your brand.</h2>
                        <h3 className="reg light margin-btm-3">
                        Our work encompasses graphics and identity, signage and wayfinding, 
                        websites and digital experiences, advertising and communications. 
                        Our clients are diverse and range from large and small, private 
                        and public, for-profit and non-profit.
                        </h3>
                        <Button button-lg className="margin-btm-3">Request a meeting</Button>
                    </Col>
                    <div className="parallax-image">
                        <img src="http://piscatello.com/wp-content/uploads/2018/09/Nomadx-BC.jpg"/>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default ContactBand;