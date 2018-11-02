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
                <h3 className="reg light-white">
                Since 1997, we have been designing and developing 
                brand identities, signage programs, and digital 
                experiences for a wide range of organizations.                
                </h3>
                <br/>
                <h3 className="reg light-white">
                    We take the time to create a lasting impression and strive to make life 
                    better for everyone.
                </h3>
            </Statement>
            <FlickSlider></FlickSlider>
            {/* <ContactBand></ContactBand> */}
            <HomePageGrid></HomePageGrid>
        </div>
    );
}

export default HomePage;
