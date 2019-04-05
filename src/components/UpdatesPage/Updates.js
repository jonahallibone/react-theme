import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import HoverLink from '../HoverLink/HoverLink';
import {ProjectsContext} from "../../ProjectsContext";
import Icon from 'react-icons-kit';
import {arrows_slim_right} from 'react-icons-kit/linea/arrows_slim_right'
import { Container, Row, Col } from 'react-grid-system';
import "./Updates.css";

class Updates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userEmail: ""
        }
    }

    componentDidMount() {
        setTimeout(() => this.styleWhite(), 2000);
        this.handleScroll();
        document.addEventListener("scroll", this.handleScroll)
    }

    styleWhite = () => {
        document.querySelector("header").classList.add("white-bg");
    }

    addSubscriber = async () => {
        document.querySelector(".update-input-container").classList.add("hide")
        document.querySelector(".loader").classList.add("show")
        let res = await fetch("https://api.piscatello.space/wp-json/subscribers/add-email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email": this.state.userEmail}),
        }).then(data => {
            setTimeout(() => document.querySelector(".loader").classList.remove("show"), 1000);
            document.querySelector(".thank-you-text").classList.add("show")
            return data.json()
        })

        // console.log(res);
    }

    handleChange = (event) => {
        this.setState({userEmail: event.target.value});
    }
    
    getDateFormat(postdate) {
        const date = new Date(postdate);
        return `${date.toLocaleDateString('en-EN', {day: "numeric"})} ${date.toLocaleDateString('en-EN', {month: "long"})} ${date.toLocaleDateString('en-EN', {year: "numeric"})}`;
    }
    
    handleScroll = () => {
        let rows = document.querySelectorAll(".update-row");

        rows.forEach(el => {
            let top = el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) * .85;
            if(top) {
                el.classList.add("animate-in");
            }
        });
    }

    renderUpdates = (updates) => {
        // console.log(updates)
        if(!updates.length) {
            return;
        }

        var options = {day: 'numeric', year: 'numeric', month: 'long', };

        return updates.map(el => {
            return (
                <Link to={`/update/${el.slug}`} className="update-row" key={el.id}>
                    <div className="update-des">
                        <div>
                            <h3 className="reg text-bold">
                                <HoverLink grey-black={true}>{el.title.rendered}</HoverLink>
                            </h3>
                            <p className="text-grey light">{this.getDateFormat(el.date)}</p>
                        </div>
                        <div>
                            <p className="text-grey light" dangerouslySetInnerHTML={{__html: el.excerpt.rendered}} />
                            <p><HoverLink grey-black={true}>Read More</HoverLink></p>
                        </div>
                    </div>
                    <div className="update-img">
                        <img src={el.acf.featured_image} alt={el.title.rendered}/>
                    </div>
                </Link>
            )
        });
    }

    render() {
        return(
            <section className="updates-page" style={{paddingTop: "70px"}}>
                <Container fluid={true} className="container" style={{padding: 0}}>
                    <div className="updates-heading">
                        <h1 className="text-black reg lighter">Stay Updated.</h1> 
                        <div className="loader"></div>
                        <div className="thank-you-text">
                            <h1 className="text-grey reg lighter">Thank you for subscribing.</h1>
                        </div>
                        <div className="update-input-container">
                            <input type="text" onChange={this.handleChange} className="update-input" value={this.state.userEmail} placeholder="example@example.com"/>
                            <div className="signup-button" onClick={this.addSubscriber}>
                                <div style={{ color: '#999' }}>
                                    <Icon size={50} icon={arrows_slim_right}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <section className="update-section">
                    <Container fluid={true} className="container" style={{padding: 0, display: "flex", alignItems: "center"}}>
                        <div className="update-feed">
                            <div style={{bottom: "0px"}} className="news-column">
                                <div className="reg text-grey light hover-underline news-side-item padding-btm-md">
                                    <h3 className="text-black reg"><span className="text-black text-bold">03 April</span></h3>
                                    <p className="padding-top-1"><span className="text-grey text-light">Work</span></p>
                                    <p className="text-black">
                                        Piscatello Design Centre launches a new website, redesigned and developed from the ground up.
                                    </p>
                                </div>
                                <div className="reg text-grey light hover-underline news-side-item padding-btm-md">
                                    <a href="http://www.cadc.org/announcements/4096884/reflections-on-ten-qualities-of-design-11-15" target="_blank">
                                        <h3 className="text-black reg"><span className="text-black text-bold">23 February</span></h3>
                                        <p className="padding-top-1"><span className="text-grey text-light">Exhibition</span></p>
                                        <p className="text-red">
                                            Reflections on Ten Qualities of Design Exhibition at the University of New Haven lengthened
                                            <span className="link-arrow black"></span>
                                        </p>
                                    </a>
                                </div>
                                <div className="reg text-grey light hover-underline news-side-item padding-btm-md">
                                    <h3 className="text-black reg"><span className="text-black text-bold">12 November</span></h3>
                                    <p className="padding-top-1"><span className="text-grey text-light">Lecture</span></p>
                                    <p className="text-black">
                                        Rocco Piscatello to Speak at the University of New Haven
                                    </p>
                                </div>    
                                <div className="reg text-grey light hover-underline news-side-item padding-btm-md">
                                    <a href="https://www.mohawkconnects.com/article/mohawk-blog/rocco-piscatello-poster-works-fit" target="_blank">
                                        <h3 className="text-black reg"><span className="text-black text-bold">05 November</span></h3>
                                        <p className="padding-top-1"><span className="text-grey text-light">Featured</span></p>
                                        <p className="text-red">
                                            Mohawk Fine Paper Features Rocco Piscatello’s Ten Qualities of Design
                                            <span className="link-arrow black"></span>
                                        </p>
                                    </a>
                                </div>                          
                            </div>
                            <ProjectsContext.Consumer>
                                {({ updates }) => (
                                    <div className="update-feed--grid">
                                        {this.renderUpdates(updates)}
                                    </div>
                                )}
                            </ProjectsContext.Consumer>
                            
                            
                        </div>
                </Container>
            </section>
        </section>
        )
    }
}

export default Updates;