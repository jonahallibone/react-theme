import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Container className="container" fluid={true} justify={"start"} style={{padding: 0}}>
                    <Row>
                        <Col xs={6}>
                            <a className="light">© Piscatello Design Centre, 1997 - 2018</a>
                            <a className="light underlined">Subscribe to our Newsletter</a>
                        </Col>
                        <Col xs={6} style={{textAlign: "right"}}>
                            <a className="light underlined">Contact</a>
                            {/* <a className="light">Facebook</a> */}
                            <a className="light underlined">Twitter</a>
                            <a className="light underlined">Instagram</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Footer;