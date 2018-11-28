import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import '../../App.css';
import './WorkPage.css';

class WorkPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: null,
      pageDescription: null
    }

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
        title: "Digital Expiriences",
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
  }

  render() {
    return (
      <section className="transition-page" id="page-work">
        <Container fluid={true} className="container" style={{padding: 0, background: "#000"}}>
          <h3 className="reg text-bold text-white padding-top-4 text-capitalize">{this.state.pageTitle}</h3>
          <Row>
            <Col xs={6}>
              <h3 className="reg light-white padding-top-2">
                {this.state.pageDescription}
              </h3>
            </Col>
          </Row>
          <div className="option-list text-red">
            <span className="filter-option"><Link to="/work/">All Work</Link></span>
            <span className="filter-option"><Link to="/work/brand/">Brand Identities</Link></span>
            <span className="filter-option"><Link to="/work/digital">Digital Experiences</Link></span>
            <span className="filter-option"><Link to="/work/signage">Signage Programs</Link></span>
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
