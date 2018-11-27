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
                    {/* <div className="information">
                        <p className="text-white text-bold">
                            July 2018 &bull; Web Development & Design
                        </p>
                    </div> */}
                </Container>
            </section>
        )
    }
}

export default WorkPageHeader;