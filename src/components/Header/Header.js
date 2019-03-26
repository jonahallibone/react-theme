import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import './Header.css';
import HoverLink from '../HoverLink/HoverLink';
import SplitText from 'react-pose-text';

import '../../App.css';

const charPoses = {
    exit: { opacity: 0 },
    enter: {
      opacity: 1,
      delay: ({ charIndex }) => charIndex * 30
    }
};

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuLabel: "Menu",
            open: false
        }

        this.animation = null;
        this.animating = false;
        this.followImages = null;

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
        this.menuButton.addEventListener("mousedown", this.handleMenuClick);

        document.querySelectorAll(".links li").forEach((el, i) => {
            console.log(el)
            el.style.transitionDelay = `${i * 65}ms`;
        })
    }

    componentWillUnmount = () => {
        cancelAnimationFrame(this.styleHeader)
    }

    handleMenuClick = () => {
        this.header.classList.toggle("header-overlay--visible");
    }

    getPageName(pathname) {
        if(pathname.indexOf("update") !== -1) {
            return "Updates";
        }
      
        else if(pathname.indexOf("work") !== -1) {
            return "Work"
        }
      
        else if(pathname.indexOf("contact") !== -1) {
            return "Contact"
        }

        else if(pathname.indexOf("practice") !== -1) {
            return "Practice"
        }

        else if(pathname.indexOf("careers") !== -1) {
            return "Careers"
        }

        else return "Main";
    }

    render() {
        
        let { pathname } = this.props.location;
        console.log(pathname)
        return (
            <header ref={elem => this.header = elem} onMouseMove={this.handleMouseMove}>
                <Container fluid={true} className="container" style={{padding: 0}}>
                    <Row className={"text-white logo"} style={{alignItems: "center"}}>
                        <Col xs={10} sm={6} style={{alignItems: "center"}}>
                            <h2>
                                <Link to="/" className="logo-link" className="text-white hover-white">
                                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                        Piscatello Design Centre
                                    </SplitText>
                                </Link>
                            </h2>
                        </Col>
                            <Col xs={2} sm={6} className={"menu"} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                                <div className="menu-button" ref={elem => this.menuButton = elem}>
                                    <h2 className="page-name-menu light">{this.getPageName(pathname)}</h2>
                                    <span className="hamburger"></span>
                                </div>
                            </Col>
                    </Row>
                    <div className="header-overlay" ref={elem => this.overlay = elem} tabIndex="-1" onBlur={this.handleBlur}>
                        <ul className="links">
                            <li><HoverLink><Link to="/">Main</Link></HoverLink></li>
                            <li><HoverLink><Link to="/work">Work</Link></HoverLink></li>
                            <li><HoverLink><Link to="/practice">Practice</Link></HoverLink></li>
                            <li><HoverLink><Link to="/update">Updates</Link></HoverLink></li>
                            <li><HoverLink><Link to="/contact">Contact</Link></HoverLink></li>
                        </ul>
                    </div>
                </Container>
            </header>

        );
    }
}

export default Header;
