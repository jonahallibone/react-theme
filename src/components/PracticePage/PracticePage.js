import React, { Component } from 'react';

import './Practice.css';
import { Container } from 'react-grid-system';

class PracticePage extends Component {
  render() {
    return (
      <div className="page-practice">
        <Container style={{padding: 0}} fluid={true} className="container">
          <div className="top-text">
            <h3 className="reg text-black text-bold">About Us</h3>
            <h3 className="reg text-grey light padding-top-2">
              We are an independent multidisciplinary design consultancy.
              Our work takes place at the intersection of business goals, brand objectives and user intent.
              </h3>
              <h3 className="reg text-grey light padding-top-2">
              We specialize in developing memorable 
              brand identities, connections between people and place, and 
              intelligent-meaningful interactions.
            </h3>
          </div>

          <div className="banner-image padding-top-5">
            <img src="https://s3.amazonaws.com/piscatello/placeholder.jpg"/>
          </div>

          <div className="top-text padding-top-5">
            <h3 className="reg text-grey light">
            Our team is composed of experienced strategists, designers and communicators. Each member is 
            responsible for delivering actionable guidance for our clients and a high level of creativity.
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
                Prior to founding Piscatello Design Centre, Piscatello was a designer at Vignelli Associates. In his time there he worked on brand identities including United Colors of Benetton, Ducati Motors and Warner Bros.
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
          </Container> 
        </div>
      </div>
    );
  }
}

export default PracticePage;
