import React, { Component } from 'react';

import './FlexMasonry.css';
import { Container, Row, Col } from 'react-grid-system';


class FlexMasonry extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <Container className="container" fluid={true} style={{padding: 0}}>
                <div className="filter-layout">
                </div>
                <div className="grid-layout">
                    { this.props.children }
                </div>
            </Container>
            
        )
    }
}

export default FlexMasonry;