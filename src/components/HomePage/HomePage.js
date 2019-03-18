import React, { Component } from 'react';
import Statement from '../Statement/Statement';
import FlickSlider from '../FlickSlider/FlickSlider';
import HoverLink from '../HoverLink/HoverLink';
import { Link } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';
import CSSAnimate from "../CSSAnimate/CSSAnimate";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";


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
        setTimeout(() => this.styleBlack(), 1000);
        const target = document.querySelector(".top-text");
        const split = Splitting({
            target: "[data-splitting]",

            by: "lines",

            key: null 
        })

        console.log(split);

    }

    styleBlack = () => {
        document.querySelector("header").classList.add("black-bg");
    }

    componentWillUnmount() {
        document.querySelector("header").classList.remove("black-bg");
        window.clearTimeout(this.timeout);
    }

    render() {
        return (
            <div className="home transition-page">
                <Statement>
                    <h1 className="reg text-white lighter">
                        <CSSAnimate key="i" delay="1000">
                            <h1 className="reg lighter top-text" data-splitting="words">
                            We are a multidisciplinary design consultancy.
                            Our work is strategic, universal, and timeless.
                            </h1>
                        </CSSAnimate>
                    </h1>
                </Statement>
                <FlickSlider></FlickSlider>
                <ProjectList />
            </div>
        );
    }
}

export default HomePage;
