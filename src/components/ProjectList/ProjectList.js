import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

import './ProjectList.css';
import HoverLink from '../HoverLink/HoverLink';

class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        const projects = [
            {
                title: "LostTribe Theatre Company",
                thumbnail: "https://s3.amazonaws.com/piscatello/Lost-Tribe_Bus.jpg",
                type: "Branding",
                tagline: "A brand new company"
            },
            {
                title: "Nomadx Solutions",
                thumbnail: "https://s3.amazonaws.com/piscatello/Nomadx-BC.jpg",
                type: "Branding",
                tagline: "Identifying a new start up"
            },
            {
                title: "Timeless Massimo Vignelli",
                thumbnail: "https://s3.amazonaws.com/piscatello/Timeless_Entrance.jpg",
                type: "Exibition",
                tagline: "A brand new company"
            },
            {
                title: "United States Courthouse",
                thumbnail: "https://s3.amazonaws.com/piscatello/Salt-Lake_Kiosks.jpg",
                type: "Signage and Wayfinding",
                tagline: "Navigating a complex environment"
            }
        ]
        this.setState({"projects": projects})
    }

    renderProjects = () => {
        
        const template = this.state.projects.map((el, i) => (
            <ProjectContainer project={el} key={i} />
        ))

        return template;
    }
    

    componentWillUnmount() {

    }

    render() {
        return(
            <div id="project-list">
                <Container fluid={true} className="container" style={{padding: 0}}>
                    <div className="project-grid">
                        {this.renderProjects()}
                    </div>
                </Container>
            </div>
        )
    }

}

export default ProjectList;