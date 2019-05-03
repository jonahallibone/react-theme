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
        const day = date.toLocaleDateString('en-EN', {day: "numeric"});
        return `${day < 10 ? "0" : "" }${day} ${date.toLocaleDateString('en-EN', {month: "long"})} ${date.toLocaleDateString('en-EN', {year: "numeric"})}`;
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
                el.acf.instagram_url 
                ?
                <a href={el.acf.instagram_url} target="_blank" className="update-row" key={el.id}>
                    <div className="update-img">
                        <img src={el.acf.featured_image} alt={el.title.rendered}/>
                    </div>
                    <div className="update-des">
                        <div>
                            <p className="text-grey light padding-btm-sm">{this.getDateFormat(el.date)}</p>
                            <p className="reg text-bold text-white">
                                <HoverLink>{el.title.rendered}</HoverLink>
                            </p>
                        </div>
                        <div>
                            <p className="text-grey light" dangerouslySetInnerHTML={{__html: el.excerpt.rendered}} />
                        </div>
                    </div>
                </a>
                :
                <Link to={`/update/${el.slug}`} className="update-row" key={el.id}>
                    <div className="update-img">
                        <img src={el.acf.featured_image} alt={el.title.rendered}/>
                    </div>
                    <div className="update-des">
                        <div>
                            <p className="text-grey light padding-btm-sm">{this.getDateFormat(el.date)}</p>
                            <p className="reg text-bold text-white">
                                <HoverLink>{el.title.rendered}</HoverLink>
                            </p>
                        </div>
                        <div>
                            <p className="text-grey light" dangerouslySetInnerHTML={{__html: el.excerpt.rendered}} />
                        </div>
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
                        <h1 className="text-white reg lighter">Stay Updated</h1> 
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