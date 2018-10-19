import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';
import './Statement.css';

class Statement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return( 
            <div id="statement">
            <Container fluid={true} className="container text-left" style={{padding: 0}}>
                <Row justify="start" align="center" style={{height: "100%"}}>
                    <Col xs={12} sm={8} md={6}>
                        {this.props.children}
                        {/* <Button button-lg black className="margin-top-3">See Our Work</Button> */}
                    </Col>
                    <Col xs={3}>
                    {/* <svg viewBox="0 0 500 500">
                            <title>Red Hot Chilli Peppers Logo</title>
                        <defs>
                            <path d="M243.2, 382.4c-74.8,   
                            0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
                            135.5 S318, 382.4, 243.2, 382.4z" id="textcircle" />  
                        </defs> 
                            <text dy="0" textLength="1200">
                                <textPath xlinkHref="#textcircle">
                                    Piscatello Design Centre ● Piscatello Design Centre ● Piscatello Design Centre ●
                                </textPath>
                            </text>
                        </svg> */}
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Statement;