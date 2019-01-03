import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { Link } from 'react-router-dom';

import './ProjectList.css';
import Button from '../Button/Button';

class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            news: []
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

        const news = [
            {
                title: "Rocco Piscatello to speak at the University of New Haven",
                thumbnail: "https://s3.amazonaws.com/piscatello/New-Haven_Cropped_01.jpg",
                type: "Events",
                tagline: "28 November 2018"
            },
            {
                title: "Lorem ipsum dolor sit amet.",
                thumbnail: "https://s3.amazonaws.com/piscatello/Nomadx-BC.jpg",
                type: "Press",
                tagline: "30 November 2018"
            },
            {
                title: "Lorem ipsum dolor sit amet.",
                thumbnail: "https://s3.amazonaws.com/piscatello/Timeless_Entrance.jpg",
                type: "Exhibitions",
                tagline: "01 December 2018"
            },
            {
                title: "Lorem ipsum dolor sit amet.",
                thumbnail: "https://s3.amazonaws.com/piscatello/Salt-Lake_Kiosks.jpg",
                type: "Awards",
                tagline: "02 January 2019"
            }
        ]

        this.setState({"projects": projects});
        this.setState({"news": news})

    }

    renderProjects = () => {
        
        const template = this.state.projects.map((el, i) => (
            <ProjectContainer project={el} key={i} />
        ))

        return template;
    }

    renderNews = () => {
        
        const template = this.state.news.map((el, i) => (
            <ProjectContainer news={true} project={el} key={i} />
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
                    <div style={{display: "flex", justifyContent: "center", paddingTop: "5rem"}}>
                        <Link to="/work"><Button arrow className="black-border">More Work</Button></Link>
                    </div>
                </Container>
                <div className="homepage-news">
                    <Container fluid={true} className="container" style={{padding: 0}}>
                        {/* <Link to="/updates" className="margin-btm-2" style={{display: "block"}}><HoverLink grey-grey><h4>Updates (33)</h4></HoverLink></Link> */}
                        <div className="news-grid">
                            {this.renderNews()}
                        </div>
                    </Container>
                </div>
            </div>
        )
    }

}

export default ProjectList;