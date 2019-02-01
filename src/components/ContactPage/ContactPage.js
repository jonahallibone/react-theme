import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../App.css';
import './ContactPage.css';
import Clock from 'react-live-clock';
import { Link } from "react-router-dom";
import Slider from "react-slick";

import HoverLink from '../HoverLink/HoverLink';


import '../FlickSlider/FlickSlider.css';

class ContactPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        phoneNumber: "",
        fullName: "",
        email: "",
        company: "",
        message: ""
      }
    }

    this.handleChange = this.handleChange;
    this.handleSubmit = this.handleSubmit;
  }

  componentDidMount() {
    this.styleBlack();
  }

  styleBlack = () => {
    document.querySelector("header").classList.remove("white-bg");
    document.querySelector("header").classList.add("black-bg");
  } 

  handleChange = (event) => {
    console.log(event.currentTarget)
    this.setState({[`${event.target.formName}`] : event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
      <section className="transition-page contact-page">
        <Container fluid={true} className="container" style={{padding: 0, background: "#000"}}>
          <h1 className="text-white lighter reg" style={{padding: "7rem 0", width: "75%"}}>
            Let's work together.
            <br/><br/>
            Email us at <a href="mailto:work@piscatello.com"><HoverLink grey="true">work@piscatello.com</HoverLink></a> or call <a href="tele:+1 212 502 4734"><HoverLink grey="true">+1 212 502 4734</HoverLink></a> to learn how we can become an extension of your team.
            <br/><br/>
            
            
          </h1>
          <div className="contact-banner padding-top-5 padding-btm-5">
              <Slider {...settings}>
                <img src="https://s3.amazonaws.com/piscatello/Apple_Tools_Placeholder-Image.jpg"/>
              </Slider>
          </div>
        </Container>
        <div style={{backgroundColor: "#000", paddingTop:"0", paddingBottom: "10rem", borderBottom: "1px solid #DDD"}}>
          <Container fluid={true} className="container" style={{padding: "0 0 0 0"}}>
            <div className="information-grid" style={{paddingTop: 0}}>
              <div className="info-block text-white">
                <h3 className="reg text-bold">
                  New York
                </h3>
                <p className="light text-white padding-top-2">
                  330 West 38th Street <br/>
                  New York, NY 10018 <br/><br/>
                  +1 212 502 4734 <br/>
                  <div className="arrow-hover">
                    <a target="_blank" href="https://www.google.com/maps/place/Piscatello+Design+Centre/@40.7552864,-73.9956748,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ad6a5bed71:0x1799cc511d2dd26a!8m2!3d40.7552824!4d-73.9934861">
                      <HoverLink grey="true">
                        Get Directions
                      </HoverLink> 
                    </a>
                    <span className="link-arrow"></span>
                  </div>
                </p>
              </div>
              <div className="info-block">
                <h3 className="reg text-white">Information</h3>
                <p className="light padding-top-2 text-white">General Inquiries</p>
                <p className="light text-white"><a href="mailto:info@piscatello.com"><HoverLink grey="true">info@piscatello.com</HoverLink></a></p>
                <p className="light padding-top-2 text-white">Current Openings</p>
                <p className="light text-white">
                  <a href="mailto:info@piscatello.com" className="text-black">
                    <HoverLink grey="true">
                      careers@piscatello.com
                    </HoverLink>
                  </a>
                </p>
              </div>
              <div className="info-block">
                <h3 className="reg text-white">Connect</h3>
                <p className="light padding-top-2 arrow-hover text-white">
                  <a href="https://www.instagram.com/piscatellodesigncentre/" target="_blank" className="text-black">
                    <HoverLink grey="true">Instagram</HoverLink>
                    <span className="link-arrow white"></span>
                  </a>
                </p>
                <p className="light text-white">
                  <a href="https://www.linkedin.com/company/piscatello-design-centre" target="_blank" className="text-black arrow-hover">
                    <HoverLink grey="true">LinkedIn</HoverLink>
                    <span className="link-arrow white"></span>
                  </a>
                </p>
                <p className="light arrow-hover text-white">
                  <a href="https://twitter.com/piscatellopdc" target="_blank" className="text-black">
                    <HoverLink grey="true">Twitter</HoverLink>
                    <span className="link-arrow white"></span>
                  </a>
                </p>
              </div>
              <div className="info-block">
                <h3 className="reg text-white text-bold">
                  <Clock format={'hh'} ticking={true} timezone={'US/Eastern'} />
                  <span className="blink">:</span>
                  <Clock format={'mma'} ticking={true} timezone={'US/Eastern'} />
                </h3>
                <p className="light text-white  padding-top-2">
                  Piscatello Design Centre is located on the tenth floor of a 16-story building 
                  located in Manhattan’s Garment District.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
    );
  }
}

export default ContactPage;
