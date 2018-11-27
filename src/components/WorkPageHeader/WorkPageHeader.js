import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './WorkPageHeader.css';

class WorkPageHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="featured-header">
                <Container fluid={true} className="container" style={{padding: 0, position: "relative", height: "100%"}}>
                    
                </Container>
            </section>
        )
    }
}

export default WorkPageHeader;