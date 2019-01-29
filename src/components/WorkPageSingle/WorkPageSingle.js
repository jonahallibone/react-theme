import React, { Component } from 'react';
import WorkPageHeader from '../WorkPageHeader/WorkPageHeader';
import { Container, Row, Col } from 'react-grid-system';
import { projects } from "../WorkPage/WorkPage";
import '../../App.css';
import './WorkPageSingle.css';
import Reveal from 'react-reveal/Reveal';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import Icon from 'react-icons-kit';
import {iosPlusEmpty} from 'react-icons-kit/ionicons/iosPlusEmpty';

class WorkPageSingle extends Component {
  constructor(props) {
    super(props);
    this.newProject = React.createRef();
    this.timeout = null;

    this.state = {
      post: null,
      transition: false,
      projects: projects,
      projectTitle: !this.props.isUpdate ? "Nomadx Solutions" : "Rocco Piscatello to speak at the University of New Haven"
    }
  }
  async componentDidMount() {
    this.styleBlack();
    const content = await this.getPostContent();
    console.log(content);
    this.setState({post: content.data.posts.edges[0].node})
    document.addEventListener("scroll", this.handleScroll);
  }

  styleBlack = () => {
    document.querySelector("header").classList.remove("white-bg");
    document.querySelector("header").classList.add("black-bg");
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

  revealDropDown = () => {
    document.querySelector(".drop-down").classList.toggle("open");
  }

  getDropDown() {
    return(
      <div> 
          <div className="drop-down" onClick={this.revealDropDown}>
            <ul>
              <li className="list-row">                
                <div style={{color: "#FFF" }} className="share-icon plus">
                    <Icon icon={iosPlusEmpty} size="31" />
                </div>
                <h2 className="light text-white drop-down--label">Project Information</h2>
              </li>
            </ul>
          </div>
          <div className="project-description--inner">
            <article className="service-list">
              <h2 className="text-grey light">Services</h2>
              <ul className="text-grey">
                <li>Identity Design</li>
                <li>Identity System Development</li>
                <li>Print Collateral</li>
                <li>Stationary Program</li>
                <li> Website Design</li>
              </ul>
            </article>
            <article className="text-white">
              <p>
                Nomadx Solutions provides risk management services for trustees and other fiduciaries. 
                Our team worked to develop a mark that embodies the trustworthy, sophisticated, and 
                creative nature of the company.
              </p>
              <p>
                The logo our team created conveys both integrity and confidence through thick, 
                solid lines and a bold sans serif typeface. The diagonal cut through the square 
                is implies the Nomadx ‘N’ and creates an upward pointing arrow, suggesting growth 
                and innovation.
              </p>
              <p>
                Our design program included a brand identity system, logotype, color scheme and 
                typography, as well as several identity applications including a stationery system, forms, 
                website, and other communication identifiers.
              </p>
            </article>
          </div>
      </div>
    )
  }

  
  getProjectPost() {
    return(
      <div>
        <Row>
          <Col xs={12} sm={8}>
            <h2 className="light text-grey" style={{marginTop: "-1rem"}}>
              Denver, Colorado
            </h2>
          </Col>
        </Row>
        <div className="single-project-banner-description">
          <div className="padding-top-5">
              {this.getDropDown()}
          </div>
        </div>
        <div className="single-project-banner">
            <img src="http://piscatello.com/wp-content/uploads/2018/09/NomadX-1.jpg" alt="Nomadx"/> 
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

  renderProjects = () => {
    const template = this.state.projects.map((el, i) => (
      <Reveal effect="fadeInUp">
        <ProjectContainer project={el} key={i} />
      </Reveal>
    ))

    return template;
  }

  render() {
    return (
      <div className={"work-page-single " + this.getBodyClass()}>
        <div className="project-container" style={{opacity: this.state.transition ? 0 : 1}}>
          <WorkPageHeader projectTitle={this.state.projectTitle} isUpdate={this.props.isUpdate}></WorkPageHeader>
          <section id="project-content" className={this.getBodyClass()}>
            <Container className="container" fluid={true} style={{padding: 0}}>
               {this.getProjectPost()}
            </Container>
          </section>
        </div>
        <section id="work-list" style={{paddingTop: "2rem"}}>
          <div id="project-list">
            <Container fluid={true} className="container" style={{padding: 0}}>
              <div className="project-grid">
                  {this.renderProjects()}
              </div>
            </Container>
          </div>
        </section>
      </div>
    );
  }
}

export default WorkPageSingle;
