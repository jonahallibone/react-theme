import React, { Component } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import '../../App.css';

class AboutPage extends Component {
  render() {
    return (
      <section className="transition-page about-page">
        <PageHeader imageSrc="http://piscatello.com/wp-content/uploads/2014/04/PDC_Studio3.jpg" headerTitle=""></PageHeader>
        <section className="homepage-bottom padded">
          <div className="container padded">
            <h2 className="reg">About Us</h2>
          </div>
          </section>
      </section>
    );
  }
}

export default AboutPage;
