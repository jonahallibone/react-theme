import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import HoverLink from '../HoverLink/HoverLink';
import Button from '../Button/Button';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import posed, { PoseGroup } from 'react-pose';
import Fade from 'react-reveal/Reveal';
import Filter from "../Filter/Filter";
import { WorkContext, Pages } from "./Pages";

/* @CSS */

import '../../App.css';
import './WorkPage.css';
import CSSAnimate from '../CSSAnimate/CSSAnimate';

class WorkPage extends Component {
  constructor(props) {
    super(props);

    this.setFilter = (filter) => {
      this.setState({animateDes: "animate-out"})
      setTimeout(() => {
        this.setState(state => ({
          filter: Pages[filter],
          pageDescription: Pages[filter].description,
          animateDes: "animate-in"
        }));
      }, 600)
      
    };

    this.des = React.createRef();

    this.state = {
      pageTitle: undefined,
      pageDescription: undefined,
      selectedName: "",
      projects: [],
      filter: Pages["all"],
      setFilter: this.setFilter,
      animateDes: null
    }

    this.lastScrollY = null;

    this.scrollAnim = null;
  }

  componentWillMount() {

    const projects = [
      {
          title: "LostTribe Theatre Company",
          thumbnail: "https://s3.amazonaws.com/piscatello/Lost-Tribe_Bus.jpg",
          type: "Branding",
          tagline: "A brand new company"
      },
      {
          title: "Nomadx Solutions",
          thumbnail: "https://s3.amazonaws.com/piscatello/Nomadx-BC.jpg",
          type: "Branding",
          tagline: "Identifying a new start up"
      },
      {
          title: "Timeless Massimo Vignelli",
          thumbnail: "https://s3.amazonaws.com/piscatello/Timeless_Entrance.jpg",
          type: "Exibition",
          tagline: "A brand new company"
      },
      {
          title: "United States Courthouse",
          thumbnail: "https://s3.amazonaws.com/piscatello/Salt-Lake_Kiosks.jpg",
          type: "Signage and Wayfinding",
          tagline: "Navigating a complex environment"
      },
      {
        title: "LostTribe Theatre Company",
        thumbnail: "https://s3.amazonaws.com/piscatello/Lost-Tribe_Bus.jpg",
        type: "Branding",
        tagline: "A brand new company"
    },
    {
        title: "Nomadx Solutions",
        thumbnail: "https://s3.amazonaws.com/piscatello/Nomadx-BC.jpg",
        type: "Branding",
        tagline: "Identifying a new start up"
    },
    {
        title: "Timeless Massimo Vignelli",
        thumbnail: "https://s3.amazonaws.com/piscatello/Timeless_Entrance.jpg",
        type: "Exibition",
        tagline: "A brand new company"
    },
    {
        title: "United States Courthouse",
        thumbnail: "https://s3.amazonaws.com/piscatello/Salt-Lake_Kiosks.jpg",
        type: "Signage and Wayfinding",
        tagline: "Navigating a complex environment"
    }
    ]

    this.setState({"projects": projects});
  }
  
  componentDidMount() {
    this.styleWhite();

    this.setState({"pageDescription": Pages["all"].description})
  }


  styleWhite = () => {
      document.querySelector("header").classList.remove("black-bg");
      document.querySelector("header").classList.add("white-bg");
  }

  addShadow = () => {
    let list = document.querySelector(".option-list");


    if(this.lastScrollY < window.scrollY) {
      list.classList.add("up");
    }

    else {
      list.classList.remove("up");
    }

    this.lastScrollY = window.scrollY;

  }

  renderProjects = () => {
    const template = this.state.projects.map((el, i) => (
      <Fade bottom key={i}>
        <ProjectContainer project={el} />
      </Fade>
    ))

    return template;
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.addShadow);
  }

  render() {
    return (
      <section className="transition-page" id="page-work">
        <Container fluid={true} className="container" style={{padding: 0, background: "#FFF"}}>
          <Row style={{paddingTop: "7rem"}}>
            <Col xs={12} sm={10} md={9} lg={9}  style={{ paddingBottom: "5rem"}}>
              <h1 className={"reg lighter text-grey animate " + this.state.animateDes}>
                {this.state.pageDescription}
              </h1>
            </Col>
          </Row>
        </Container>
        <section id="work-list">
          <div id="project-list">
            <Container fluid={true} className="container" style={{padding: 0}}>
              <h2 className="light padding-btm-lg" style={{display: "flex"}}>
                Showing – &nbsp;
                <WorkContext.Provider value={this.state}>
                  <Filter />
                </WorkContext.Provider>
              </h2>
              <div className="project-grid">
                  {this.renderProjects()}
              </div>
            </Container>
          </div>
          
        </section>
      </section>
    );
  }
}

const projects = [
  {
      title: "LostTribe Theatre Company",
      thumbnail: "https://s3.amazonaws.com/piscatello/Lost-Tribe_Bus.jpg",
      type: "Branding",
      tagline: "A brand new company"
  },
  {
      title: "Nomadx Solutions",
      thumbnail: "https://s3.amazonaws.com/piscatello/Nomadx-BC.jpg",
      type: "Branding",
      tagline: "Identifying a new start up"
  },
  {
      title: "Timeless Massimo Vignelli",
      thumbnail: "https://s3.amazonaws.com/piscatello/Timeless_Entrance.jpg",
      type: "Exibition",
      tagline: "A brand new company"
  },
  {
      title: "United States Courthouse",
      thumbnail: "https://s3.amazonaws.com/piscatello/Salt-Lake_Kiosks.jpg",
      type: "Signage and Wayfinding",
      tagline: "Navigating a complex environment"
  },
  {
    title: "LostTribe Theatre Company",
    thumbnail: "https://s3.amazonaws.com/piscatello/Lost-Tribe_Bus.jpg",
    type: "Branding",
    tagline: "A brand new company"
},
{
    title: "Nomadx Solutions",
    thumbnail: "https://s3.amazonaws.com/piscatello/Nomadx-BC.jpg",
    type: "Branding",
    tagline: "Identifying a new start up"
},
{
    title: "Timeless Massimo Vignelli",
    thumbnail: "https://s3.amazonaws.com/piscatello/Timeless_Entrance.jpg",
    type: "Exibition",
    tagline: "A brand new company"
},
{
    title: "United States Courthouse",
    thumbnail: "https://s3.amazonaws.com/piscatello/Salt-Lake_Kiosks.jpg",
    type: "Signage and Wayfinding",
    tagline: "Navigating a complex environment"
}
]

export { projects };
export { WorkContext };
export default WorkPage;
