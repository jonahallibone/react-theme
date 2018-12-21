import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './Careers.css';

class Careers extends Component {
    render() {
        return (
            <div id="careers">
                <Container fluid={true} className="container" style={{padding: 0}}>
                    <h3 className="reg text-bold padding-top-4 text-capitalize">Careers at PDC</h3>
                    <Row>
                        <Col xs={12} sm={10} md={8} lg={7}  style={{ paddingBottom: "5rem"}}>
                            <h3 className="reg text-grey light padding-top-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta pretium mauris vel accumsan. 
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Careers