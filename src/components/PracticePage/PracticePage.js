import React, { Component } from 'react';

import './Practice.css';
import { Container } from 'react-grid-system';
import { styler, tween, easing } from 'popmotion'
import { interpolate } from "flubber";
import Fade from 'react-reveal/Fade';

const triangle = "M144 0L287.76 249H0.239777L144 0Z";
const circle = "M0,127.5a127.5,127.5 0 1,0 255,0a127.5,127.5 0 1,0 -255,0";
const rect = "M5 5H244V244H5V124.5V5Z"
class PracticePage extends Component {

  constructor(props) {
    super(props)
    this.timeout = null;
    this.video = React.createRef();
    this.morpher = React.createRef();

    this.shape = "";    

    this.currentShape = "";
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);


    
    this.shape = styler(this.morpher.current);
    console.log(this.morpher.current);
    
  }

  setTriangle() {
    tween({
      duration: 500,
      ease: easing.easeInOut,
      flip: 0
    }).pipe(interpolate(rect, triangle, { maxSegmentLength: 2 }))
      .start(this.shape.set('d'));
  }

  setSquare() {
    if(this.currentShape == "triangle") {
      tween({
        duration: 500,
        ease: easing.easeInOut,
        flip: 0
      }).pipe(interpolate(triangle, rect, { maxSegmentLength: 2 }))
        .start(this.shape.set('d'));
    }

    else {
      tween({
        duration: 500,
        ease: easing.easeInOut,
        flip: 0
      }).pipe(interpolate(circle, rect, { maxSegmentLength: 2 }))
        .start(this.shape.set('d'));
    }
    
  }

  setCircle() {
    tween({
      duration: 500,
      ease: easing.easeInOut,
      flip: 0
    }).pipe(interpolate(rect, circle, { maxSegmentLength: 2 }))
      .start(this.shape.set('d'));
  }


  handleScroll = () => {
    let triPos = document.querySelector(".scroll-container").getBoundingClientRect().top;
    let sqPos = document.querySelector(".scroll-container.two").getBoundingClientRect().top;
    let circPos = document.querySelector(".scroll-container:last-of-type").getBoundingClientRect().top;

    
    if(triPos >= 0 && this.currentShape !== "triangle" && this.currentShape=="square") {
      this.setTriangle();
      this.currentShape = "triangle";
      return;
    }

    else if(circPos <= window.outerHeight * .25 && sqPos <= window.outerHeight * .75 && this.currentShape != "circle") {
      this.setCircle();
      this.currentShape = "circle";
      return;
    }
    
    else if(sqPos <= window.outerHeight * .25 && sqPos >=( window.outerHeight * .35) * -1 && this.currentShape !== "square") {
      this.setSquare();
      this.currentShape = "square";
      return;
    }

  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
    // document.body.style.overflow = "auto";
  }
  render() {
    return (
      <div className="page-practice">
        <Container style={{padding: 0}} fluid={true} className="container">
          <div className="top-text">
            <h3 className="reg text-black text-bold">About</h3>
            <h3 className="reg text-grey light padding-top-2">
              Piscatello Design Centre is a New York-based design consultancy 
              that is committed to creating informative and meaningful connections 
              between organizations and people. Our goal is to create memorable brands 
              and places that inspire and delight their audiences.
              </h3>
          </div>

          <div className="animated-scroll-video">
            <div>
              <Fade>
                <div className="scroll-container">
                  <h3 className="reg text-black text-bold">Brand</h3>
                  <h3 className="reg text-grey light padding-top-2">
                      A brand is more than a logo, an identity, or a product. 
                      A brand is a sum of infinite experiences and interactions 
                      that can be felt by consumers, users, and visitors. Every 
                      touchpoint matters-- and we get that. We design with the 
                      concept of brand in mind in order to create timeless solutions 
                      that accommodate growth and change--so a company can develop, 
                      respond, and shift with time.
                  </h3>
                </div>
              </Fade>
              <Fade>
                <div className="scroll-container two">
                  <h3 className="reg text-black text-bold">Communication</h3>
                  <h3 className="reg text-grey light padding-top-2">
                  Communication is at the core of consideration when we begin 
                  the design process. We help to achieve our clients’ 
                  communication goals by analysing , structuring, and planning 
                  solutions that are tailored to their specific purposes. Our 
                  work operates across a growing number of communication channels.
                    </h3>
                </div>
              </Fade>
              <Fade>
                <div className="scroll-container">
                  <h3 className="reg text-black text-bold">People</h3>
                  <h3 className="reg text-grey light padding-top-2">
                  At the touchpoints of the experiences and interactions 
                  that we create are the visitors, users, and consumers 
                  of the companies who hire us. The design solutions that 
                  we arrive at are curated specifically to meet the expectations 
                  of these people.
                    </h3>
                </div>
              </Fade>
            </div>
            <div className="sticky-scroll-container">
            {/* <video controls={false} style={{width: "100%"}} ref={this.video}>
              <source src="https://s3.amazonaws.com/piscatello/Shape-Morph-Practice-Animation.mp4" type="video/mp4"/>
            </video> */}
              <Fade bottom>
                <div className="morpher">
                  <svg viewBox="-22.5 -22.5 350 350" style={{height: "300px", width: "300px"}} preserveAspectRatio="xMidYMid meet" >
                    <path ref={this.morpher} d="M144 0L287.76 249H0.239777L144 0Z" />
                  </svg>
                </div>
              </Fade>
            </div>
          </div>

          <div className="top-text padding-top-5">
            <h3 className="reg text-black text-bold">Team</h3>
            <h3 className="reg text-grey light padding-top-2">
              Our team is composed of experienced strategists, designers, and 
              communicators. Led by principal Rocco Piscatello, each member is 
              responsible for delivering actionable guidance for our clients and 
              a high level of creativity.
              <br/><br/>
              Our greatest differentiator is the commitment we make to every 
              project and our zeal to deliver excellent client services.
            </h3>
          </div>
          <div className="image-grid-2 padding-top-5">
            <div className="image-container">
              <img src="https://s3.amazonaws.com/piscatello/DSC_4375.jpg" />
            </div>
            <div className="image-container">
              <img src="https://s3.amazonaws.com/piscatello/practice-page-empty.jpg" />
            </div>
          </div>
          <div className="image-container padding-top-5">
            <img src="https://s3.amazonaws.com/piscatello/Screen+Shot+2019-01-11+at+2.50.05+PM.png" />
          </div>
        </Container>
        <div className="bottom padding-top-5">
          <Container style={{padding: 0}} fluid={true} className="container">
            <div className="image-grid-2">
              <div className="image-container">
                <h3 className="reg text-bold text-white">Rocco Piscatello</h3>
                <h3 className="reg text-grey light">Principal</h3>
                <h2 className="text-grey light">
                <br/>
                <br/>
                Rocco has over 25 years of experience in solving business challenges with design solutions. The programmes that he creates for his clients are always highly strategic, integrated across multiple platforms and societally responsible. He is passionate about helping companies create great brands, products and services through the power of design.
                <br/>
                <br/>
                His past and present clients include The Robin Hood Foundation, New York University, Ronald McDonald House, Starwood Hotels and Resorts, Jean-Georges Management, Metropolitan Transit Authority, Battery Park City Authority, and United States General Services Administration— to name a few.
                <br/>
                <br/>
                Prior to founding Piscatello Design Centre, Piscatello was a designer at Vignelli Associates. In his time there he worked on brand identities, signage programs, and publications for the United Colors of Benetton, Dale Chihuly, Ducati Motors, Guggenheim Museum and Warner Bros.
                <br/>
                <br/>
                Piscatello also has experience working on signage and wayfinding projects that are responsible for guiding millions of people on a daily basis. Highlighted projects include Grand Central Terminal, Battery Park City Authority Parks Conservancy and the Great North Eastern Railway in England.
                <br/>
                <br/>
                Piscatello’s work has been published and exhibited extensively in the United States, Europe and Asia. He has been cited for excellence by the American Institute of Graphic Arts and Society for Experiential Graphic Design. His work can be found in the permanent collections of the Denver Art Museum and Library of Congress.
                </h2>
              </div>
              <div className="image-container sticky">
                <img src="https://s3.amazonaws.com/piscatello/42496ed13e2a70401707ff27444ad5f31d774397+copy.jpg" />
              </div>
            </div>
            <h3 className="reg text-grey" style={{paddingTop: "10rem"}}>Associates</h3>
            <div className="grid-half">
              <div className="text-white">
              <h2 className="text-grey">Rocco Piscatello</h2>
              <h2 className="text-grey light">Chief Creative Director</h2>
              </div>
              <div className="text-white">
                <h2 className="text-grey">Jonah Allibone</h2>
                <h2 className="text-grey light">Web Development & Design</h2>
              </div>
              <div className="text-white">
                <h2 className="text-grey">Kimberly Piscatello</h2>
                <h2 className="text-grey light">Communications & Operations</h2>
              </div>
              <div className="text-white">
                <h2 className="text-grey">Joshua Kessler</h2>
                <h2 className="text-grey light">Branding, Digital, & Environmental Experiences</h2>
              </div>
              <div className="text-white">
                <h2 className="text-grey">Leandra Tidwell</h2>
                <h2 className="text-grey light">Branding, Digital, & Environmental Experiences</h2>
              </div>
              <div className="text-white">
                <h2 className="text-grey">Josephine Florance</h2>
                <h2 className="text-grey light">Branding, Digital, & Environmental Experiences</h2>
              </div>
            </div>
          </Container> 
        </div>
      </div>
    );
  }
}

export default PracticePage;