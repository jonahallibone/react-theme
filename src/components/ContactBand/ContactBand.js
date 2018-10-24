import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from '../Button/Button';

import '../../App.css';
import './ContactBand.css';

function ContactBand() {
    return (
        <div id="contact-band" className="padding-top-6 padding-btm-6">
            <Container className="container" fluid={true} style={{padding: "0"}}>
                <Row>
                    <Col xs={12} sm={8}>
                        <h2 className="reg margin-btm-3">The experience is your brand.</h2>
                        <h3 className="reg light margin-btm-3">
                        Our work encompasses business strategy, brand identity, 
                        environmental signage, and website development. We 
                        view systems in its entirety and always from a user 
                        perspective. Design, when implemented consistently adds 
                        brand value and reduces operational costs.
                        </h3>
                        <Button button-lg className="margin-btm-3">Request a meeting</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactBand;