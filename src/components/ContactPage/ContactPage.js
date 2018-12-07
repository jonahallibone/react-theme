import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';
import './ContactPage.css';


class ContactPage extends Component {
  render() {
    return (
      <section className="transition-page contact-page">
        <Container fluid={true} className="container" style={{padding: 0, background: "#000"}}>
          <h3 className="reg text-bold text-white padding-top-4 text-capitalize">Contact Us</h3>
          <Row>
            <Col xs={12} sm={10} md={8} lg={7}  style={{ paddingBottom: "5rem"}}>
              <h3 className="reg light-white padding-top-2">
                We are located on the west side of New York City.
              </h3>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ContactPage;
