import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../App.css';
import './ContactPage.css';
import Clock from 'react-live-clock';

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
        <section className="contact-header">
          <Container fluid={true} className="container" style={{padding: 0}}>
            <h3 className="reg text-bold text-white padding-top-4 text-capitalize">Contact Us</h3>
            <Row>
              <Col xs={12} sm={10} md={8} lg={7}  style={{ paddingBottom: "5rem"}}>
                <h3 className="light reg text-white padding-top-2">
                  Give us a call or send us an email.
                </h3>
              </Col>
            </Row>
          </Container>
        </section>
        <Container fluid={true} className="container" style={{padding: 0, background: "#FFF"}}>
          <div className="information-grid">
            <div className="info-block">
              <h3 className="reg">New Work</h3>
              <h4 className="light padding-top-2">Rocco Piscatello</h4>
              <h4 className="light">Principal</h4>
              <h4 className="light">+1 212 502 4734</h4>
              <h4 className="light"><HoverLink grey-grey>work@piscatello.com</HoverLink></h4>
            </div>
            <div className="info-block">
              <h3 className="reg">Press</h3>
              <br/>
              <h4 className="light padding-top-2">Press Requests</h4>
              <h4 className="light">+1 212 502 4734</h4>
              <h4 className="light"><HoverLink grey-grey>press@piscatello.com</HoverLink></h4>
            </div>
            <div className="info-block">
              <h3 className="reg">General</h3>
              <br/>
              <h4 className="light padding-top-2">General Information</h4>
              <h4 className="light">+1 212 502 4734</h4>
              <h4 className="light"><HoverLink grey-grey>info@piscatello.com</HoverLink></h4>
            </div>
            <div className="info-block">
              <h3 className="reg">Careers</h3>
              <br/>
              <h4 className="light padding-top-2">Human Resources</h4>
              <h4 className="light">+1 212 502 4734</h4>
              <h4 className="light"><HoverLink grey-grey>careers@piscatello.com</HoverLink></h4>
            </div>
          </div>
          <div className="contact-banner padding-top-5">
              <img src="http://piscatello.com/wp-content/uploads/2014/04/PDC_Studio3.jpg"/>
          </div>
          <div className="information-grid">
            <div className="info-block">
              <h3 className="reg">
                New York
              </h3>
              <h3 className="reg">
                <Clock format={'HH'} ticking={true} timezone={'US/Eastern'} />
                <span className="blink">:</span>
                <Clock format={'mma'} ticking={true} timezone={'US/Eastern'} />
              </h3>
              <br/>
              <h4 className="light">
                330 West 38th Street <br/>
                New York, NY 10018 <br/>
                United States <br/>
                Get Directions <br/>
              </h4>
            </div>
            <div className="info-block">
              <br/>
              <br/>
              <br/>
              <br/>
              <h4 className="light">
                Piscatello Design Centre is located on the tenth floor of a 16-story building 
                located in Manhattan’s Garment District.
              </h4>
            </div>
            <div className="info-block">
            </div>
            <div className="info-block">
              <h3 className="reg">Follow Us</h3>
              <br/>
              <br/>
              <br/>
              <h4 className="light">Twitter</h4>
              <h4 className="light">Instagram</h4>
              <h4 className="light">Facebook</h4> 
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default ContactPage;
