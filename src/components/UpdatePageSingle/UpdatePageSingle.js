import React, { Component } from "react";
import "./UpdatePageSingle.css";
import { Container } from "react-grid-system";
import WorkPageHeader from "../WorkPageHeader/WorkPageHeader";
import { withProjectsContext } from "../../ProjectsContext";
import {Link} from "react-router-dom";

import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";


class UpdatePageSingle extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        document.querySelector("header").classList.remove("black-bg");
        document.querySelector("header").classList.add("white-bg");
    }

    getDateFormat(postdate) {
        const date = new Date(postdate);
        return `${date.toLocaleDateString('en-EN', {day: "numeric"})} ${date.toLocaleDateString('en-EN', {month: "long"})} ${date.toLocaleDateString('en-EN', {year: "numeric"})}`;
    }

    render() {
        const {updates, match} = this.props;
        
        var notInstagram = updates.filter(update => !update.acf.instagram_url);
        var index = notInstagram.findIndex(update => update.slug === match.params.id) + 1;
        if(index >= notInstagram.length) {
            index = 0;
        }

        if(!updates.length) return(<div></div>);

        const update = updates.filter(update => update.slug === match.params.id)[0];

        var options = { day: 'numeric', month: 'long',  year: 'numeric' };

        return(
            <div className="update-page-single">
                <Container fluid={true} className="container" style={{padding: 0}}> 
                    <div className="update-title">
                        <h1 className="reg lighter">{update.title.rendered}</h1>
                    </div>                   
                    <section className="update-content-row padding-top-7">
                        <div className="content-flex">
                            <div className="sidebar">
                                <div className="update-bottom-info">
                                    <div className="author-info">
                                        <p>{update._embedded.author[0].name}</p>
                                        <p className="light text-grey">{update._embedded.author[0].description}</p>
                                        <p className="light text-grey padding-top-1">{this.getDateFormat(update.date)}</p>
                                        <div className="update-share-info padding-top-1">
                                            <a href={`https://www.facebook.com/sharer/sharer.php?${document.location}`} target="_blank"><FaFacebookSquare className="facebook" color="#222" size="23px"/></a>
                                            <a href={`https://twitter.com/intent/tweet?text=${document.location}&source=webclient`} target="_blank"><FaTwitter className="twitter" color="#222" size="23px"/></a>
                                            <FaLinkedin className="linkedin" color="#222" size="23px"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="light text-grey" dangerouslySetInnerHTML={{__html: update.content.rendered}} />
                        </div>
                    </section>
                </Container>
                <Link to={`/update/${notInstagram[index].slug}`} className="update-page-bottom">
                    <div className="container">
                        <p className="text-white">Next Update</p>                    
                        <h1 className="reg lighter text-white">{notInstagram[index].title.rendered}</h1>
                    </div>
                    <div className="image-scale" style={{backgroundImage: `url(${notInstagram[index].acf.featured_image}`}}/>
                    <div style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, background: "rgba(0,0,0,0.8)"}}></div>
                </Link>
            </div>
        );
    }
}

export default withProjectsContext(UpdatePageSingle);