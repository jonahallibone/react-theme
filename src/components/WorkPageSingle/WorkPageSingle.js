import React, { useEffect, useContext } from 'react';
import WorkPageHeader from '../WorkPageHeader/WorkPageHeader';
import { Container, Row, Col } from 'react-grid-system';
import '../../App.css';
import './WorkPageSingle.css';
import Icon from 'react-icons-kit';
import {iosPlusEmpty} from 'react-icons-kit/ionicons/iosPlusEmpty';
import { ProjectsContext } from "../../ProjectsContext";

const DotsIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="color" xmlns="http://www.w3.org/2000/svg">
      <rect width="5.79866" height="5.79866" fill="inherit"/>
      <rect x="10.2014" width="5.79866" height="5.79866" fill="inherit"/>
      <rect x="10.2014" y="10.2013" width="5.79866" height="5.79866" fill="inherit"/>
      <rect y="10.2013" width="5.79866" height="5.79866" fill="inherit"/>
    </svg>
  )
}
const WorkPageSingle = ({...props}) => {

  const animateProjectImages = () => {
    document.querySelectorAll(".project-images img").forEach((el, i) => {
      if(i == 0) {
        el.classList.add("pop-in");
      }

      if(el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) * .666) {
        el.classList.add("pop-in");
      }
    })
  }

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("scroll", animateProjectImages)
      animateProjectImages();
    }, 1000);

    animateProjectImages();

    document.querySelectorAll(".project-images img").forEach((el, i) => {
      el.classList.remove("pop-in");
    })

    return () => {
      document.removeEventListener("scroll", animateProjectImages);
      document.querySelectorAll(".project-images img").forEach((el, i) => {
        el.classList.remove("pop-in");
      })
    }
  }, []);

  const getBodyClass = () => {
    if(props.isUpdate === true) {
      return "bg-dark-grey";
    }

    else return "";
  }

  const revealDropDown = () => {
    document.querySelector(".drop-down").classList.toggle("open");
  }

  const getDropDown = (services = [], content) => {
    return(
      <div> 
          <div className="drop-down">
            <ul style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
              <li className="list-row" onClick={revealDropDown} style={{alignSelf: "flex-start"}}>                
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

  
  const getProjectPost = (project) => {
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
                {getDropDown(projectInfo.acf.services, projectInfo.content)}
            </div>
          </div>
        </div>
        <div className="project-images">
          {projectInfo.acf.images.map((image, i) => {
            return(
              <div className="padding-top-15" key={`${projectInfo.id}-${i}`}>
            
                {image.banner_image 
                ?  
                <div className={`single-project-banner`}>
                  {image.banner_video === "yes"
                  ? 
                    <video style={{width: "100%"}} className={i === 0 ? "pop-in" : ""} autoPlay muted loop alt={projectInfo.title.rendered}>
                      <source src={image.banner_image} type="video/mp4" />
                    </video>
                  :
                    <img src={image.banner_image} className={i === 0 ? "pop-in" : ""}  alt={projectInfo.title.rendered} />
                  }
                </div> 
                
                : 
                
                ""}      
                            
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

  const loadNextProject = (project) => {
    const { history } = props;
    let pContainer = document.querySelector(".project-container");
    pContainer.classList.add("fade-out");
    let header = document.querySelector(".next-project-header");
    header.classList.add("flip-out");

    setTimeout(() => {
      history.push(`/work/${project.slug}`);
    }, 400);
  }


  const { match } = props;
  const { projects } = useContext(ProjectsContext);
  let project = [];
  let index = null;

  const toWorkPage = () => {
    console.log("POOP");
    const { history } = props; 

    history.push("/work");
  }

  if(projects.length) {
    project = projects.filter(project => project.slug === match.params.id);
    index = projects.findIndex(project => project.slug === match.params.id) + 1;
    index >= projects.length ? index = 0 : index = index;
  }
    

  return (
    <ProjectsContext.Consumer>
    {({ projects }) => (
      <div className={"work-page-single " + getBodyClass()}>
        <div className="project-container">
          <WorkPageHeader projectTitle={project.length ? project[0].title.rendered : ""} isUpdate={props.isUpdate}></WorkPageHeader>
          <section id="project-content" className={getBodyClass()}>
            <Container className="container" fluid={true} style={{padding: 0}}>
              { getProjectPost(project) }
            </Container>
          </section>
        </div>

        {/* Header for 'Next Project' */}
        {
        projects.length ? 
          <Container className="container next-project-container" fluid={true} style={{padding: 0, position: "static !important"}}>
            <div className="next-project-header padding-top-7 padding-btm-7" onClick={() => loadNextProject(projects[index])}>
              <p className="text-red reg next-project-link">
                Next Project
              </p>
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
            <p className="back-to-grid reg" onClick={toWorkPage}>
                See All Projects
                <DotsIcon />
            </p>
          </Container>
          :
          <div></div>
        }
      </div>
    )}
    </ProjectsContext.Consumer>
  );
}

export default WorkPageSingle;
