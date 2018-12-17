import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';
import './Statement.css';

class Statement extends Component {

    render() {
        return( 
            <div id="statement">
            <Container fluid={true} className="container text-left" style={{padding: 0}}>
                <Row justify="start" align="center" style={{height: "100%"}}>
                    <Col xs={12} sm={8} md={7}>
                        {this.props.children}
                        {/* <Button button-lg black className="margin-top-3">See Our Work</Button> */}
                    </Col>
                    <Col xs={3}>

                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Statement;