import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../App.css';
import './ContactPage.css';
import Clock from 'react-live-clock';
import { Link } from "react-router-dom";

import HoverLink from '../HoverLink/HoverLink';


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

  handleChange = (event) => {
    console.log(event.currentTarget)
    this.setState({[`${event.target.formName}`] : event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  produceAreaCode = () => {

  }

  render() {
    return (
      <section className="transition-page contact-page">
        <Container fluid={true} className="container" style={{padding: 0, background: "#000"}}>
          <div className="information-grid">
            <div className="info-block">
              <h3 className="reg text-red">Contact Us</h3>
              <h4 className="light padding-top-2 text-white">
                Our projects are about collaboration and partnership. Contact us 
                to learn how we can become an extension to your team.
                <br/><br/>
                <a href="mailto:projects@piscatello.com"><HoverLink grey="true">projects@piscatello.com</HoverLink></a> <br/>
              </h4>
            </div>
            <div className="info-block">
              {/* <h3 className="reg">Request a Meeting</h3>
              <h4 className="light padding-top-2 text-white">New Work</h4>
              <h4 className="light text-white">+1 212 502 4734</h4>
              <h4 className="light text-white"><HoverLink grey>work@piscatello.com</HoverLink></h4> */}
            </div>
            <div className="info-block text-white">
              <h3 className="reg">
                New York
              </h3>
              <h4 className="light text-white padding-top-2">
                330 West 38th Street <br/>
                New York, NY 10018 <br/><br/>
                +1 212 502 4734 <br/><br/><br/>
                <div className="arrow-hover">
                  <a target="_blank" href="https://www.google.com/maps/place/Piscatello+Design+Centre/@40.7552864,-73.9956748,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ad6a5bed71:0x1799cc511d2dd26a!8m2!3d40.7552824!4d-73.9934861">
                    <HoverLink grey="true">
                      Get Directions
                    </HoverLink> 
                  </a>
                  <span className="link-arrow"></span>
                </div>
              </h4>
            </div>
            <div className="info-block">
              <h3 className="reg text-white">
                <Clock format={'hh'} ticking={true} timezone={'US/Eastern'} />
                <span className="blink">:</span>
                <Clock format={'mma'} ticking={true} timezone={'US/Eastern'} />
              </h3>
              <h4 className="light text-white  padding-top-2">
                Piscatello Design Centre is located on the tenth floor of a 16-story building 
                located in Manhattan’s Garment District.
              </h4>
            </div>
          </div>
          <div className="contact-banner padding-top-5 padding-btm-5">
              <img src="http://piscatello.com/wp-content/uploads/2014/04/PDC_Studio3.jpg"/>
          </div>
        </Container>
        <div style={{backgroundColor: "#f2f3f5", paddingTop:"5rem", paddingBottom: "5rem", borderBottom: "1px solid #DDD"}}>
          <Container fluid={true} className="container" style={{padding: "0 0 0 0"}}>
            <div className="information-grid" style={{paddingTop: 0}}>
              <div className="info-block">
                <h3 className="reg">General</h3>
                <h4 className="light padding-top-2">Information</h4>
                <h4 className="light">+1 212 502 4734</h4>
                <h4 className="light">
                  <a href="mailto:info@piscatello.com" className="text-black">
                    <HoverLink grey-black="true">
                      info@piscatello.com
                    </HoverLink>
                  </a>
                </h4>
              </div>
              <div className="info-block">
                <h3 className="reg">Careers</h3>
                <h4 className="light padding-top-2">Inquiries</h4>
                <h4 className="light">+1 212 502 4734</h4>
                <h4 className="light">
                  <a href="mailto:careers@piscatello.com" className="text-black">
                    <HoverLink grey-black="true">
                      careers@piscatello.com
                    </HoverLink>
                  </a>
                </h4>
              </div>
              <div className="info-block">

              </div>
              <div className="info-block">
                <h3 className="reg">Connect</h3>
                <h4 className="light padding-top-2 arrow-hover">
                  <a href="https://www.instagram.com/piscatellodesigncentre/" target="_blank" className="text-black">
                    <HoverLink grey-black="true">Instagram</HoverLink>
                    <span className="link-arrow black"></span>
                  </a>
                </h4>
                <h4 className="light">
                  <a href="https://www.linkedin.com/company/piscatello-design-centre" target="_blank" className="text-black arrow-hover">
                    <HoverLink grey-black="true">LinkedIn</HoverLink>
                    <span className="link-arrow black"></span>
                  </a>
                </h4>
                <h4 className="light arrow-hover">
                  <a href="https://twitter.com/piscatellopdc" target="_blank" className="text-black">
                    <HoverLink grey-black="true">Twitter</HoverLink>
                    <span className="link-arrow black"></span>
                  </a>
                </h4>
              </div>
            </div>
          </Container>
        </div>
      </section>
    );
  }
}

export default ContactPage;
