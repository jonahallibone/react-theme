import React, { Component } from 'react';
// import PageHeader from '../PageHeader/PageHeader';
import ProjectGrid from '../ProjectGrid/ProjectGrid';
import ProjectGridItem from '../ProjectGrid/ProjectGridItem';
import TwitterBand  from '../TwitterBand/TwitterBand';
import '../../App.css';
import ContactBand from '../ContactBand/ContactBand';
import Statement from '../Statement/Statement';
import ProjectSlider from '../ProjectSlider/ProjectSlider';

class HomePage extends Component {
  render() {
    return (
        <div className="home transition-page">
            {/* <PageHeader videoSrc="/video/225899524.mp4"></PageHeader> */}
            {/* <FlexSlider>
                <img src="http://piscatello.com/wp-content/uploads/2018/09/NomadX-1.jpg"></img>
                <img src="http://piscatello.com/wp-content/uploads/2015/05/Riverside_Entrance.jpg"></img>
                <img src="http://piscatello.com/wp-content/uploads/2014/04/NT_Colors.jpg"></img>
            </FlexSlider> */}
            <Statement>
            <h2 className="reg text-white">Your experience is your brand.</h2>
            <br />
            <br />
            <h3 className="reg light">We help companies remain relevant and create positive experiences through the power of design.</h3>
            </Statement>
            <ProjectSlider></ProjectSlider>
            {/* <ProjectGrid>
                <ProjectGridItem>
                </ProjectGridItem>
                <ProjectGridItem>

                </ProjectGridItem>
                <ProjectGridItem>
                    
                </ProjectGridItem>
            </ProjectGrid> */}
            <ContactBand></ContactBand>
            <TwitterBand></TwitterBand>
        </div>
    );
  }
}

export default HomePage;
