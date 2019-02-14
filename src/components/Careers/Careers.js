import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import HoverLink from '../HoverLink/HoverLink';

import './Careers.css';

class Careers extends Component {
    componentDidMount() {
        this.styleBlack();
    }

    styleBlack = () => {
        document.querySelector("header").classList.remove("white-bg");
        document.querySelector("header").classList.add("black-bg");
    }
    
    render() {
        return (
            <div className="careers-page">
                <Container fluid={true} className="container" style={{padding: 0}}>
                    <h1 className="text-white lighter reg careers-top-text">We're always on the lookout for the best designers, strategists, and developers to join our team.</h1>
                    <div className="image-container">
                        <img src="https://s3.amazonaws.com/piscatello/studio-hands.jpg" />
                    </div>
                    <div className="careers-grid career">
                        <div>
                            <h3 className="reg text-white text-bold">Internships</h3>
                        </div>
                        <div>
                            <p className="text-grey">
                                We are currently accepting applications for design, strategy, and development internships. Experience in the relevant discipline is an advantage. Commitment, passion, flexibility, and independence is essential.
                            </p><br/>
                            <p className="text-grey">
                                Interns work closely with our team on varied client and internal projects. A solid understanding of Piscatello Design Centre’s work and philosophy is vital.
                            </p><br/>
                            <p className="text-grey">
                                Please send your CV, and/or pdf portfolio, and cover letter, as well as your availability to internships@piscatello.com
                            </p>
                        </div>
                    </div>
                    <div className="careers-grid career">
                        <div>
                            <h3 className="reg text-white text-bold">Internships</h3>
                        </div>
                        <div>
                            <p className="text-grey">
                                We are currently accepting applications for design, strategy, and development internships. Experience in the relevant discipline is an advantage. Commitment, passion, flexibility, and independence is essential.
                            </p><br/>
                            <p className="text-grey">
                                Interns work closely with our team on varied client and internal projects. A solid understanding of Piscatello Design Centre’s work and philosophy is vital.
                            </p><br/>
                            <p className="text-grey">
                                Please send your CV, and/or pdf portfolio, and cover letter, as well as your availability to internships@piscatello.com
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Careers