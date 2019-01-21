import React, { Component } from 'react';

import './Practice.css';
import { Container } from 'react-grid-system';
import { Link } from "react-router-dom";
import HoverLink from "../HoverLink/HoverLink";

class PracticePage extends Component {
  render() {
    return (
      <div className="page-practice">
        <Container style={{padding: 0}} fluid={true} className="container">
          <div className="top-text">
            <h3 className="reg text-black text-bold">About Us</h3>
            <h3 className="reg text-grey light padding-top-2">
                For nearly 25 years, we have specialized in designing 
                and developing brand identities signage programs, and
                digital experiences for clients and cities worldwide.
              </h3>
              <h3 className="reg text-grey light padding-top-2">
              Our work takes place at the intersection of business objectives, 
              brand objectives and user goals. We specialize in developing brand identities, 
              environmental signage, and digital interactions.
            </h3>
          </div>

          <div className="banner-image padding-top-5">
            <video loop={true} muted controls={false} autoPlay={true} style={{width: "100%", display: "block"}}>
              <source src="https://s3.amazonaws.com/piscatello/Practice+Page+Animation+2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="top-text padding-top-5">
            <h3 className="reg text-grey light">
              Our team is composed of experienced strategists, designers and communicators. 
              Each member is responsible for delivering actionable guidance for our clients and a high level of creativity.
              <br/><br/>
              Our greatest differentiator is our investment and dedication to the projects we are involved in.
            </h3>
          </div>
          <div className="image-grid-2 padding-top-5">
            <div className="image-container">
              <img src="https://s3.amazonaws.com/piscatello/DSC_4375.jpg" />
            </div>
            <div className="image-container">
              <img src="http://piscatello.com/wp-content/themes/pdc/images/studio_people.jpg" />
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
