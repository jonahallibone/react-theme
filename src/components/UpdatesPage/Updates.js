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
    
    renderUpdates = (updates) => {
        // console.log(updates)
        if(!updates.length) {
            return;
        }

        var options = {day: 'numeric', year: 'numeric', month: 'long', };

        return updates.map(el => {
            return (
                <Link to={`/update/${el.slug}`} className="update-row" key={el.id}>
                    <div className="update-img">
                        <img src={el.acf.featured_image} alt={el.title.rendered}/>
                    </div>
                    <div className="update-des">
                        <h3 className="reg text-bold">
                            <HoverLink black={true}>{el.title.rendered}</HoverLink>
                        </h3>
                        <p className="text-grey light padding-top-175">{new Date(el.date).toLocaleDateString('en-US', options)}</p>
                        <br/>
                        <p className="text-grey light" dangerouslySetInnerHTML={{__html: el.excerpt.rendered}} />
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
                            <ProjectsContext.Consumer>
                                {({ updates }) => (
                                    <div className="update-feed--grid">
                                        <h2 className="text-bold">Thoughts</h2>
                                        {this.renderUpdates(updates)}
                                    </div>
                                )}
                            </ProjectsContext.Consumer>
                            {/* Space for column gap */}
                            <div></div>
                            {/* End space for column gap */}
                            <div style={{bottom: "0px"}} className="padding-btm-lg news-column">
                                <h2 className="text-bold" style={{marginBottom: "2.5rem"}}>News</h2>
                                <div className="reg text-grey light hover-underline news-side-item padding-btm-md">
                                    <p className="text-black"><span className="text-black text-bold">Exhibition Extended</span></p>
                                    <p><span className="text-grey text-light">22 March 2019</span></p>
                                    <p className="padding-top-1">
                                        Reflections on Ten Qualities of Design Exhibition at the University of New Haven lengthened
                                    </p>
                                </div>
                                <div target="_blank" className="reg text-grey light hover-underline news-side-item padding-btm-md">
                                    <a href="https://www.mohawkconnects.com/article/mohawk-blog/rocco-piscatello-poster-works-fit" target="_blank">
                                        <p className="text-black">
                                            <span className="text-black text-bold">Exhibition</span>
                                        </p>
                                        <p>
                                            <span className="text-grey text-light">15 December 2018</span>
                                        </p>
                                        <p className="padding-top-1">
                                            Mohawk Fine Paper Features Rocco Piscatello’s Ten Qualities of Design
                                            <span className="link-arrow black"></span>
                                        </p>
                                    </a>
                                </div>
                                <div className="reg text-grey light hover-underline news-side-item padding-btm-md">
                                    <p className="text-black"><span className="text-black text-bold">Guest Speaker</span></p>
                                    <p><span className="text-grey text-light">12 November 2018</span></p>
                                    <p className="padding-top-1">
                                        Rocco Piscatello to Speak at the University of New Haven
                                    </p>
                                </div>                              
                            </div>
                        </div>
                </Container>
            </section>
        </section>
        )
    }
}

export default Updates;