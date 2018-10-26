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
                {/* <h2 className="reg">The experience is your brand.</h2> */}
                <br />
                <br />
                <h3 className="reg light">We are a New York based, independent design studio with over 20 years experience
                in digital, branding, and identity work.</h3>
            </Statement>
            <FlickSlider></FlickSlider>
            <ContactBand></ContactBand>
            <HomePageGrid></HomePageGrid>
        </div>
    );
}

export default HomePage;
