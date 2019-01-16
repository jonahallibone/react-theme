import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import HoverLink from '../HoverLink/HoverLink';
import Button from '../Button/Button';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import posed, { PoseGroup } from 'react-pose';

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
        description: `We create work that builds business value and enhances life for people. Our clients are diverse and range from large and small, private and public, for-profit and non-profit.`,
        url: ""

      },
      "brand-strategies": {
        title: "Strategy",
        description: `Brand Strategies expresses itself in every touchpoint of a brand. It is a constant symbol of an organizations values and heritage.`,
        url: "brand-strategies"
      },
      "brand": {
        title: "Identity",
        description: `Brand identity expresses itself in every touchpoint of a brand. It is a constant symbol of an organizations values and heritage.`,
        url: "brand"
      },
      "digital": {
        title: "Digital",
        description: `A website is the first place people visit to learn more about a company or product. It provides the means to market and communicate from anywhere in the world.`,
        url: "digital"
      },
      "Print": {
        title: "Print",
        description: `Our signage work encompasses projects from city transportation and park systems, building and retail signage, workplace and feature wall graphics, donor and digital signage.`,
        url: "Print"
      },
      "signage": {
        title: "Signage",
        description: `Our signage work encompasses projects from city transportation and park systems, building and retail signage, workplace and feature wall graphics, donor and digital signage.`,
        url: "signage"
      }
    }
  }

  componentDidMount() {
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
    document.addEventListener("scroll", this.addShadow, {passive: true})
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

  handleClick = (e) => {
    this.setState({selectedName: e.target.attributes["name"].value})
  }

  getSelected(page) {
    if(this.pages[page].url === this.state.selectedName) { 
      console.log(this.pages[page].url)
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
        <ProjectContainer project={el} key={i} />
    ))

    return template;
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.addShadow);
  }

  render() {
    return (
      <section className="transition-page" id="page-work">
        <div className="option-list text-red">
          <Container fluid={true} className="container" style={{padding: 0, display: "flex", alignItems: "center"}}>
            {this.getLinks()}
            <div className="filter-option request-meeting" style={{marginRight: 0}}>
              <Link to="/contact"><Button button-md arrow className="black-border">Contact Us</Button></Link>
            </div>
          </Container>
        </div>
        <Container fluid={true} className="container" style={{padding: 0, background: "#FFF"}}>
          {/* <h3 className="reg text-bold text-white padding-top-4 text-capitalize">{this.state.pageTitle}</h3> */}
          <Row style={{paddingTop: "13.5rem"}}>
            <Col xs={12} sm={10} md={8} lg={6}  style={{ paddingBottom: "5rem"}}>
              <CSSAnimate delay="100">
                <h3 className="reg text-black">{this.state.pageTitle}</h3>
                <h3 className="reg text-grey light padding-top-2">
                  {this.state.pageDescription}
                </h3>
              </CSSAnimate>
            </Col>
          </Row>
        </Container>
        <section id="work-list">
          <div id="project-list">
            <Container fluid={true} className="container" style={{padding: 0}}>
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

export default WorkPage;
