import React from 'react';
import ContactBand from '../ContactBand/ContactBand';
import Statement from '../Statement/Statement';
import FlickSlider from '../FlickSlider/FlickSlider';
import HomePageGrid from '../HomePageGrid/HomePageGrid';
import HoverLink from '../HoverLink/HoverLink';
import { Link } from 'react-router-dom';
import '../../App.css';


function HomePage() {
    return (
        <div className="home transition-page">
            <Statement>
                <h3 className="reg light-white padding-top-6">
                For nearly 25 years, we have been designing and developing <Link to="/work/brand"><HoverLink grey>brand identities,</HoverLink></Link> <Link to="/work/signage"><HoverLink grey>signage programs,</HoverLink></Link> and <Link to="/work/digital"><HoverLink grey>digital experiences</HoverLink></Link> for clients and cities worldwide.                
                </h3>
            </Statement>
            <FlickSlider></FlickSlider>
            {/* <ContactBand></ContactBand> */}
            <HomePageGrid></HomePageGrid>
        </div>
    );
}

export default HomePage;
