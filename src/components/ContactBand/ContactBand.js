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
                        <h3 className="reg light-white">
                        Since 1997, we have been designing and developing 
                        brand identities, signage programs, and digital 
                        experiences for a wide range of organizations.                
                        </h3>
                        <br/>
                        <h3 className="reg light-white">
                            We take the time to create a lasting impression and strive to make life 
                            better for everyone.
                        </h3>
                        <br/>
                        <br/>
                        <Button button-lg className="black shadow">Get in touch</Button>
                    </Col>
                    {/* <div className="parallax-image">
                        <img src="http://piscatello.com/wp-content/uploads/2018/09/Nomadx-BC.jpg"/>
                    </div> */}
                </Row>
            </Container>
        </div>
    );
}

export default ContactBand;