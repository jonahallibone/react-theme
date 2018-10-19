import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';
import './WorkPage.css';

class WorkPage extends Component {
  render() {
    return (
      <section className="transition-page" id="page-work">
        <Container fluid={true} className="container" style={{padding: 0}}>
          <h2 className="text-white">Work</h2>
          <h2 className="light padding-top-1">
            Piscatello Design Centre does work that spans are across many disciplines,<br/>client types, and locations. 
            These are a few of the ones we like the most.
          </h2>
        </Container>
      </section>
    );
  }
}

export default WorkPage;
