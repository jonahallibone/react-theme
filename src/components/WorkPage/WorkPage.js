import React, { Component, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import Filter from "../Filter/Filter";
import { WorkContext, Pages } from "./Pages";
import {ProjectsContext} from "../../ProjectsContext";
import CSSAnimate from "../CSSAnimate/CSSAnimate";
/* @CSS */

import '../../App.css';
import './WorkPage.css';

const WorkPage = () => {

  const [filter, setFilter] = useState(Pages["all projects"]);

  const setFilterKey = filter => {
    setTimeout(() => {
      setFilter(Pages[filter])
    }, 600)
  };

  const contextState = {
    setFilter: setFilterKey,
    filter: filter
  }

  const renderProjects = (projects) => {
    if(filter && filter.title !== "All Projects") {
      let tmp = projects;
      projects = [];
      projects = tmp.filter((el) => {
        const categories = el._embedded["wp:term"][0];
        let result = false;
        for (let i = 0; i < categories.length; i++) {
          if (categories[i].name === filter.title) {
            result = true;
            break;
          }
        }
        return result;
      })
    }

    const template = projects.map((el, i) => (
        <ProjectContainer project={el} filter={filter.title} index={i} key={`${filter.title}-${el.id}`} />
    ))

    return template;
  }

  return (
    <section className="transition-page" id="page-work">
      <Container fluid={true} className="container" style={{padding: 0, background: "#FFF"}}>
        <Row className="top-text top-text-mobile">
          <CSSAnimate key="i" delay="1000">
            <Col>
            <h1 className={"reg lighter text-black animate"}>
              Thoughtful design in every discipline to ensure your communication needs are met.
            </h1>
            </Col>
          </CSSAnimate>
        </Row>
      </Container>
      <section id="work-list">
        <div id="project-list">
          <Container fluid={true} className="container" style={{padding: 0}}>
              <WorkContext.Provider value={contextState}>
                <Filter />
              </WorkContext.Provider>
            <ProjectsContext.Consumer>
              {({ projects }) => (
                <div className="project-grid">
                    {renderProjects(projects)}
                </div>
              )}
            </ProjectsContext.Consumer>
          </Container>
        </div>
        
      </section>
    </section>
  );
}


export { WorkContext };
export default WorkPage;