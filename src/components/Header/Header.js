import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from "react-router-dom";

import '../../App.css';

class Header extends Component {

    componentDidMount = () => {
        this.styleHeader();
        this.menuButton.addEventListener("click", this.handleMenuClick);

        this.header.querySelectorAll(".menu--image-hover").forEach(el => el.addEventListener("mouseenter", this.handleMenuHover))
        this.header.querySelectorAll(".menu--image-hover").forEach(el => el.addEventListener("mouseleave", this.handleMenuLeave))
    }

    componentWillUnmount = () => {
        cancelAnimationFrame(this.styleHeader)
    }
    
    handleMenuHover = (e) => {

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

    handleMenuLeave = () => {
        document.querySelectorAll(".image-switcher").forEach(el => el.classList.add("hidden"))
    }

    handleMenuClick = () => {
        this.header.classList.toggle("header-overlay--visible");
        this.header.querySelectorAll(".animate--pre-animate").forEach((el, i) => {
            setTimeout(() => {
                el.classList.toggle("animate--post-animate")
            }, i * 100);
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
                    <Row className={"text-white"} style={{alignItems: "center"}}>
                        <Col xs={10} sm={6} style={{alignItems: "center"}}>
                            <h2><Link to="/">Piscatello Design Centre</Link></h2>
                        </Col>
                            <Col xs={2} sm={6} className={"menu"} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                                <div className="menu-button" ref={elem => this.menuButton = elem}>
                                    <span><h2>Menu</h2></span>
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
                                <Col xs={8} sm={6} md={6} lg={6} xl={6}>
                                    <Link to="/work"><h1 className="animate--pre-animate work-image menu--image-hover">Work</h1></Link>
                                    <Link to="/about"><h1 className="animate--pre-animate about-image menu--image-hover">About</h1></Link>
                                    <Link to="/contact"><h1 className="animate--pre-animate contact-image menu--image-hover">Contact</h1></Link>
                                </Col>
                                <Col xs={4}>
                                    <div className="img-block image-hover">
                                        <img className="image-switcher hidden work-image--src" src="http://piscatello.com/wp-content/uploads/2018/09/NomadX-6.jpg" alt=""></img>
                                        <img className="image-switcher hidden about-image--src" src="http://piscatello.com/wp-content/themes/pdc/images/studio_people.jpg" alt=""></img>
                                        <img className="image-switcher hidden contact-image--src" src="http://piscatello.com/wp-content/themes/pdc/images/studio_light.jpg" alt=""></img>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>   
                    <div className="header-overlay--footer">
                        <Container fluid={true} className="container" style={{padding: 0}}>
                            <Row>
                                <Col xs={12}>
                                    <strong className="animate--pre-animate">330 W 38th St, New York, NY, 10028</strong>
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
