import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import '../../App.css';
import './WorkPage.css';

class WorkPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="transition-page" id="page-work">
        <Container fluid={true} className="container" style={{padding: 0, background: "#000"}}>
          <h2 className="reg text-white text-bold padding-top-6">
            Brand Identity
          </h2>
          <div className="option-list text-white">
            <span className="filter-option">All</span>
            <span className="filter-option">Brand Identities</span>
            <span className="filter-option">Digital Expiriences</span>
            <span className="filter-option">Signage Programs</span>
          </div>
        </Container>
        <section id="work-list">
        <Container fluid={true} className="container" style={{padding: 0}}>
          <div className="image-grid-row">
            <Link to="/work/digital/test-project" className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </Link>
            <div className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </div>
            <div className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </div>
            <div className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </div>
            <div className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </div>
            <div className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </div>
            <div className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </div>
            <div className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </div>
            <div className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </div>
            <div className="project">
              <div className="image-holder">
                <img src="https://s3.amazonaws.com/piscatello/Large/AEA_EquityWorks.jpg"/>
              </div>
              <article>
                <h3>Equity Works</h3>
                <h3 className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              </article>
            </div>
          </div>
        </Container>
        </section>
      </section>
    );
  }
}

export default WorkPage;
