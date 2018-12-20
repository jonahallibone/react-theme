import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import './Header.css';
import HoverLink from '../HoverLink/HoverLink';

import '../../App.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuLabel: "Menu",
            currentQuote: ""
        }

        this.animation = null;
        this.animating = false;

        this.descriptions = {
            "work": 
                `Our work encompasses
                strategy and identity,
                signage and wayfinding,
                websites and digital experiences.`,
            "expertise": 
                `We provide design solutions
                that create value for our clients
                and their audiences.`,
            "centre": `
                We are a team of strategic and
                creative experts committed to solving
                a wide variety of communication
                challenges.`,
            "contact": `
                Contact us to learn more
                about the Centre and sign-up
                to our newsletter`
        }
        
    }

    componentDidMount = () => {
        this.menuButton.addEventListener("click", this.handleMenuClick);
    }

    componentWillUnmount = () => {
        cancelAnimationFrame(this.styleHeader)
    }


    handleMenuClick = () => {
        this.header.classList.toggle("header-overlay--visible");


        if(this.state.menuLabel === "Menu") {
            this.setState({menuLabel: "Close"})
        }
        else {
            this.setState({menuLabel : "Menu"})
        }


        this.header.querySelectorAll(".animate--pre-animate").forEach((el, i) => {
            setTimeout(() => {
                el.classList.toggle("animate--post-animate")
            }, i * 200);
        });
    }

    render() {
        return (
            <header ref={elem => this.header = elem}>
                <Container fluid={true} className="container" style={{padding: 0}}>
                    <Row className={"text-white logo"} style={{alignItems: "center"}}>
                        <Col xs={10} sm={6} style={{alignItems: "center"}}>
                            <h2><Link to="/">Piscatello Design Centre</Link></h2>
                        </Col>
                            <Col xs={2} sm={6} className={"menu"} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                                <div className="menu-button" ref={elem => this.menuButton = elem}>
                                    <span>
                                        <h2 className="open-menu">Menu</h2>
                                        <h2 className="close-menu">Close</h2>
                                    </span>
                                </div>
                            </Col>
                    </Row>
                </Container>
                <div className="header-overlay" ref={elem => this.overlay = elem}>
                    <div className="menu-vert">
                        <Container fluid={true} className="container" style={{padding: 0, height: "100%", alignItems: "center", display: "flex"}}>
                            <Row style={{ flex: "0 0 100%", margin: 0}} align="center" justify={"start"}>
                                <div className="link-container" style={{display: "flex", justifyContent: "flex-start", padding: 0}}>
                                    <Link className="page-link" to="/work" data-linkname="work">
                                        <HoverLink thick="true">
                                            <span>Work</span>
                                        </HoverLink>
                                    </Link>
                                    <Link className="page-link" to="/expertise" data-linkname="expertise">
                                        <HoverLink thick="true">
                                            <span>Approach</span>
                                        </HoverLink>
                                    </Link>
                                    <Link className="page-link" to="/studio" data-linkname="centre">
                                        <HoverLink thick="true">
                                            <span>Practice</span>
                                        </HoverLink>
                                    </Link>
                                    <Link className="page-link" to="/contact" data-linkname="contact">
                                        <HoverLink thick="true">
                                            <span>Careers</span>
                                        </HoverLink>
                                    </Link>
                                    <Link className="page-link" to="/contact" data-linkname="contact">
                                        <HoverLink thick="true">
                                            <span>Contact</span>
                                        </HoverLink>
                                    </Link>
                                </div>
                            </Row>
                        </Container>
                    </div>   
                    <div className="header-overlay--footer">
                        <Container fluid={true} className="container" style={{padding: 0}}>
                            <Row>
                                <Col xs={12}>
                                    {/* <strong className="animate--pre-animate">330 W 38th St, New York, NY, 10028</strong> */}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;
