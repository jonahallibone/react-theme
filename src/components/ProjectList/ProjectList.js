import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.js';

import './ProjectList.css';
import HoverLink from '../HoverLink/HoverLink';

class ProjectList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return(
            <div id="project-list">
            <Container fluid={true} className="container" style={{padding: 0}}>  
                <div className="project-row">
                    <div className="image-left">
                        <img src="https://s3.amazonaws.com/piscatello/Nomadx-BC.jpg" />
                    </div>
                    <div className="description-right">
                        <h2>Nomadx</h2>
                        <span className="project-category">PROJECT</span>
                        <span className="desc text-grey padding-top-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget odio rhoncus, ullamcorper nunc et, pulvinar nisl.
                        </span>
                        <Link to="/work/digital/test-2" className="project-link">
                            <Button arrow className={"grey-border"}>View Project</Button>
                        </Link>
                    </div>
                </div>
                <div className="project-row">
                    <div className="image-left">
                        <img src="https://s3.amazonaws.com/piscatello/Riverside_Entrance.jpg" />
                    </div>
                    <div className="description-right">
                        <h2>New York Department of Health</h2>
                        <span className="project-category">PROJECT</span>
                        <span className="desc text-grey padding-top-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget odio rhoncus, ullamcorper nunc et, pulvinar nisl.
                        </span>
                        <Link to="/work/digital/test-2" className="project-link">
                            <Button arrow className={"grey-border"}>View Project</Button>
                        </Link>
                    </div>
                </div>
                <div className="project-row">
                    <div className="image-left">
                        <img src="https://s3.amazonaws.com/piscatello/DesignAtWork_Horiz.jpg" />
                    </div>
                    <div className="description-right">
                        <h2>Design at Work Book</h2>
                        <span className="project-category">UPDATE</span>
                        <span className="desc text-grey padding-top-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget odio rhoncus, ullamcorper nunc et, pulvinar nisl.
                        </span>
                        <Link to="/update/test-2" className="project-link">
                            <Button arrow className={"grey-border"}>View Update</Button>
                        </Link>
                    </div>
                </div>
                <div className="project-row">
                    <div className="btm-link black">
                    <h2 className="text-white">Want to get in touch?</h2>
                    </div>
                    <div className="btm-link grey">
                        <h2 className="text-white">Specialized Design work for over 25 years.</h2>
                    </div>
                </div>
            </Container>
            </div>
        )
    }

}

export default ProjectList;