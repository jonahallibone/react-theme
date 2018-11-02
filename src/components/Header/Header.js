import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import './Header.css';
// import {default as Tilty} from "react-tilty";

import '../../App.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuLabel: "Menu"
        }
    }

    componentDidMount = () => {
        this.styleHeader();
        this.menuButton.addEventListener("click", this.handleMenuClick);
    }

    componentWillUnmount = () => {
        cancelAnimationFrame(this.styleHeader)
    }
    
    handleMenuHover(e) {

        document.querySelectorAll(".image-switcher").forEach(el => el.classList.add("hidden"))

        if(e.currentTarget.classList.contains("work-image")) {
           document.querySelector(".work-image--src").classList.remove("hidden")
        }
       
        else if(e.currentTarget.classList.contains("about-image")) {
            document.querySelector(".about-image--src").classList.remove("hidden")
        }

        else if(e.currentTarget.classList.contains("contact-image")) {
            document.querySelector(".contact-image--src").classList.remove("hidden")
        }
    }

    handleMenuLeave () {
        document.querySelectorAll(".image-switcher").forEach(el => el.classList.add("hidden"))
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

    styleHeader = () => {
        if(window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector("header").classList.add("header-min")
        }
    
        else document.querySelector("header").classList.remove("header-min")
        requestAnimationFrame(this.styleHeader)
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
                                    {/* <span className="hamburger">
                                        <span className="bar"></span>
                                        <span className="bar"></span>
                                        <span className="bar"></span>
                                    </span> */}
                                </div>
                            </Col>
                    </Row>
                </Container>
                <div className="header-overlay" ref={elem => this.overlay = elem}>
                    <div className="menu-vert">
                        <Container fluid={true} className="container" style={{padding: 0, height: "100%", alignItems: "center", display: "flex"}}>
                            <Row style={{ flex: "0 0 100%"}} align="center">
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{display: "flex", justifyContent: "space-between"}}>
                                    <Link to="/work">
                                        <h1 className="animate--pre-animate work-image menu--image-hover">
                                            <span style={{transform: "translateZ(20px)"}}>Work</span>
                                            {/* <img className="image-switcher work-image--src" src="http://piscatello.com/wp-content/uploads/2018/01/RMHNY_Kitchen2.jpg" alt=""></img> */}
                                        </h1>
                                        <h2 className="light margin-top-1">
                                            Our work encompasses
                                            strategy and identity,
                                            signage and wayfinding,
                                            websites and digital
                                            experiences.
                                        </h2>
                                    </Link>
                                    <Link to="/expertise">
                                        <h1 className="animate--pre-animate about-image menu--image-hover">
                                            Expertise
                                            {/* <img className="image-switcher about-image--src" src="http://piscatello.com/wp-content/themes/pdc/images/studio_people.jpg" alt=""></img> */}
                                        </h1>
                                        <h2 className="light margin-top-1">
                                            We provide design solutions
                                            that create value for our clients
                                            and their audiences.
                                        </h2>
                                    </Link>
                                    <Link to="/studio">
                                        <h1 className="animate--pre-animate contact-image menu--image-hover">
                                            Centre
                                            {/* <img className="image-switcher contact-image--src" src="http://piscatello.com/wp-content/themes/pdc/images/studio_light.jpg" alt=""></img> */}
                                        </h1>
                                        <h2 className="light margin-top-1">
                                            We are a team of strategic and
                                            creative experts committed to solving
                                            a wide variety of communication
                                            challenges.
                                        </h2>
                                    </Link>
                                    <Link to="/contact">
                                        <h1 className="animate--pre-animate contact-image menu--image-hover">
                                            Contact
                                        </h1>
                                        <h2 className="light margin-top-1">
                                            Contact us to learn more
                                            about the Centre and sign up
                                            for our newsletter.
                                        </h2>
                                    </Link>
                                </Col>
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
