import React, { useState, useContext } from 'react';
import Statement from '../Statement/Statement';
import FlickSlider from '../FlickSlider/FlickSlider';
import HoverLink from '../HoverLink/HoverLink';
import { Link } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';
import CSSAnimate from "../CSSAnimate/CSSAnimate";


import '../../App.css';
import { ProjectsContext } from '../../ProjectsContext';

const HomePage = () => {
    const { slider } = useContext(ProjectsContext);

    return (
        <div className="home transition-page">
            {!slider.length ? "" :
                <>
                    <Statement>
                        <CSSAnimate key="i" delay="1000">
                            <h1 className="reg text-white  lighter top-text">
                                {slider[0].acf.intro_tagline}
                                <br className="large-br"/><div className="random-space">&nbsp;</div>
                                {slider[0].acf.intro_tagline_second_line}
                            </h1>
                        </CSSAnimate>
                    </Statement>
                    <FlickSlider />
                    <ProjectList />
                </>
            }
        </div>
);
}

export default HomePage;
