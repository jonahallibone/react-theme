import React, { Component } from 'react';
// import PageHeader from '../PageHeader/PageHeader';
import ProjectGrid from '../ProjectGrid/ProjectGrid';
import ProjectGridItem from '../ProjectGrid/ProjectGridItem';
import FlexSlider from '../FlexSlider/FlexSlider';
import '../../App.css';

class HomePage extends Component {
  render() {
    return (
        <div className="home transition-page">
            {/* <PageHeader videoSrc="/video/225899524.mp4"></PageHeader> */}
            <FlexSlider>
                <img src="http://piscatello.com/wp-content/uploads/2018/09/Nomadx-7jpg.jpg"></img>
                <img src="http://piscatello.com/wp-content/uploads/2015/05/Riverside_Entrance.jpg"></img>
                <img src="http://piscatello.com/wp-content/uploads/2014/04/NT_Colors.jpg"></img>
            </FlexSlider>
            <ProjectGrid>
                <ProjectGridItem>
                    {/* Should it display children? */}
                </ProjectGridItem>
                <ProjectGridItem>

                </ProjectGridItem>
                <ProjectGridItem>
                    
                </ProjectGridItem>
            </ProjectGrid>
        </div>
    );
  }
}

export default HomePage;
