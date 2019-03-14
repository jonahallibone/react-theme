import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { Link } from 'react-router-dom';

import SwipeSlider from '../SwipeSlider/SwipeSlider';

import './ProjectList.css';
import Button from '../Button/Button';
import { ProjectsContext } from '../../ProjectsContext';

class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            news: []
        }
    }

    componentDidMount() {

        const news = [
            {
                title: "Rocco Piscatello to speak at the University of New Haven",
                thumbnail: "https://s3.amazonaws.com/piscatello/New-Haven_Cropped_01.jpg",
                type: "Events",
                tagline: "28 November 2018"
            },
            {
                title: "Lorem ipsum dolor sit amet.",
                thumbnail: "https://s3.amazonaws.com/piscatello/PDC-Website_Updates_DaVinci-Thumbnail-05-05.jpg",
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
                thumbnail: "https://s3.amazonaws.com/piscatello/PDC-Website_Updates_Bauhaus-Thumbnail-03.jpg",
                type: "Awards",
                tagline: "02 January 2019"
            },
            {
                title: "Lorem ipsum dolor sit amet.",
                thumbnail: "https://s3.amazonaws.com/piscatello/Salt-Lake_Kiosks.jpg",
                type: "Awards",
                tagline: "02 January 2019"
            }
        ]

        this.setState({"news": news})

    }

    renderProjects = (projects) => {
        // console.log(projects)
        if(projects.length) {
            const template = projects.filter(project => project.acf.featured_post).map((el, i) => (
                <ProjectContainer project={el} key={i} />
            ))
            
            return template;
        }

        else return;
        
    }

    renderNews = (updates) => {
        
        const template = updates.map((el, i) => (
            <ProjectContainer news={true} project={el} key={i} />
        ))

        return template;
    }
    
    render() {
        return(
            <ProjectsContext.Consumer>
            {({ projects, updates }) => (
                <div id="project-list">                
                    <Container fluid={true} className="container" style={{padding: 0}}>
                        <div className="project-grid"  style={{paddingTop: "3rem"}}>
                            {this.renderProjects(projects)}
                        </div>
                        <div style={{display: "flex", justifyContent: "center", paddingTop: "5rem"}}>
                            <Link to="/work"><Button arrow className="black-border">More Work</Button></Link>
                        </div>
                    </Container>
                    <div className="homepage-news">
                        <Container fluid={true} className="container news-grid" style={{padding: 0}}>
                            <SwipeSlider>
                                {this.renderNews(updates)}
                            </SwipeSlider> 
                            <div style={{display: "flex", justifyContent: "center", paddingTop: "5rem"}}>
                                <Link to="/update"><Button arrow className="black-border">More Updates</Button></Link>
                            </div>
                        </Container>
                    </div>
                </div>
            )}
            </ProjectsContext.Consumer>
        )
    }

}

export default ProjectList;