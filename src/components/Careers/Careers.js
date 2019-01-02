import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import HoverLink from '../HoverLink/HoverLink';

import './Careers.css';
import CareerPageSingle from '../CareerPageSingle/CareerPageSingle';

class Careers extends Component {
    render() {
        return (
            <div id="careers">
                <Container fluid={true} className="container" style={{padding: 0}}>
                    <h3 className="reg text-bold padding-top-4 text-white text-capitalize">
                        Careers at Piscatello Design Centre
                    </h3>
                    <Row>
                        <Col xs={12} sm={10} md={8} lg={7}  style={{ paddingBottom: "5rem"}}>
                            <h3 className="reg text-grey light padding-top-2">
                                Join our team of designers and creators.
                            </h3>
                        </Col>
                    </Row>
                </Container>
                <section style={{background: "#FFF"}}>
                    <Container fluid={true} className="container" style={{padding: 0}}>
                        <div className="image-grid">
                            <div className="img-container">
                                <img src="http://piscatello.com/wp-content/themes/pdc/images/studio_light.jpg" alt=""/>
                            </div>
                            <div className="img-container">
                                <img src="http://piscatello.com/wp-content/themes/pdc/images/studio_people.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="career-grid">
                            <div className="career-block">
                                <h3 className="reg">Graphic Design Intern</h3>
                                <p className="text-grey margin-top-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus faucibus 
                                nunc ut bibendum. Sed pretium varius orci, quis egestas enim aliquet at. Maecenas 
                                pellentesque molestie velit vitae tincidunt. Sed finibus pretium lorem, congue 
                                malesuada mi imperdiet ac. 
                                </p>
                                
                            </div>
                            <div className="career-block">
                                <h3 className="reg">Full Stack Engineer</h3>
                                <p className="text-grey margin-top-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus faucibus 
                                nunc ut bibendum. Sed pretium varius orci, quis egestas enim aliquet at. Maecenas 
                                pellentesque molestie velit vitae tincidunt. Sed finibus pretium lorem, congue 
                                malesuada mi imperdiet ac. 
                                </p>
                            </div>
                            <div className="career-block">
                                <h3 className="reg">Graphic Designer</h3>
                                <p className="text-grey margin-top-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus faucibus 
                                nunc ut bibendum. Sed pretium varius orci, quis egestas enim aliquet at. Maecenas 
                                pellentesque molestie velit vitae tincidunt. Sed finibus pretium lorem, congue 
                                malesuada mi imperdiet ac. 
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}

export default Careers