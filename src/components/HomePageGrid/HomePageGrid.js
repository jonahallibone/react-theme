import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './HomePageGrid.css';

class HomePageGrid extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container className="container" fluid={true} style={{padding: 0}}>
                <div className="grid-container">
                    <div className="grid-container--side of-1">
                        <div className="item"></div>
                    </div>
                    <div className="grid-container--side of-4">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-container--side of-4">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                    <div className="grid-container--side of-1">
                        <div className="item"></div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default HomePageGrid;