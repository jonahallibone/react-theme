import React, { Component } from 'react';

import './Practice.css';
import { Container } from 'react-grid-system';
import { styler, tween, easing } from 'popmotion'
import { interpolate } from "flubber";
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";

// import '../FlickSlider/FlickSlider.css';

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

    const settings = {
      className: "",
      dots: false,
      fade: true,
      cssEase: "ease",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      pauseOnHover: false,
      variableWidth: true,
      vertical: true
    };

    return (
      <div className="page-practice">
        <Container style={{padding: 0}} fluid={true} className="container">
          <div className="top-text">
            <h3 className="reg text-white light padding-top-2">
              Piscatello Design Centre is a New York-based design consultancy that is committed to creating informative and meaningful connections between organizations and people.
            </h3>
          </div>

          <div className="image-grid-2 padding-top-5">
          <Slider {...settings}>
              <img src="http://piscatello.com/wp-content/themes/pdc/images/studio_light.jpg" />
              <img src="http://piscatello.com/wp-content/themes/pdc/images/studio_people.jpg" />
          </Slider>
          <Slider {...settings}>
              <img src="http://piscatello.com/wp-content/themes/pdc/images/studio_light.jpg" />
              <img src="http://piscatello.com/wp-content/themes/pdc/images/studio_people.jpg" />
          </Slider>
          
          </div>

          <div className="animated-scroll-video">
            <div>
            <Fade>
                <div className="scroll-container">
                  <h3 className="reg text-white text-bold">Approach</h3>
                  <h3 className="reg text-grey light padding-top-2">
                    We use design as a vehicle to make meaningful connections between the brands we work with and the people who interact with them. Our projects emphasize this very relationship between brands and users to make organizations stronger and more relevant.
                  </h3>
                </div>
              </Fade>
              <Fade>
                <div className="scroll-container">
                  <h3 className="reg text-white text-bold">Brand</h3>
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
                  <h3 className="reg text-white text-bold">People</h3>
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
                  <h3 className="reg text-white text-bold">Creativity</h3>
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
        </Container>
        <div className="bottom padding-top-5">
          <Container style={{padding: 0}} fluid={true} className="container">
            <div className="image-container">
              <img src="http://piscatello.com/wp-content/themes/pdc/images/client_logos/PDC_ClientLogos_Desktop.svg" />
            </div>
            <div className="image-grid-2">
              <div className="image-container">
                <h3 className="reg text-bold text-white">Rocco Piscatello</h3>
                <h3 className="reg text-grey light">Principal</h3>
                <h2 className="text-grey light">
                <br/>
                <br/>
                Rocco Piscatello is Principal and Creative Director of Piscatello Design Centre. He worked for Vignelli Associates prior to founding Piscatello Design Centre. Piscatello is passionate about working with leaders to help their businesses grow and thrive.
                <br/>
                <br/>
                His past and present clients include the Robin Hood Foundation, New York University, Ronald McDonald House, Ducati Motors, Frank Gehry Partners, Guggenheim Museum, Jean-Georges Management, Starwood Hotels and Resorts, Colorforms, PriceWaterHouseCoopers, United Colors of Benetton, Warner Bros., Metropolitan Transit Authority, and the U.S. General Services Administration.
                <br/>
                <br/>
                Piscatello has been a professor in the Communication Design Pathways Program at the Fashion Institute of Technology since 1994. His book ‘Rocco Piscatello: Poster Works for FIT’ was published in 2017.
                <br/>
                <br/>
                Piscatello has also been cited for excellence by the leading organizations promoting superiority in design. Included are: the American Institute of Graphic Arts and the Society for Experiential Graphic Design.
                <br/>
                <br/>
                His work is included in the permanent collections of the Denver Art Museum, the Vignelli Center for Design Studies, and the Library of Congress.
                </h2>
              </div>
              <div className="image-container sticky">
                <img src="https://s3.amazonaws.com/piscatello/42496ed13e2a70401707ff27444ad5f31d774397+copy.jpg" />
              </div>
            </div>
            <div className="grid-double">
              <div>
                <div className="image-container padding-top-5">
                  <img src="http://piscatello.com/wp-content/themes/pdc/images/studio_people.jpg"/> 
                </div>
              </div>
              <div>
              <div className="grid-half">
                <h3 className="reg text-white" style={{paddingTop: "5rem"}}>Associates</h3>
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
            </div>
            <div className="grid-double">
              
              </div>
              <div className="grid-half">
                <h3 className="reg text-white" >Awards</h3>
                <div className="text-white">
                  <h2 className="text-grey light">AIGA 360</h2>
                  <h2 className="text-grey light">Communication Arts</h2>
                  <h2 className="text-grey light">Good 50X70</h2>
                  <h2 className="text-grey light">Graphic Design USA</h2>
                  <h2 className="text-grey light">Graphis</h2>
                  <h2 className="text-grey light">HOW Magazine</h2>
                  <h2 className="text-grey light">International Poster Biennial</h2>
                  <h2 className="text-grey light">Mohawk Show</h2>
                  <h2 className="text-grey light">La Fondazione NY</h2>
                  <h2 className="text-grey light">Print Magazine</h2>
                  <h2 className="text-grey light">SEGD</h2>
                  <h2 className="text-grey light">Site Inspire</h2>
                  <h2 className="text-grey light">STEP Magazine</h2>
                </div>
              </div>
            </div>
          </Container> 
        </div>
      </div>
    );
  }
}

export default PracticePage;