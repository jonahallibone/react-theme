import React, { Component } from 'react';

import './Practice.css';
import { Container } from 'react-grid-system';
import Slider from "react-slick";
import SimpleTyper from "../SimpleTyper/SimpleTyper";
import HoverLink from "../HoverLink/HoverLink";

class PracticePage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.styleBlack();
        
  }


  styleBlack = () => {
    document.querySelector("header").classList.remove("white-bg");
    document.querySelector("header").classList.add("black-bg");
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
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      pauseOnHover: false
    };

    return (
      <div className="page-practice">
        <Container style={{padding: 0}} fluid={true} className="container">
          <div className="top-text">
            <h1 className="reg text-white lighter padding-top-2">
              Whether you’re established or just starting, we can help your organization grow through the power of design.
            </h1>
          </div>
          <Slider {...settings}>
              <img src="http://piscatello.com/wp-content/uploads/2014/04/PDC_Studio3.jpg"/>
              <img src="http://piscatello.com/wp-content/uploads/2014/04/PDC_StudioDetail2.jpg"/>
              <img src="https://s3.amazonaws.com/piscatello/Screen+Shot+2019-01-31+at+4.47.01+PM.png"/>
              <img src="https://s3.amazonaws.com/piscatello/A0130FF7-26C8-44E1-B916-565DE6BB5170.png"/>
              <img src="https://s3.amazonaws.com/piscatello/MidoriHse_512_1-2880x1922.jpeg"/>
          </Slider>
          <h2 className="light text-white reg padding-top-7 padding-btm-7">About</h2>
          <div className="text-cols text-grey">
            <p>
              Piscatello Design Centre is a multidisciplinary design consultancy, founded by Rocco Piscatello in 1997. Since then, he, and the team around him, have established a methodology for combining business strategy and creativity to help organizations realize their full potential. We consider all brand communications as a totality and apply a holistic approach to design.
              <br/><br/>
              <span>Central to our ethos is an appetite for enquiry, discovery, and understanding. We believe the best design solutions are achieved through discussion and listening. Every project begins with research to ensure our design solution is suitable to your brand and the culture of its location.</span>
              <br/><br/>
              We have always been passionate advocates for sustainable design and apply the principles of good design in every endeavor we undertake. Our ultimate aim is to create beautiful experiences that are strategic, universal, and timeless.
            </p>
          </div>
          <div className="image-container padding-top-5">
            <img src="http://piscatello.com/wp-content/themes/pdc/images/client_logos/PDC_ClientLogos_Desktop.svg" />
          </div>
        </Container>
        <div className="bottom">
          <Container style={{padding: 0}} fluid={true} className="container">
            <h2 className="light text-white reg padding-top-7 padding-btm-7">Leadership</h2>
            <div className="image-grid-2">
              <div className="image-container">
                <h2 className="text-grey light">
                Rocco Piscatello is principal and creative director of Piscatello Design Centre.  
                Piscatello is passionate about working with industry leaders to help their businesses grow and thrive.
                He was a former creative director at Vignelli Associates prior to founding Piscatello Design Centre.                
                <br/>
                <br/>
                His past and present global clients include the Robin Hood Foundation, New York University, Ronald McDonald House, Ducati Motors, BMW, Frank Gehry Partners, Guggenheim Museum, Jean-Georges Management, Starwood Hotels and Resorts, Colorforms, PriceWaterHouseCoopers, United Colors of Benetton, Warner Bros., Metropolitan Transit Authority, Tishman Speyer, and the U.S. General Services Administration.                <br/>
                <br/>
                Piscatello has been cited for excellence by the leading organizations promoting superiority in design. Included are the American Institute of Graphic Arts and the Society for Experiential Graphic Design. Piscatello is a frequent speaker on design and was selected by Graphic Design USA as one of the 2003 “People to Watch.” 
                <br/>
                <br/>
                His work is included in the permanent collections of the Denver Art Museum, the Vignelli Center for Design Studies, and the Library of Congress. His book. “Rocco Piscatello: Poster Works for FIT”, was published in 2017.                </h2>
              </div>
              <div className="image-container sticky">
                <img src="https://s3.amazonaws.com/piscatello/42496ed13e2a70401707ff27444ad5f31d774397+copy.jpg" />
              </div>
            </div>
          </Container>
          <div className="" style={{background: "#111", marginTop: "6rem"}}>
            <Container style={{padding: 0}} fluid={true} className="container">
              <h1 className="text-white lighter reg" style={{padding: "7rem 0 0 0", width: "75%"}}>
                Let's work together.
              </h1>
                <br/><br/>
              <h1 className="text-grey lighter reg" style={{padding: "0 0 7rem 0", width: "75%"}}>
                Email us at <a href="mailto:work@piscatello.com"><HoverLink grey-grey="true">work@piscatello.com</HoverLink></a> or call <a href="tele:+1 212 502 4734"><HoverLink grey-grey="true">+1 212 502 4734</HoverLink></a> to learn how we can become an extension of your team.
              </h1>
            </Container>
          </div> 
        </div>
      </div>
    );
  }
}

export default PracticePage;