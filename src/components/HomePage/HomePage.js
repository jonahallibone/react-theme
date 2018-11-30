import React from 'react';
import ContactBand from '../ContactBand/ContactBand';
import Statement from '../Statement/Statement';
import FlickSlider from '../FlickSlider/FlickSlider';
import HomePageGrid from '../HomePageGrid/HomePageGrid';
import HoverLink from '../HoverLink/HoverLink';

import '../../App.css';


function HomePage() {
    return (
        <div className="home transition-page">
            <Statement>
                <h3 className="reg light-white padding-top-6">
                For nearly 25 years, we have been designing and developing <HoverLink grey>brand identities</HoverLink>, <HoverLink grey>signage programs</HoverLink>, and <HoverLink grey>digital experiences</HoverLink> for clients and cities worldwide.                
                </h3>
            </Statement>
            <FlickSlider></FlickSlider>
            {/* <ContactBand></ContactBand> */}
            <HomePageGrid></HomePageGrid>
        </div>
    );
}

export default HomePage;
