import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import ProjectThumbnail from '../ProjectThumbnail/ProjectThumbnail';

import './HomePageGrid.css';

class HomePageGrid extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div id="" style={{backgroundColor: "#fff"}}>
                <Container className="container" fluid={true} style={{padding: "5rem 0 0 0"}}>
                    <div>
                        {/* <h4 className="text-black light reg" style={{margin: "0 0 1.25rem 0", color: "rgb(41, 53, 58)", fontSize: "1.5rem"}}>Feed  —  All Work  News  Events  Awards  Other </h4> */}
                    </div>
                    <div className="grid-container">
                        <div className="grid-container--side of-1">
                            <ProjectThumbnail></ProjectThumbnail>
                        </div>
                        <div className="grid-container--side of-1">
                            <ProjectThumbnail></ProjectThumbnail>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="grid-container--side of-1">
                            <ProjectThumbnail></ProjectThumbnail>
                        </div>
                        <div className="grid-container--side of-1">
                            <ProjectThumbnail></ProjectThumbnail>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="grid-container--side of-4">
                            <Link to="/update/test-1"><ProjectThumbnail></ProjectThumbnail></Link>
                            <ProjectThumbnail></ProjectThumbnail>
                            <ProjectThumbnail></ProjectThumbnail>
                            <ProjectThumbnail></ProjectThumbnail>
                        </div>
                        <div className="grid-container--side of-4">
                            <Link to="/update/test-1"><ProjectThumbnail></ProjectThumbnail></Link>
                            <ProjectThumbnail></ProjectThumbnail>
                            <ProjectThumbnail></ProjectThumbnail>
                            <ProjectThumbnail></ProjectThumbnail>
                        </div>
                    </div>
                    <Row style={{"margin": 0, justifyContent: "center"}} className="padding-top-6 padding-btm-6">
                        <Link to="/work">
                            <Button button-lg arrow className="black-red center text-bold">View More Projects</Button>
                        </Link>
                    </Row>
                    {/* <Button button-md className="margin-btm-3 black">See More Work</Button> */}
                </Container>
            </div>
        )
    }
}

export default HomePageGrid;