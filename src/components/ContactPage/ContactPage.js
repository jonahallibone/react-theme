import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Input from '../Input/Input';
import '../../App.css';
import './ContactPage.css';


class ContactPage extends Component {
  render() {
    return (
      <section className="transition-page contact-page">
        <section className="contact-header">
          <Container fluid={true} className="container" style={{padding: 0, background: "#000"}}>
            <h3 className="reg text-bold text-white padding-top-4 text-capitalize">Contact Us</h3>
            <Row>
              <Col xs={12} sm={10} md={8} lg={7}  style={{ paddingBottom: "5rem"}}>
                <h3 className="reg light-white padding-top-2">
                  Give us a call or send us an email.
                </h3>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="contact-form">
          <Container fluid={true} className="container" style={{padding: 0}}>
          <div id="form-grid">
            <div className="form">
              <div className="input-container">
                <input type="text" placeholder="Name"/>
              </div>
              <div className="input-container">
                <input type="text" placeholder="Email"/>
              </div>
              <div className="input-container">
                <input type="text" placeholder="Company" />
              </div>
              <div className="input-container">
                <div className="radio-boxes">
                  <div className="box selected" tabIndex="0">New Project</div>
                  <div className="box" tabIndex="0">Press</div>
                  <div className="box" tabIndex="0">Say Hello</div>
                </div>
              </div>
              <div className="input-container">
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div className="floating-contact">
              <h3 className="text-white reg">New York Studio</h3>
              <br></br>
              <h4 className="text-white">330 West 38th Street</h4>
              <h4 className="text-white">New York, NY, 10018</h4>
              <br/>
              <h4 className="text-white"></h4>
            </div>
          </div>
          </Container>
        </section>
      </section>
    );
  }
}

export default ContactPage;
