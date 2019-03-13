import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import HoverLink from '../HoverLink/HoverLink';
import './Footer.css';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Container className="container" fluid={true} justify={"start"} style={{padding: 0, display: "flex"}}>
                    <div className="row-flex">
                        <div className="break">
                            <span className="light pdc-copy">
                               Piscatello Design Centre, 1997 - {(new Date()).getFullYear()}
                            </span>
                            <Link className="light" to="/careers"><HoverLink grey-black="true">Careers</HoverLink></Link>
                            <Link className="light" to="/update"><HoverLink grey-black="true">Stay Updated</HoverLink></Link>
                            <Link className="light mobile-visible" to="/contact"><HoverLink grey-black="true">Contact</HoverLink></Link>
                        </div>
                        <div className="column-right break">
                            <a className="light"><HoverLink grey-black="true">Instagram</HoverLink></a>
                            <a className="light"><HoverLink grey-black="true">LinkedIn</HoverLink></a>
                            <a className="light"><HoverLink grey-black="true">Twitter</HoverLink></a>
                            <Link className="light mobile-hidden" to="/contact"><HoverLink grey-black="true">Contact</HoverLink></Link>
                        </div>
                        <span className="light pdc-copy-mobile">
                            Piscatello Design Centre 1997 - {(new Date()).getFullYear()}
                        </span>
                    </div>
                </Container>
            </div>
        )
    }
}
export default Footer;