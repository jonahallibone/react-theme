import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import HoverLink from '../HoverLink/HoverLink';
import './Footer.css';
import { Link, withRouter } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        console.log(this.props)
        setTimeout(() => document.querySelector("#footer").style.opacity="1", 1200);

        this.toggleFooter();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.toggleFooter();
    }

    toggleFooter() {
        const {location} = this.props;

        if(location.pathname.includes("/work/")) {
            document.querySelector("#footer").style.display="none";
        }

        else {
            document.querySelector("#footer").style.display="block";
        }
    }

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
                            <a href="https://www.instagram.com/piscatellodesigncentre/" className="light"><HoverLink grey-black="true">Instagram</HoverLink></a>
                            <a href="https://www.linkedin.com/company/piscatello-design-centre" className="light"><HoverLink grey-black="true">LinkedIn</HoverLink></a>
                            <a href="http://twitter.com/piscatelloPDC" className="light" target="_blank"><HoverLink grey-black="true">Twitter</HoverLink></a>
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
export default withRouter(Footer);