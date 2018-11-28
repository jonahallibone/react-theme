import React from 'react';
import ContactBand from '../ContactBand/ContactBand';
import Statement from '../Statement/Statement';
import FlickSlider from '../FlickSlider/FlickSlider';
import HomePageGrid from '../HomePageGrid/HomePageGrid';

import '../../App.css';


function HomePage() {
    return (
        <div className="home transition-page">
            <Statement>
                <h3 className="reg light-white padding-top-6">
                For nearly 25 years, we have been designing and developing <u>brand identities,</u> <u>signage programs,</u> and <u>digital experiences</u> for clients and cities worldwide.                
                </h3>
            </Statement>
            <FlickSlider></FlickSlider>
            {/* <ContactBand></ContactBand> */}
            <HomePageGrid></HomePageGrid>
        </div>
    );
}

export default HomePage;
