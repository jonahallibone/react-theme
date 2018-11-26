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
          <h3 className="reg light-white padding-top-6">
          Our clients are diverse and range from large and small, <br/>private and public, for-profit and non-profit.
          </h3>
        </Container>
        <section id="work-list">
        <Container fluid={true} className="container" style={{padding: 0}}>
          <div className="image-grid-row">
            <Link to="/work/test" className="project">
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
