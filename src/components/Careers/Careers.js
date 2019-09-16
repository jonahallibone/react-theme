import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import CSSAnimate from "../CSSAnimate/CSSAnimate";

import './Careers.css';
import HoverLink from '../HoverLink/HoverLink';
import { ProjectsContext } from '../../ProjectsContext';

class Careers extends Component {
    componentDidMount() {
        this.styleBlack();
    }

    styleBlack = () => {
        document.querySelector("header").classList.remove("white-bg");
        document.querySelector("header").classList.add("black-bg");
    }

    getCareers = careers => {
        if(!careers.length) return;
        console.log(careers);
        return (
            careers[0].acf.current_openings.map(career => {
                const link = <HoverLink><a className="text-white" href={`mailto:${career.job_email}`}>{career.job_email}</a></HoverLink>
                const desc = `${career.job_description}`;
                return (
                    <div className="careers-grid career">
                        <div>
                            <h3 className="reg text-white text-bold">{career.job_title}</h3>
                        </div>
                        <div className="text-grey">
                            <p dangerouslySetInnerHTML={{__html: desc}} />
                            <br />
                            <p className="text-grey">{link}</p>
                        </div>
                    </div>
                )}
            )
        )
    }
    
    render() {
        return (
            <ProjectsContext.Consumer>
                {({ careers }) => (
                    <div className="careers-page">
                        <Container fluid={true} className="container" style={{padding: 0}}>
                            <CSSAnimate delay="1000">
                                <h1 className="text-white lighter reg careers-top-text">We're always on the lookout for the best designers, strategists, and developers to join our team.</h1>
                            </CSSAnimate>
                            <div className="image-container">
                                <img src="https://s3.amazonaws.com/piscatello/studio-hands.jpg" />
                            </div>
                            {this.getCareers(careers)}
                        </Container>
                    </div>
                )}
            </ProjectsContext.Consumer>
        )
    }
}

export default Careers