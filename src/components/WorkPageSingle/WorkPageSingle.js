import React, { Component } from 'react';
import WorkPageHeader from '../WorkPageHeader/WorkPageHeader';
import { Container, Row, Col } from 'react-grid-system';
import '../../App.css';
import './WorkPageSingle.css';
import Reveal from 'react-reveal/Reveal';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import Icon from 'react-icons-kit';
import {iosPlusEmpty} from 'react-icons-kit/ionicons/iosPlusEmpty';
import { ProjectsContext } from "../../ProjectsContext";



class WorkPageSingle extends Component {
  constructor(props) {
    super(props);
    this.newProject = React.createRef();
    this.timeout = null;

    this.state = {
      post: null,
      transition: false,
      projectTitle: !this.props.isUpdate ? "Nomadx Solutions" : "Rocco Piscatello to speak at the University of New Haven",
      project: {}
    }
  }

  async componentDidMount() {
    this.styleBlack();    
  }

  styleBlack = () => {
    document.querySelector("header").classList.remove("white-bg");
    document.querySelector("header").classList.add("black-bg");
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


  revealDropDown = () => {
    document.querySelector(".drop-down").classList.toggle("open");
  }

  getDropDown(services = [], content) {
    return(
      <div> 
          <div className="drop-down" onClick={this.revealDropDown}>
            <ul>
              <li className="list-row">                
                <div style={{color: "#FFF" }} className="share-icon plus">
                    <Icon icon={iosPlusEmpty} size="31" />
                </div>
                <span className="light p-info-button text-white drop-down--label">Project Information</span>
              </li>
            </ul>
          </div>
          <div className="project-description--inner">
            <article className="service-list">
              <h2 className="text-grey light">Services</h2>
              <ul className="text-grey">
                {services.map((service, i) => <li key={i}>{service.service_item}</li>)}
              </ul>
            </article>
            <article className="text-white" dangerouslySetInnerHTML={{__html: content.rendered}}>
            </article>
          </div>
      </div>
    )
  }

  
  getProjectPost(project) {
    if(!project.length) {
      return(
        <div></div>
      )
    }

    let projectInfo = project[0];
    console.log(projectInfo);
    return (
      <div>
        <Row>
          <Col xs={12} sm={8}>
            <h2 className="light text-grey" style={{marginTop: "-1rem"}}>
              {projectInfo.acf.location}
            </h2>
          </Col>
        </Row>
        <div className="single-project-banner-description">
          <div className="padding-top-5">
              {this.getDropDown(projectInfo.acf.services, projectInfo.content)}
          </div>
        </div>
        {projectInfo.acf.images.map((image, i) => {
          return(
            <div className="padding-top-15" key={i}>
          
              {image.banner_image ?  <div className="single-project-banner"><img src={image.banner_image} alt={projectInfo.title.rendered} /></div> : ""}                  
              {image["square_image_#1"]
              ?
              <div className="single-project-grid">
                <div className="item">
                  {image["square_image_#1"] ? <img src={image["square_image_#1"]} alt={projectInfo.title.rendered} /> : ""}                  
                </div>
                <div className="item">
                  {image["square_image_#2"] ? <img src={image["square_image_#2"]} alt={projectInfo.title.rendered} /> : ""}                  
                </div>
              </div>
              :
              ""
              }
            </div>
          )
        })}
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
    const { match } = this.props;
    const { projects } = this.context;
    let project = [];
    if(projects.length) {
      project = projects.filter(project => project.slug === match.params.id);
    }

    return (
      <ProjectsContext.Consumer>
      {({ projects }) => (
        <div className={"work-page-single " + this.getBodyClass()}>
          <div className="project-container" style={{opacity: this.state.transition ? 0 : 1}}>
            <WorkPageHeader projectTitle={project.length ? project[0].title.rendered : ""} isUpdate={this.props.isUpdate}></WorkPageHeader>
            <section id="project-content" className={this.getBodyClass()}>
              <Container className="container" fluid={true} style={{padding: 0}}>
                { this.getProjectPost(project) }
              </Container>
            </section>
          </div>
        </div>
      )}
      </ProjectsContext.Consumer>
    );
  }
}

WorkPageSingle.contextType = ProjectsContext;

export default WorkPageSingle;
