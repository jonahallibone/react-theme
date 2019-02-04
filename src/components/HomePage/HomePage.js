import React, { Component } from 'react';
import Statement from '../Statement/Statement';
import FlickSlider from '../FlickSlider/FlickSlider';
import HoverLink from '../HoverLink/HoverLink';
import { Link } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';
import CSSAnimate from "../CSSAnimate/CSSAnimate";

import '../../App.css';
import { ProjectsContext } from '../../ProjectsContext';

class HomePage extends Component {
    
    constructor(props){ 
        super(props);
        // this.random = Math.floor(Math.random() * 2);
        this.random = 1;
        this.state = { isVisible: false };
        this.setTimeout = null;
    }

    componentDidMount() {
        this.setState({isVisible: !this.state.isVisible})
        this.styleBlack();
    }

    styleBlack = () => {
        document.querySelector("header").classList.remove("white-bg");
        document.querySelector("header").classList.add("black-bg");
      }

    componentWillUnmount() {
        window.clearTimeout(this.timeout);
    }

    render() {
        return (
            <div className="home transition-page">
                <Statement>
                    <h1 className="reg text-white lighter">
                                {this.state.isVisible && this.random == 0 && [
                                    <CSSAnimate key="i" delay="1000">
                                        <div>
                                            For nearly 25 years, we have specialized in designing 
                                        </div>
                                        <div>
                                            and developing <Link to="/work/brand"><HoverLink grey="true">brand identities,</HoverLink></Link> 
                                            <Link to="/work/signage">&nbsp;<HoverLink grey="true">signage programs,</HoverLink></Link> and
                                        </div>
                                        <div>
                                            <Link to="/work/digital"><HoverLink grey="true">digital experiences</HoverLink></Link> for clients and cities worldwide.
                                        </div>
                                    </CSSAnimate>  
                                ]}

                                {this.state.isVisible && this.random == 1 && [
                                        <CSSAnimate key="i" delay="1000">
                                            <div>
                                                Whether you’re established or just starting, we can help your organization grow through the power of design.
                                            </div>
                                        </CSSAnimate>
                                ]}
                    </h1>
                </Statement>
                <FlickSlider></FlickSlider>
                <ProjectList />
            </div>
        );
    }
}

export default HomePage;
