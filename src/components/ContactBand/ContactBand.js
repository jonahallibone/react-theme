import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from '../Button/Button';

import '../../App.css';
import './ContactBand.css';

function ContactBand() {
    return (
        <div id="contact-band" className="padding-top-5 padding-btm-10">
            <Container className="container" fluid={true} style={{padding: "0"}}>
                <Row justify={"start"}>
                    <Col xs={12} sm={6} className="text-left">
                        <h3 className="reg text-black light">
                            Our clients are diverse and range from large and small, private and public, for-profit and non-profit.
                            <br/>
                            <br/>
                            Explore some of our recent projects, activities, and events.                
                        </h3>
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