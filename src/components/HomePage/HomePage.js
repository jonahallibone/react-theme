import React from 'react';
import TwitterBand  from '../TwitterBand/TwitterBand';
import ContactBand from '../ContactBand/ContactBand';
import Statement from '../Statement/Statement';
import ProjectSlider from '../ProjectSlider/ProjectSlider';

import '../../App.css';


function HomePage() {
    return (
        <div className="home transition-page">
            <Statement>
                <h2 className="reg text-white">The experience is your brand.</h2>
                <br />
                <br />
                <h3 className="reg light">We design and develop brand identities, signage systems, and websites.</h3>
            </Statement>
            <ProjectSlider></ProjectSlider>
            <ContactBand></ContactBand>
            <TwitterBand></TwitterBand>
        </div>
    );
}

export default HomePage;
