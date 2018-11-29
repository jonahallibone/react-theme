import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';
import './ContactBand.css';

function ContactBand() {
    return (
        <div id="contact-band" className="padding-top-5 padding-btm-5">
            <Container className="container" fluid={true} style={{padding: "0"}}>
                <Row justify={"start"}>
                    <Col xs={12} sm={6} className="text-left">
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactBand;