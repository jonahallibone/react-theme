import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';
import './WorkPage.css';

class WorkPage extends Component {
  render() {
    return (
      <section className="transition-page" id="page-work">
        <Container fluid={true} className="container" style={{padding: 0, background: "#000"}}>
          <h2 className="reg light-white">Work</h2>
          <h2 className="light-white padding-top-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
          Vestibulum gravida hendrerit ipsum, quis accumsan magna mollis at.<br/>
          Morbi at mi aliquet, tincidunt nunc et, vulputate turpis.
          </h2>
        </Container>
        <section id="work-list">
        <Container fluid={true} className="container" style={{padding: 0}}>
          <div>
            <div className="filter-box">
              <h2>
                Filter by
                <span className="dropdown">All</span>
              </h2>
            </div>
          </div>
          <div className="image-grid-row">
            <div className="image-holder">
              <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
            </div>
            <div className="image-holder">
              <img src="https://s3.amazonaws.com/piscatello/Small/DW06.jpg"/>
            </div>
            <div className="image-holder">
              <img src="https://s3.amazonaws.com/piscatello/Small/DesignAtWork_Horiz.jpg"/>
            </div>
          </div>
          <div className="image-grid-row reverse">
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
          </div>
          <div className="image-grid-row">
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
          </div>
          <div className="image-grid-row reverse">
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
          </div><div className="image-grid-row">
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
          </div>
          <div className="image-grid-row reverse">
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
            <div className="image-holder">
            </div>
          </div>
        </Container>
        </section>
      </section>
    );
  }
}

export default WorkPage;
