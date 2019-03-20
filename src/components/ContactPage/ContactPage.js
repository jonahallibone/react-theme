import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../App.css';
import './ContactPage.css';
import Clock from 'react-live-clock';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import HoverLink from '../HoverLink/HoverLink';


import '../FlickSlider/FlickSlider.css';
import ContactSlider from '../ContactSlider/ContactSlider';
import CSSAnimate from '../CSSAnimate/CSSAnimate';

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
    // console.log(event.currentTarget)
    this.setState({[`${event.target.formName}`] : event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <section className="transition-page contact-page">
        <Container fluid={true} className="container" style={{padding: 0, background: "#000"}}>
          <CSSAnimate key="i" delay="1000">
            <h1 className="text-white lighter reg lets-work-together" style={{padding: "7rem 0 0 0", width: "75%"}}>
              Let's work together.
            </h1>
          </CSSAnimate>
              <br/><br/>
          <CSSAnimate key="j" delay="1200">
            <h1 className="text-grey lighter reg  lets-work-together" style={{padding: "0 0 7rem 0"}}>
              Email us at <a href="mailto:work@piscatello.com"><HoverLink grey-grey="true">work@piscatello.com</HoverLink></a> or call <a href="tele:+1 212 502 4734"><HoverLink grey-grey="true">+1 212 502 4734</HoverLink></a> to learn how we can become an extension of your team.
            </h1>
          </CSSAnimate>
        </Container>
        <div className="contact-banner padding-btm-5">
          <ContactSlider></ContactSlider>
        </div>
        <div style={{backgroundColor: "#000", paddingTop:"0", paddingBottom: "10rem", borderBottom: "1px solid #DDD"}}>
          <Container fluid={true} className="container" style={{padding: "0 0 0 0"}}>
            <div className="information-grid" style={{paddingTop: 0}}>
              <div className="info-block text-white">
                <h3 className="reg text-bold">
                  New York
                </h3>
                <p className="light text-grey padding-top-2">
                  330 West 38th Street <br/>
                  New York, NY 10018 <br/><br/>
                  +1 212 502 4734 <br/>
                  <div className="arrow-hover">
                    <a target="_blank" href="https://www.google.com/maps/place/Piscatello+Design+Centre/@40.7552864,-73.9956748,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ad6a5bed71:0x1799cc511d2dd26a!8m2!3d40.7552824!4d-73.9934861">
                      <HoverLink grey-grey="true">
                        Get Directions
                      </HoverLink> 
                    </a>
                    <span className="link-arrow"></span>
                  </div>
                </p>
              </div>
              <div className="info-block">
                <h3 className="reg text-white">Information</h3>
                <p className="light padding-top-2 text-grey">General Inquiries</p>
                <p className="light text-grey"><a href="mailto:info@piscatello.com"><HoverLink grey-grey="true">info@piscatello.com</HoverLink></a></p>
                <p className="light padding-top-2 text-grey">Career Opportunities</p>
                <p className="light text-grey">
                  <Link to="/careers">
                    <HoverLink grey-grey="true">
                      Current Openings
                    </HoverLink>
                  </Link>
                </p>
              </div>
              <div className="info-block">
                <h3 className="reg text-white">Connect</h3>
                <p className="light padding-top-2 arrow-hover text-grey">
                  <a href="https://www.instagram.com/piscatellodesigncentre/" target="_blank" className="text-black">
                    <HoverLink grey-grey="true">Instagram</HoverLink>
                    <span className="link-arrow white"></span>
                  </a>
                </p>
                <p className="light text-grey">
                  <a href="https://www.linkedin.com/company/piscatello-design-centre" target="_blank" className="text-black arrow-hover">
                    <HoverLink grey-grey="true">LinkedIn</HoverLink>
                    <span className="link-arrow white"></span>
                  </a>
                </p>
                <p className="light arrow-hover text-grey">
                  <a href="https://twitter.com/piscatellopdc" target="_blank" className="text-black">
                    <HoverLink grey-grey="true">Twitter</HoverLink>
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
                <p className="light text-grey  padding-top-2">
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
