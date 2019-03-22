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
import Transition from 'react-transition-group/Transition';


const duration = 1000;



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

  

  animateProjectImages = () => {
    document.querySelectorAll(".project-images img").forEach((el, i) => {
      if(i == 0) {
        el.classList.add("pop-in");
      }

      if(el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) * .666) {
        el.classList.add("pop-in");
      }
    })
  }

  componentDidMount() {
    setTimeout(() => {
      document.addEventListener("scroll", this.animateProjectImages)
      this.animateProjectImages();
    }, 1000);

    this.animateProjectImages();

    document.querySelectorAll(".project-images img").forEach((el, i) => {
      el.classList.remove("pop-in");
    })
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
          <div className="drop-down">
            <ul style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
              <li className="list-row" onClick={this.revealDropDown} style={{alignSelf: "flex-start"}}>                
                <div style={{color: "#999" }} className="share-icon plus">
                    <Icon icon={iosPlusEmpty} size="31" />
                </div>
                <p className="light p-info-button text-grey drop-down--label">Project Information</p>
              </li>
            </ul>
          </div>
          <div className="project-description--inner">
            <article className="text-grey project-content" dangerouslySetInnerHTML={{__html: content.rendered}}>
            </article>
            <div></div>
            <article className="service-list">
              <p className="text-grey light">Core Services</p>
              <ul className="text-grey">
                {services.map((service, i) => <li key={i}>{service.service_item}</li>)}
              </ul>
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
    return (
      <div>
        <div className="project-top-information">
          <Row>
            <Col xs={12} sm={8}>
              <p className="light text-white post-location" style={{marginTop: "-1rem"}}>
                {projectInfo.acf.location}
              </p>
            </Col>
          </Row>
          <div className="single-project-banner-description">
            <div className="padding-top-5">
                {this.getDropDown(projectInfo.acf.services, projectInfo.content)}
            </div>
          </div>
        </div>
        <div className="project-images">
          {projectInfo.acf.images.map((image, i) => {
            return(
              <div className="padding-top-15" key={`${projectInfo.id}-${i}`}>
            
                {image.banner_image ?  <div className={`single-project-banner`}><img src={image.banner_image} className={i === 0 ? "pop-in" : ""}  alt={projectInfo.title.rendered} /></div> : ""}                  
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
      </div>
    )
  }

  loadNextProject = (project) => {
    const { history } = this.props;
    let pContainer = document.querySelector(".project-container");
    pContainer.classList.add("fade-out");
    let header = document.querySelector(".next-project-header");
    header.classList.add("flip-out");

    setTimeout(() => {
      history.push(`/work/${project.slug}`);
    }, 400);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.animateProjectImages);
    document.querySelectorAll(".project-images img").forEach((el, i) => {
        el.classList.remove("pop-in");
    })
  }

  render() {
    const { match } = this.props;
    const { projects } = this.context;
    let project = [];
    let index = null;
    if(projects.length) {
      project = projects.filter(project => project.slug === match.params.id);
      index = projects.findIndex(project => project.slug === match.params.id) + 1;
      index >= projects.length ? index = 0 : index = index;
    }
    

    return (
      <ProjectsContext.Consumer>
      {({ projects }) => (
        <div className={"work-page-single " + this.getBodyClass()}>
          <div className="project-container">
            <WorkPageHeader projectTitle={project.length ? project[0].title.rendered : ""} isUpdate={this.props.isUpdate}></WorkPageHeader>
            <section id="project-content" className={this.getBodyClass()}>
              <Container className="container" fluid={true} style={{padding: 0}}>
                { this.getProjectPost(project) }
              </Container>
            </section>
          </div>

          {/* Header for 'Next Project' */}
          {
          projects.length ? 
            <Container className="container" fluid={true} style={{padding: 0, position: "static !important"}}>
              <div className="next-project-header padding-top-7 padding-btm-7" onClick={() => this.loadNextProject(projects[index])}>
                <p className="text-red reg next-project-link">Next Project</p>
                <div className="title-row padding-top-175">
                  <div className="side">
                    <h1 className="reg project-title light text-white">
                      {projects[index] ? projects[index].title.rendered : projects[0].title.rendered}
                    </h1>
                    <p className="light text-white project-location">
                      {projects[index] ? projects[index].acf.location : projects[0].acf.location}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
            :
            <div></div>
          }
        </div>
      )}
      </ProjectsContext.Consumer>
    );
  }
}

WorkPageSingle.contextType = ProjectsContext;

export default WorkPageSingle;
