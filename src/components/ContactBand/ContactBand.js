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
            <div id="contact-band" className="padding-top-3">
                <Container className="container" fluid={true} style={{padding: "0"}}>
                    <Row>
                        <Col xs={12} sm={6}>
                            <h2 className="reg margin-btm-3">Lets work together.</h2>
                            <h3 className="reg light margin-btm-3">
                                Our work changes the way businesses think about
                                themselves and operate. We create value for our 
                                clients and positive experiences for people and society. 
                                Contact us to talk about working together.
                            </h3>
                            <Button button-lg className="margin-btm-3">Get in touch</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContactBand;