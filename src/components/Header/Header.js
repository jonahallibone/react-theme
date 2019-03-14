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

const followImages = [
    "https://s3.amazonaws.com/piscatello/header-images/circle.svg",
    "https://s3.amazonaws.com/piscatello/header-images/triangle.svg",
    "https://s3.amazonaws.com/piscatello/header-images/rectangle.svg",
    "https://s3.amazonaws.com/piscatello/header-images/square.svg",
    "https://s3.amazonaws.com/piscatello/header-images/rectanglecircle.svg",
]

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuLabel: "Menu",
            currentQuote: "",
            selectedIndex: null
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

        this.handleMouseMove = this.handleMouseMove.bind(this);
        
    }

    componentDidMount = () => {
        this.menuButton.addEventListener("click", this.handleMenuClick);
    }

    componentWillUnmount = () => {
        cancelAnimationFrame(this.styleHeader)
    }

    handleMenuClick = () => {
        this.header.classList.toggle("header-overlay--visible")


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

    handleMouseMove = (e) => {
        this.followImages.style.transform = `translate(${window.innerWidth / 3}px, ${(e.pageY - window.pageYOffset) * .75}px)`;
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

    getFollowImages() {
        return followImages.map((el, i) => <img src={el} className={this.state.selectedIndex == i ? "selected" : ""} key={`image-${i}`} />)
    }

    setFollowImage(index) {
        // console.log(index)
        this.setState({selectedIndex: index})
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
                                <Link to="/" className="logo-link" className="text-grey">
                                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                        Piscatello Design Centre
                                    </SplitText>
                                </Link>
                            </h2>
                        </Col>
                            <Col xs={2} sm={6} className={"menu"} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                                <div className="menu-button" ref={elem => this.menuButton = elem}>
                                    <h2 className="page-name-menu">{this.getPageName(pathname)}</h2>
                                    <span className="hamburger"></span>
                                </div>
                            </Col>
                    </Row>
                </Container>
                <div className="header-overlay" ref={elem => this.overlay = elem}> 
                    <Container fluid={true} className="container" style={{padding: 0, height: "100%"}}>
                        <div className="menu-vert">
                            <Container fluid={true} className="container links" style={{margin: 0}}>
                                <Row style={{ flex: "0 0 100%", margin: 0}} align="center" justify={"start"}>
                                    <div className="link-container" style={{display: "flex", justifyContent: "flex-start", padding: 0}}>
                                        <Link 
                                            className="page-link" 
                                            to="/" data-linkname="work" 
                                            onMouseOver={() => {this.setFollowImage(0)}}
                                        >
                                            <HoverLink thick="true">
                                                <div className="menu-icon">
                                                    <img src={followImages[0]} />
                                                </div>
                                                <span>Main</span>
                                            </HoverLink>
                                        </Link>
                                        <Link 
                                            className="page-link" 
                                            to="/work" 
                                            data-linkname="work"
                                            onMouseOver={() => {this.setFollowImage(1)}}
                                        >
                                            <HoverLink thick="true">
                                                <div className="menu-icon">
                                                    <img src={followImages[1]} />
                                                </div>
                                                <span>Work</span>
                                            </HoverLink>
                                        </Link>
                                        <Link 
                                            className="page-link" 
                                            to="/practice" 
                                            data-linkname="centre"
                                            onMouseOver={() => {this.setFollowImage(2)}}
                                        >
                                            <HoverLink thick="true">
                                                <div className="menu-icon">
                                                    <img src={followImages[2]} />
                                                </div>
                                                <span>Practice</span>
                                            </HoverLink>
                                        </Link>
                                        <Link 
                                            className="page-link" 
                                            to="/update" 
                                            data-linkname="update"
                                            onMouseOver={() => {this.setFollowImage(3)}}
                                        >
                                            <HoverLink thick="true">
                                                <div className="menu-icon">
                                                    <img src={followImages[3]} />
                                                </div>
                                                <span>Updates</span>
                                            </HoverLink>
                                        </Link>
                                        <Link 
                                            className="page-link" 
                                            to="/contact" 
                                            data-linkname="contact"
                                            onMouseOver={() => {this.setFollowImage(4)}}
                                        >
                                            <HoverLink thick="true">
                                                <div className="menu-icon">
                                                    <img src={followImages[4]} />
                                                </div>
                                                <span>Contact</span>
                                            </HoverLink>
                                        </Link>
                                    </div>
                                </Row>
                            </Container>
                        </div>  
                        <div className="follow-image" ref={elem => this.followImages = elem}>
                            {this.getFollowImages()}
                        </div>
                        <div className="header-info">
                            <p className="text-white text-bold">Info</p>
                            <p className="text-grey">+1 212 502 4734</p>
                            <p className="text-grey">info@piscatello.com</p>
                        </div>
                    </Container>
                </div>
            </header>

        );
    }
}

export default Header;
