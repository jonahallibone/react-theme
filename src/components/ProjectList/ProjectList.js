import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import SwipeSlider from '../SwipeSlider/SwipeSlider';

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
        const settings = {
            className: "",
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: false,
            arrows: true,
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />,
            // beforeChange: (current, next) => this.setState({ activeSlide: next }),
            // afterChange: current => this.setState({ activeSlide2: current })
        };
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
                    <Container fluid={true} className="container news-grid" style={{padding: 0}}>
                        <SwipeSlider>
                            {this.renderNews()}
                        </SwipeSlider> 
                    </Container>
                </div>
            </div>
        )
    }

}

export default ProjectList;