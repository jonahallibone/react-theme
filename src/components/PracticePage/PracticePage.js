import React, { Component } from 'react';

import './Practice.css';
import { Container } from 'react-grid-system';
import Slider from "react-slick";
import SimpleTyper from "../SimpleTyper/SimpleTyper";
import HoverLink from "../HoverLink/HoverLink";
import LogoRow from '../LogoRow/LogoRow';

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
              <img src="http://piscatello.com/wp-content/uploads/2014/04/PDC_Studio3.jpg" />
              <img src="http://piscatello.com/wp-content/uploads/2014/04/PDC_StudioDetail2.jpg" />
              <img src="https://s3.amazonaws.com/piscatello/Screen+Shot+2019-01-31+at+4.47.01+PM.png" />
              <img src="https://s3.amazonaws.com/piscatello/A0130FF7-26C8-44E1-B916-565DE6BB5170.png" />
              <img src="https://s3.amazonaws.com/piscatello/Josie-Wall_16x9.jpg" />
          </Slider>
          <h2 className="light text-white reg padding-top-7 padding-btm-7">About</h2>
          <div className="text-grey" style={{width: "50%"}}>
            <p>
            Piscatello Design Centre is a multidisciplinary design consultancy, founded by Rocco Piscatello in 1997. Since then, he, and the team around him, have established a methodology for combining business strategy and creativity to help organizations realize their full potential.
            <br/><br/>
            Over the years we’ve helped launch new businesses, rebranded existing ones, and created experiences for some of the best organizations in the world. We have always been passionate advocates for creating work that is long-lasting and thorough down to the last detail.
            <br/><br/>
            Whether you’re a Fortune 100 brand, small business, or new start-up, we’d love to help you design better experiences and build your brand.
            </p>
          </div>
          <div className="image-container padding-top-7">
            <LogoRow />
          </div>
          <div>
            <h2 className="light text-white reg padding-top-7 padding-btm-7">Capabilities</h2>
          </div>
          <div className="text-grey" style={{width: "50%"}}>
            <p>We believe design and collaboration go hand and hand. Through collaboration we share, inspire, and test ideas. Lets work together to create something engaging, unique, and special.</p>
          </div>
          <div className="information-grid padding-top-7">
            <div className="info-block">
              <h3 className="reg text-white light">Consulting</h3>
              <ul className="text-grey service-list">
                <li style={{marginTop: "2rem"}}>Design Workshops</li>
                <li>Visitor Journey Mapping</li>
                <li>Persona Development</li>
                <li>Competitor Research</li>
                <li>Stakeholder Interviews</li>
                <li>Design Thinking Facilitation</li>
                <li>Coaching and Mentoring</li>
              </ul>
            </div>
            <div className="info-block">
              <h3 className="reg text-white light">Brand Identity</h3>
              <ul className="text-grey service-list">
                <li style={{marginTop: "2rem"}}>Logomarks</li>
                <li>Identity Systems</li>
                <li>Icon Development</li>
                <li>Brand Identity Guidelines</li>
                <li>Digital Templates</li>
                <li>Launch and Event Production</li>
                <li>Book Design</li>
              </ul>
            </div>
            <div className="info-block">
              <h3 className="reg text-white light">Digital Design</h3>
              <ul className="text-grey service-list">
                <li style={{marginTop: "2rem"}}>Content Strategy</li>
                <li>Visual & Interface Design</li>
                <li>Cross Platform Design</li>
                <li>Content Management Systems</li>
                <li>Full Stack Development</li>
                <li>Content Design & Asset Creation</li>
                <li>SEO Strategies & Social Media</li>
              </ul>
            </div>
            <div className="info-block">
              <h3 className="reg text-white light">Environmental Graphics</h3>
              <ul className="text-grey service-list">
                <li style={{marginTop: "2rem"}}>Signage Programs</li>
                <li>Branded Environments</li>
                <li>Super Graphics and Fine Art</li>
                <li>Donor Recognition</li>
                <li>Retail Tenant Guidelines</li>
                <li>Exhibit and Retail Signage</li>
                <li>Memorial Graphics</li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="bottom">
          <Container style={{padding: 0}} fluid={true} className="container">
            <h2 className="light text-white reg padding-top-7 padding-btm-7" style={{paddingTop: "14rem"}}>Leadership</h2>
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
              <h1 className="text-white lighter reg" style={{padding: "10.5rem 0 0 0", width: "75%"}}>
                Let's work together.
              </h1>
                <br/><br/>
              <h1 className="text-grey lighter reg" style={{padding: "0 0 10.5rem 0", width: "75%"}}>
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