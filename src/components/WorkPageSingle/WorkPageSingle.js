import React, { Component } from 'react';
import WorkPageHeader from '../WorkPageHeader/WorkPageHeader';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';
import './WorkPageSingle.css';

class WorkPageSingle extends Component {
  constructor(props) {
    super(props);
    this.newProject = React.createRef();
    this.timeout = null;

    this.state = {
      post: null,
      transition: false,
      projectTitle: !this.props.isUpdate ? "Nomadx Solutions" : "Rocco Piscatello to speak at the University of New Haven"
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

  getBodyClass() {
    if(this.props.isUpdate === true) {
      return "bg-dark-grey";
    }

    else return "";
  }

  getProjectTitle() {
    return (this.props.isUpdate ? "Reflections on Ten Qualities of Design" : "Nomadx");
  }

  loadNext = () => {
    // window.history.pushState(12, "/work/newwork")
    this.setState({transition: true});

    console.log(this.newProject);

    let boundingRect = this.newProject.current.getBoundingClientRect();

    
    this.newProject.current.style.transform = `translateY(-${boundingRect.top - 115}px)`
    
    this.timeout = setTimeout(() => {
      this.setState({projectTitle: "Fashionhaus"})
      document.querySelector("#featured-header").classList.remove(".shrink");
    },345)

    this.timeout = setTimeout(() => {
      window.scrollTo(0,0)
      this.newProject.current.style.transform = `translateY(0)`
      this.setState({transition: false})
    },1000)
  }

  
  getProjectPost() {
    return(
      <div>
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
            <Col xs={12} sm={8} md={6}>
              <h2 className="light text-grey padding-top-15 padding-btm-5">
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
      </div>
    )
  }

  getUpdatePost() {
    return(
      <div>
        <Row>
          <Col xs={12} sm={8}>
            <h3 className="light reg text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
              sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
              vel purus quis, pretium feugiat odio.
            </h3>
          </Col>
        </Row>
        <div className="single-project-grid padding-top-5">
          <div className="item">
            <img src="https://s3.amazonaws.com/piscatello/RoccoPiscatello_NewHaven_1.jpg" alt="Color Guide" />
          </div>
          <div className="item">
            <img src="https://s3.amazonaws.com/piscatello/RoccoPiscatello_NewHaven_2.jpg" alt="letterhead" />
          </div>
          <div className="item" style={{backgroundColor: 'transparent'}}>
            <h2 className="light text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
              sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
              vel purus quis, pretium feugiat odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
              sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
              vel purus quis, pretium feugiat odio. Lorem ipsum dolor sit amet.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
              sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
              vel purus quis, pretium feugiat odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
              sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
              vel purus quis, pretium feugiat odio. Lorem ipsum dolor sit amet.
            </h2>
          </div>
          <div className="item" style={{backgroundColor: 'transparent'}}>
            <h2 className="light text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
              sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
              vel purus quis, pretium feugiat odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, 
              sagittis non tortor vel, dapibus blandit dolor. Nam velit sapien, bibendum 
              vel purus quis, pretium feugiat odio. Lorem ipsum dolor sit amet.
            </h2>
          </div>
          <div className="item">
            <img src="https://s3.amazonaws.com/piscatello/rpINSTA+copy.jpg" alt="Color Guide" />
          </div>
          
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={"work-page-single " + this.getBodyClass()}>
        <div className="project-container" style={{opacity: this.state.transition ? 0 : 1}}>
          <WorkPageHeader projectTitle={this.state.projectTitle} isUpdate={this.props.isUpdate}></WorkPageHeader>
          <section id="project-content" className={this.getBodyClass()}>
            <Container className="container" fluid={true} style={{padding: 0}}>
              {this.props.isUpdate ? this.getUpdatePost() : this.getProjectPost()}
            </Container>
          </section>
        </div>
        <div className="new-project-link" ref={this.newProject} onClick={this.loadNext}>
          <Container className="container" fluid={true} style={{padding: 0}}>
              <h4 className="text-red padding-top-5" style={{opacity: this.state.transition ? 0 : 1}}>{this.props.isUpdate ? "Next Update" : "Next Project"}</h4>
          </Container>
          <WorkPageHeader projectTitle="Fashionhaus" isUpdate={this.props.isUpdate}></WorkPageHeader>
          <Container className="container" fluid={true} style={{padding: 0}}>
            <Row className="">
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
      </div>
    );
  }
}

export default WorkPageSingle;
