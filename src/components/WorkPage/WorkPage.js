import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import Fade from 'react-reveal/Reveal';
import Filter from "../Filter/Filter";
import { WorkContext, Pages } from "./Pages";
import {ProjectsContext} from "../../ProjectsContext";

/* @CSS */

import '../../App.css';
import './WorkPage.css';

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
  
  componentDidMount() {
    setTimeout(() => this.styleWhite(), 1000);
    this.setState({"pageDescription": Pages["all"].description})
  }


  styleWhite = () => {
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

  renderProjects = (projects) => {
    if(this.state.filter && this.state.filter.title !== "All") {
      projects = projects.filter((el) => {
        const categories = el._embedded["wp:term"][0];
        let result = false;
        for (let i = 0; i < categories.length; i++) {
          if (categories[i].name === this.state.filter.title) {
            result = true;
            break;
          }
        }
        return result;
      })
    }

    const template = projects.map((el) => (
        <ProjectContainer project={el} key={el.id} />
    ))

    return template;
  }

  componentWillUnmount() {
    document.querySelector("header").classList.remove("white-bg");
    document.removeEventListener("scroll", this.addShadow);
  }

  render() {
    return (
      <section className="transition-page" id="page-work">
        <Container fluid={true} className="container" style={{padding: 0, background: "#FFF"}}>
          <Row className="top-text-mobile">
            <Col xs={12} sm={10} md={9} lg={9}>
              <h1 className={"reg lighter text-black animate"}>
                Design in every discipline, that lasts.
              </h1>
            </Col>
          </Row>
        </Container>
        <section id="work-list">
          <div id="project-list">
            <Container fluid={true} className="container" style={{padding: 0}}>
                <WorkContext.Provider value={this.state}>
                  <Filter />
                </WorkContext.Provider>
              <ProjectsContext.Consumer>
                {({ projects }) => (
                  <div className="project-grid">
                      {this.renderProjects(projects)}
                  </div>
                )}
              </ProjectsContext.Consumer>
            </Container>
          </div>
          
        </section>
      </section>
    );
  }
}


export { WorkContext };
export default WorkPage;
