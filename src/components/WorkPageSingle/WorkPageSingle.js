import React, { Component } from 'react';
import WorkPageHeader from '../WorkPageHeader/WorkPageHeader';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';
import './WorkPageSingle.css';
import Button from '../Button/Button';

class WorkPageSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    }
  }
  async componentDidMount() {
    const content = await this.getPostContent();
    console.log(content);
    this.setState({post: content.data.posts.edges[0].node})

    document.addEventListener("scroll", this.handleScroll);
  }
  
  async getPostContent(id) {
    let reqData = {
      "query": `{ 
        posts {
          edges {
            node {
              id
              title
              date
              author {
                id
                name
                username
                description
              }
            }
          }
        } 
      }`
    }

    let res = await fetch("https://api.piscatello.space/graphql", {
      method: "POST",
      mode: "cors",
      cache: "default",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(reqData)
    }).then(response => response.json());

    return res;
  }

  render() {
    return (
      <div className="work-page-single">
        <WorkPageHeader projectTitle="Nomadx"></WorkPageHeader>
        <section id="project-content">
          <Container className="container" fluid={true} style={{padding: 0}}>
            <Row>
              <Col xs={12} sm={8}>
                <h3 className="light reg text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
                  sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
                  vel purus quis, pretium feugiat odio.
                </h3>
              </Col>
            </Row>
            <div className="single-project-banner">
              <img src="http://piscatello.com/wp-content/uploads/2018/09/NomadX-1.jpg" alt="Nomadx"/>
            </div>
            <div className="single-project-banner-description">
              <Row>
                <Col xs={12} sm={6}>
                  <h2 className="light text-grey padding-top-15">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
                  sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
                  vel purus quis, pretium feugiat odio. Aliquam erat neque, dapibus 
                  id molestie nec, gravida vel erat. Phasellus imperdiet fermentum felis, non viverra 
                  erat efficitur eu. Nulla interdum elementum posuere. Donec iaculis metus 
                  ac dignissim ornare. Donec arcu mauris, vehicula a mollis non, bibendum non augue.
                  </h2>
                </Col>
              </Row>
            </div>
            <div className="single-project-grid">
              <div className="item">
                <img src="http://piscatello.com/wp-content/uploads/2018/09/NomadX-2.jpg" alt="Color Guide" />
              </div>
              <div className="item">
                <img src="http://piscatello.com/wp-content/uploads/2018/09/Nomadx_Type.jpg" alt="Color Guide" />
              </div>
              <div className="item">
                <img src="http://piscatello.com/wp-content/uploads/2018/09/NomadX-5.jpg" alt="letterhead" />
              </div>
              <div className="item">
                <img src="http://piscatello.com/wp-content/uploads/2018/09/NomadX-6.jpg" alt="tote" />
              </div>
            </div>
          </Container>
        </section>
        <Container className="container" fluid={true} style={{padding: 0}}>
          <h4 className="text-red padding-top-5">Next Project</h4>
        </Container>
        <WorkPageHeader projectTitle="Fashionhaus"></WorkPageHeader>
          <Container className="container" fluid={true} style={{padding: 0}}>
            <Row>
              <Col xs={12} sm={8}>
                <h3 className="light reg text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
                  sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
                  vel purus quis, pretium feugiat odio.
                </h3>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default WorkPageSingle;
