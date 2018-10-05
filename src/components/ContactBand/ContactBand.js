import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Input from '../Input/Input';
import Button from '../Button/Button';

import '../../App.css';
import './ContactBand.css';

class ContactBand extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="contact-band">
                <Container className="container" fluid={true} style={{padding: "0"}}>
                    <Row>
                        <Col xs={12} sm={6}>
                            <h2>Work? Career? Just want to<br/>Enter your email to get started.</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContactBand;