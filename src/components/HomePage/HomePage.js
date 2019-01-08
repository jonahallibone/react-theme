import React, { Component } from 'react';
import Statement from '../Statement/Statement';
import FlickSlider from '../FlickSlider/FlickSlider';
import HoverLink from '../HoverLink/HoverLink';
import { Link } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';
import posed, { PoseGroup } from 'react-pose';

import '../../App.css';

const staggerDuration = 100;

const Movement = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        transition: { 
            default: {
                duration: 600
            } 
        },
        ease: 'easeIn',
        delay: ({ i }) => i * staggerDuration + 300
    },
    exit: {
        y: 30,
        opacity: 0,
        transition: { duration: 600 },
        ease: 'easeIn',
        delay: ({ i }) => (3 - i) * staggerDuration
    }
});

class HomePage extends Component {
    
    constructor(props){ 
        super(props);

        this.state = { isVisible: false };

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isVisible: !this.state.isVisible})
        }, 500);
    }

    render() {

        return (
            <div className="home transition-page">
                <Statement>
                    <h3 className="reg text-white light padding-top-6">
                            <PoseGroup staggerChildren="100">
                                {this.state.isVisible && [
                                    <Movement key="1" i="1">
                                        <div>
                                            For nearly 25 years, we have been designing and
                                        </div>
                                    </Movement>,
                                    <Movement key="2" i="2">
                                        developing <Link to="/work/brand"><HoverLink grey="true">brand identities,</HoverLink></Link> 
                                        &nbsp;<Link to="/work/signage"><HoverLink grey="true">signage programs,</HoverLink></Link> and
                                    </Movement>,
                                    <Movement key="3" i="3">
                                        <Link to="/work/digital"><HoverLink grey="true">digital experiences</HoverLink></Link> for clients and cities worldwide.
                                    </Movement>
                                ]}
                            </PoseGroup>
                    </h3>
                </Statement>
                <FlickSlider></FlickSlider>
                <ProjectList></ProjectList>
            </div>
        );
    }
}

export default HomePage;
