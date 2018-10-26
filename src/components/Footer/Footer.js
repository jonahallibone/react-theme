import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Input  from '../Input/Input';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Container className="container" fluid={true} style={{padding: 0}}>
                    <Col md={4} style={{padding: 0}}>
                        <h2>Subscribe to Our Newsletter</h2>
                        <Input color="black"/>
                        <h4>330 West 38th Street</h4>
                        <h4>New York, NY, 10028</h4>
                        <br/>
                        <h4>+1 212 502 4734</h4>
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>

                    </Col>
                </Container>
            </div>
        )
    }
}
export default Footer;