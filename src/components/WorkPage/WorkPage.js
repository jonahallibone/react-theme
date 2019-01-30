import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import HoverLink from '../HoverLink/HoverLink';
import Button from '../Button/Button';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import posed, { PoseGroup } from 'react-pose';
import Fade from 'react-reveal/Reveal';
import Filter from "../Filter/Filter";

import '../../App.css';
import './WorkPage.css';
import CSSAnimate from '../CSSAnimate/CSSAnimate';

const staggerDuration = 100;

const Movement = posed.div({
  enter: {
      y: 0,
      opacity: 1,
      transition: { 
          default: {
              duration: 600
          } 
      },
      ease: 'easeIn',
      delay: ({ i }) => i * staggerDuration + 300
  },
  exit: {
      y: 30,
      opacity: 0,
      transition: { duration: 600 },
      ease: 'easeIn',
      delay: ({ i }) => (3 - i) * staggerDuration
  }
});

class WorkPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: undefined,
      pageDescription: undefined,
      selectedName: "",
      projects: []
    }

    this.lastScrollY = null;

    this.scrollAnim = null;

    this.pages = {
      "all": {
        title: "Work",
        description: `We create work that builds business value and enhances life for people and the places they inhabit.`,
        url: "all"

      },
      "brand-strategies": {
        title: "Strategy",
        description: `Our brand strategy work encompasses brand positioning, brand promise, brand voice, brand architecture and brand alignment strategies.`,
        url: "brand-strategies"
      },
      "brand": {
        title: "Identity",
        description: `Our brand identity work includes visual identity systems, logomarks, color palettes, typography, icon development, graphic elements and brand guidelines.`,
        url: "brand"
      },
      "digital": {
        title: "Digital",
        description: `Our digital work includes websites, product microsites, email newsletters, online advertising, social media, content management systems and analytics.`,
        url: "digital"
      },
      "print": {
        title: "Print",
        description: `Our print work encompasses brand stationery, brand announcements, marketing collateral, magazines, books and event posters.`,
        url: "print"
      },
      "signage": {
        title: "Signage",
        description: `Our signage work encompasses projects from city transportation and park systems, building and retail signage, workplace and feature wall graphics, donor and digital signage.`,
        url: "signage"
      }
    }
  }

  componentWillMount() {
    if(this.props.match.params.type) {
      let page = this.pages[this.props.match.params.type];
      this.setState(
        {pageTitle: page.title, pageDescription: page.description, selectedName: page.url}
      )
    }
    
    else {
      this.setState({pageTitle: this.pages["all"].title, pageDescription: this.pages["all"].description})
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

    this.setState({"projects": projects});
    // document.addEventListener("scroll", this.addShadow, {passive: true})
  }
  
  componentDidMount() {
    this.styleWhite();
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

  sleep(duration) {
    return new Promise(function(resolve, reject) {
      setTimeout(()=> { resolve(0) }, duration);
    })
  }
  
  
  handleClick = async (e) => {

    let page = e.target.attributes["name"].value;
    document.querySelectorAll(".cssanimation").forEach(el => el.classList.remove("enter"))
    this.setState({selectedName: page })
    await this.sleep(1000);

    document.querySelectorAll(".cssanimation").forEach(el => el.classList.remove("exit"));
    document.querySelectorAll(".cssanimation").forEach(el => el.classList.add("enter"))

    this.setState(
      {
        pageTitle: this.pages[page].title, 
        pageDescription: this.pages[page].description, 
        selectedName: this.pages[page].url
      }
    )
  }

  getSelected(page) {
    if(this.pages[page].url === this.state.selectedName) { 
      return true
    }
    else return false;
  }

  getLinks() {
    return (
      Object.keys(this.pages).map(page => {
        return (
          <span className="filter-option" key={page}>
            <Link to={"/work/" + this.pages[page].url}>
              <HoverLink name={this.pages[page].url} selected={this.getSelected(page)} onClick={this.handleClick}>{this.pages[page].title == "Work" ? "All " : ""}{this.pages[page].title}</HoverLink>
            </Link>
          </span>
        )
      })
    )
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
        {/* <div className="option-list text-red" style={{whiteSpace: "nowrap"}}>
          <Container fluid={true} className="container" style={{padding: 0, display: "flex", alignItems: "center"}}>
            {this.getLinks()}
            <div className="filter-option request-meeting" style={{marginRight: 0}}>
              <Link to="/contact">
                <Button button-md arrow className="black-border">
                  <div style={{color: "#000" }} className="share-icon">
                    <Icon icon={messageSquare} size="20" />
                  </div>
                </Button></Link>
            </div>
          </Container>
        </div> */}
        <Container fluid={true} className="container" style={{padding: 0, background: "#FFF"}}>
          {/* <h3 className="reg text-bold text-white padding-top-4 text-capitalize">{this.state.pageTitle}</h3> */}
          <Row style={{paddingTop: "7rem"}}>
            <Col xs={12} sm={10} md={9} lg={9}  style={{ paddingBottom: "5rem"}}>
              <CSSAnimate delay="300">
                {/* <h1 className="reg text-black">{this.state.pageTitle}</h1> */}
                <h1 className="reg lighter text-grey">
                  {this.state.pageDescription}
                </h1>
              </CSSAnimate>
            </Col>
          </Row>
        </Container>
        <section id="work-list">
          <div id="project-list">
            <Container fluid={true} className="container" style={{padding: 0}}>
              <h2 className="light padding-btm-lg" style={{display: "flex"}}>
                Showing – &nbsp;
                <Filter></Filter>
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

export { projects }

export default WorkPage;
