import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import HoverLink from '../HoverLink/HoverLink';
import Button from '../Button/Button';

import '../../App.css';
import './WorkPage.css';
import ProjectThumbnail from '../ProjectThumbnail/ProjectThumbnail';

class WorkPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: undefined,
      pageDescription: undefined,
      selected: undefined
    }

    this.scrollAnim = null;

    this.pages = {
      "all": {
        title: "All Work",
        description: `We create work that builds business value and enhances life for people. Our clients are diverse and range from large and small, private and public, for-profit and non-profit.`
      },
      "brand": {
        title: "Brand Identities",
        description: `Brand identity expresses itself in every touchpoint of a brand. It is a constant symbol of an organizations values and heritage.`
      },
      "digital": {
        title: "Digital Experiences",
        description: `A website is the first place people visit to learn more about a company or product. It provides the means to market and communicate from anywhere in the world.`
      },
      "signage": {
        title: "Signage Programs",
        description: `Our signage work encompasses projects from city transportation and park systems, building and retail signage, workplace and feature wall graphics, donor and digital signage.`
      }
    }
  }

  componentDidMount() {
    if(this.props.match.params.type) {
      let page = this.pages[this.props.match.params.type];
      this.setState(
        {pageTitle: page.title, pageDescription: page.description}
      )
    }
    
    else {
      this.setState({pageTitle: this.pages["all"].title, pageDescription: this.pages["all"].description})
    }

    document.addEventListener("scroll", this.addShadow)
  }

  addShadow = () => {
    let list = document.querySelector(".option-list");

    if(list.getBoundingClientRect().top <=75) {
      list.classList.add("shadow");
    }
    else list.classList.remove("shadow");
  }

  handleClick = (e) => {

    console.log(e);
    // this.setState({selected:})
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.addShadow);
  }

  render() {
    return (
      <section className="transition-page" id="page-work">
        <Container fluid={true} className="container" style={{padding: 0, background: "#000"}}>
          <h3 className="reg text-bold text-white padding-top-4 text-capitalize">{this.state.pageTitle}</h3>
          <Row>
            <Col xs={7} style={{ paddingBottom: "5rem"}}>
              <h3 className="reg light-white padding-top-2">
                {this.state.pageDescription}
              </h3>
            </Col>
          </Row>
        </Container>
        <section id="work-list">
        <Container fluid={true} className="container" style={{padding: 0}}>
          <div className="option-list text-red">
            {/* <span className="filter-option"><span className={{color: "#999"}}></span></span> */}
            <span className="filter-option">
              <Link to="/work/">
                <HoverLink selected={this.state.selected} name="all" onclick={this.handleClick}>All Work</HoverLink>
              </Link>
            </span>
            <span className="filter-option">
              <Link to="/work/brand/">
                <HoverLink selected={this.state.selected} name="brand" onclick={this.handleClick}>Brand Identities</HoverLink>
              </Link>
            </span>
            <span className="filter-option">
              <Link to="/work/digital/">
                <HoverLink selected={this.state.selected} name="digital" onclick={this.handleClick}>Digital Experiences</HoverLink>
              </Link>
            </span>
            <span className="filter-option">
              <Link to="/work/signage/">
                <HoverLink selected={this.state.selected} name="signage" onclick={this.handleClick}>Signage Programs</HoverLink>
              </Link>
            </span>
            <div className="filter-option request-meeting" style={{marginRight: 0}}>
              <Button button-md arrow className="black-red center text-bold">Start a Project</Button>
            </div>
          </div>
          <div className="image-grid-row">
            <Link to="/work/digital/test-project" className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </Link>
            <div className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </div>
            <div className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </div>
            <div className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </div>
            <div className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </div>
            <div className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </div>
            <div className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </div>
            <div className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </div>
            <div className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </div>
            <div className="project">
              <ProjectThumbnail></ProjectThumbnail>
            </div>
          </div>
        </Container>
        </section>
      </section>
    );
  }
}

export default WorkPage;
